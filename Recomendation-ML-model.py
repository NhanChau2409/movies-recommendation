# Databricks notebook source
from pyspark.ml.recommendation import ALS
from pyspark.ml.evaluation import RegressionEvaluator
from pyspark.ml.tuning import CrossValidator, ParamGridBuilder
import numpy as np
import time

# COMMAND ----------

# Constant secrets
DATABASE_USERNAME = dbutils.secrets.get('movies-scope', 'database-username')
DATABASE_PASSWORD = dbutils.secrets.get('movies-scope', 'database-password')


print(DATABASE_USERNAME, DATABASE_PASSWORD)
# Constant server config
SERVER_NAME = 'self-server'
PORT = 1433
DATABASE_NAME = 'movies_database'
jdbc_url = f'jdbc:sqlserver://{SERVER_NAME}.database.windows.net:{PORT};database={DATABASE_NAME}'

# COMMAND ----------

def read_rating_df():     
    return (spark.read
            .format("jdbc")
            .option("url", jdbc_url)
            .option("dbtable", '[rating].[Ratings]')
            .option("user", DATABASE_USERNAME)
            .option("password", DATABASE_PASSWORD)
            .load())


# COMMAND ----------

rating_df = read_rating_df()
print('Successfully read data')

# COMMAND ----------

for explain_param in ALS().explainParams().split('\n'):
    print(explain_param)
    print()

# COMMAND ----------


als = (ALS()
       .setUserCol('user_id')
       .setItemCol('movie_id')
       .setRatingCol('rating')
       .setColdStartStrategy('drop')
       .setImplicitPrefs(False))


#   .addGrid(als.maxIter, [10, 15, 20])
param_grid = (ParamGridBuilder()
              .addGrid(als.rank, [100, 200, 300])
              .addGrid(als.regParam, [0.01, 0.005])
              .build())

evaluator = (RegressionEvaluator()
             .setMetricName('rmse')
             .setLabelCol('rating')
             .setPredictionCol('prediction'))

cross_validator = (CrossValidator()
                   .setEstimator(als)
                   .setEstimatorParamMaps(param_grid)
                   .setEvaluator(evaluator)
                   .setNumFolds(5))

model = cross_validator.fit(rating_df)


# COMMAND ----------

model.avgMetrics

# COMMAND ----------

train_data, test_data = rating_df.randomSplit([0.7, 0.3], seed=42)

# COMMAND ----------

als = (ALS()
       .setUserCol('user_id')
       .setItemCol('movie_id')
       .setRatingCol('rating')
       .setColdStartStrategy('drop')
       .setImplicitPrefs(False)
       .setRank(20)
       .setMaxIter(20)
       .setRegParam(0.1))

# COMMAND ----------

model = als.fit(train_data)
predictions = model.transform(test_data)
evaluator = RegressionEvaluator(metricName="rmse", labelCol="rating",
                                predictionCol="prediction")

rmse = evaluator.evaluate(predictions)
print("Root-mean-square error = " + str(rmse))

# COMMAND ----------

# from pyspark.ml.feature import MinHashLSH

# movie_df = spark.read.load("/mnt/ratings/movies.csv", format="csv", sep=",", inferSchema="true", header="true")
# movie_df = movie_df.drop('title').dropna().distinct()
# df_2 = user_movies_map.withColumn('features', create_vector_udf(user_movies_map['movie_rating']))

# movie_df= movie_df.withColumn('genres', F.split(movie_df.genres, '\\|'))
# user_movies_map = df.groupBy('userId').agg(F.collect_list(F.create_map('movieId', 'rating')).alias('movie_rating'))
# from pyspark.ml.linalg import SparseVector, VectorUDT

# unique_movies = dict(df.select('movieId').distinct().withColumn('Id', F.monotonically_increasing_id()).collect())
# size = len(unique_movies)

# def create_spare_vector(array, compare_dict= unique_movies, size= size):
#     return SparseVector(size, [(unique_movies[movie], rating) for item in array for movie, rating in item.items()])
# create_vector_udf = F.udf(create_spare_vector, VectorUDT())

# mh = MinHashLSH(inputCol="features", outputCol="hashes", numHashTables=5)
# model = mh.fit(df_2)

# query = df_2.select('features').filter(df.userId == 1).collect()[0][0]
# result = model.approxNearestNeighbors(df_2, query, 10)
# data = df.join(result, 'userId').selectExpr("userId as user", "movieId as item", "rating")

# COMMAND ----------


