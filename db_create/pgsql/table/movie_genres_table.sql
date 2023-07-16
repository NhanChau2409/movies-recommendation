CREATE TABLE IF NOT EXISTS genre.movie_genres (
    movie_id INT,
    genre_id INT,
    CONSTRAINT PK_movie_genres PRIMARY KEY (movie_id, genre_id),
);
