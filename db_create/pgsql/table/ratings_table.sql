CREATE TABLE IF NOT EXISTS rating.ratings (
    "user_id" INT NOT NULL,
    movie_id INT NOT NULL,
    rating FLOAT NOT NULL,
    CONSTRAINT PK_Rating PRIMARY KEY ("user_id", movie_id),
);
