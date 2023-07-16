from pyspark.sql import SparkSession
import pyspark.sql.functions as F
import requests
import pandas as pd
import numpy as np
import json

spark = SparkSession.builder.master("local") \
                    .appName('etl') \
                    .getOrCreate()

def load_in_database(df, schema, table_name, mode='overwrite'):
    '''Write pyspark dataframe into PostgreSQL Database'''
    SERVER_NAME = 'self-server'
    PORT = 1433
    DATABASE_NAME = 'movies_database'
    jdbc_url = f'jdbc:sqlserver://{SERVER_NAME}.database.windows.net:{PORT};database={DATABASE_NAME}'

    (df.write
    .format("jdbc")
    .option("url", jdbc_url)
    .option("dbtable", f'[{schema}].[{table_name}]')
    .option("user", DATABASE_USERNAME)
    .option("password", DATABASE_PASSWORD)
    .mode(mode)
    .save())

# COMMAND ----------

# EXTRACT DATASET  
rating_df = spark.read.load("/mnt/ratings/ratings.csv", format="csv", sep=",", inferSchema="true", header="true")

movies_mapping_df = spark.read.load("/mnt/ratings/links.csv", format="csv", sep=",", inferSchema="true", header="true")
# TRANSFORM DATA

# Inner join to remove incompatible data
rating_df = rating_df.join(movies_mapping_df, on='movieId', how='inner')

# Drop unnecessary columns & null-contained row
rating_df = rating_df.drop('movieId', 'timestamp', 'imdbId').dropna()

# Rename columns as database table columns name
column_mapping = {'userId': 'user_id',
              'tmdbId': 'movie_id',
              'rating': 'rating'}
rating_df = rating_df.select(*[F.col(old_name).alias(new_name) for old_name, new_name in column_mapping.items()])

# COMMAND ----------

# Split movie_ids into 100 chunks
movie_np_array = rating_df.select('movie_id').distinct().toPandas().values.reshape(-1)
movie_chunks_list = np.array_split(movie_np_array, 100)

headers = {
    "accept": "application/json",
    "Authorization": f"Bearer {API_KEY}"
}
    
# Some movies in dataset are no longer in TMDB database
fail_request_movie_id = []

# COMMAND ----------

# Pull genre metadata and load in database
genres_url = "https://api.themoviedb.org/3/genre/movie/list?language=en"
response = requests.get(genres_url, headers=headers)
response.raise_for_status()

genres_pdf = pd.DataFrame(json.loads(response.text)['genres'])
genres_table = spark.createDataFrame(genres_pdf)

load_in_database(genres_table, 'genre', 'Genres', 'append')

# COMMAND ----------

# Perform ETL in chunks
for chunk in movie_chunks_list:
    success_request_chunk = []

    for movie_id in chunk:
        try: 
            url = f"https://api.themoviedb.org/3/movie/{movie_id}?language=en-US"
            response = requests.get(url, headers=headers)
            response.raise_for_status()
            success_request_chunk.append(json.loads(response.text))

        except requests.exceptions.HTTPError:
            fail_request_movie_id.append(movie_id)

    pdf = pd.DataFrame(success_request_chunk)

    # Filter useful data
    movies_pdf = pdf.loc[:, ['id', 'title', 'release_date', 'runtime', 'overview', 'popularity',
                             'vote_average', 'vote_count', 'poster_path', 'backdrop_path']]
    
    # Cast types
    movies_pdf['release_date'] = pd.to_datetime(movies_pdf['release_date'])
    
    movie_table = spark.createDataFrame(movies_pdf)
    load_in_database(movie_table, 'movie', 'Movies', 'append')

    # Normalize JSON format of list of dictionary columns - genres column
    movie_genres_pdf = pdf.loc[:, ['id', 'genres']]
    movie_genres_json = json.loads(movie_genres_pdf.to_json(orient='records'))
    movie_genres_pdf = pd.json_normalize(data=movie_genres_json, record_path='genres', record_prefix='genres_', meta=['id'])

    movie_genres_pdf = movie_genres_pdf[['id', 'genres_id']].drop_duplicates()
    movie_genres_pdf = movie_genres_pdf.rename(columns={'id': 'movie_id', 'genres_id': 'genre_id'})
    movie_genres_table = spark.createDataFrame(movie_genres_pdf)
    
    load_in_database(movie_genres_table, 'genre', 'MovieGenres', 'append')

# COMMAND ----------

fail_request_movie_id = [int(value) for value in fail_request_movie_id]

# Filter out not existed movie
rating_table = rating_df.filter(~rating_df.movie_id.isin(fail_request_movie_id))

user_table = rating_table.select(rating_table.user_id.alias('id')).distinct()

# Generalize username, password for user in dataset
user_table = user_table.withColumn('username', F.concat(F.lit('username'), F.monotonically_increasing_id().cast('string')))
user_table = user_table.withColumn('password', F.concat(F.lit('password'), F.monotonically_increasing_id().cast('string')))
load_in_database(user_table, 'user', 'Users', 'append')

# COMMAND ----------

# Filter out the duplicateed values
rating_table = rating_table.dropDuplicates(['user_id', 'movie_id'])

load_in_database(rating_table, 'rating', 'Ratings', 'append')
