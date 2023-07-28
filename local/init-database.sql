CREATE TABLE IF NOT EXISTS "genres" (
    "id" SERIAL PRIMARY KEY,
    "genre" VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS "movies" (
    "id" INT PRIMARY KEY,
    "title" VARCHAR(255),
    "release_date" DATE,
    "runtime" INT,
    "overview" TEXT,
    "popularity" NUMERIC(10, 2),
    "vote_average" NUMERIC(3, 2),
    "vote_count" INT,
    "poster_path" VARCHAR(255),
    "backdrop_path" VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS "movie_genres" (
    "movie_id" INT,
    "genre_id" INT,
    CONSTRAINT PK_movie_genres PRIMARY KEY ("movie_id", "genre_id")
);

CREATE TABLE IF NOT EXISTS "users" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR(50) NOT NULL,
    password VARCHAR(50) NOT NULL
);


CREATE TABLE IF NOT EXISTS "ratings" (
    "user_id" INT NOT NULL,
    "movie_id" INT NOT NULL,
    "rating" FLOAT NOT NULL,
    CONSTRAINT PK_Rating PRIMARY KEY ("user_id", "movie_id")
);



-- Add foreign key constraint for FK_Rating_User
ALTER TABLE "ratings"
    ADD CONSTRAINT FK_Rating_User
        FOREIGN KEY ("user_id")
            REFERENCES "users" ("id")
            ON DELETE CASCADE
            ON UPDATE CASCADE;

-- Add foreign key constraint for FK_Rating_Movie
ALTER TABLE "ratings"
    ADD CONSTRAINT FK_Rating_Movie
        FOREIGN KEY ("movie_id")
            REFERENCES "movies" ("id")
            ON DELETE CASCADE
            ON UPDATE CASCADE;

-- Add foreign key constraint for FK_movie_genres_movie_id
ALTER TABLE "movie_genres"
    ADD CONSTRAINT FK_movie_genres_movie_id
        FOREIGN KEY ("movie_id")
            REFERENCES "movies" ("id")
            ON DELETE CASCADE
            ON UPDATE CASCADE;

-- Add foreign key constraint for FK_movie_genres_genre_id
ALTER TABLE "movie_genres"
    ADD CONSTRAINT FK_movie_genres_genre_id
        FOREIGN KEY ("genre_id")
            REFERENCES "genres" ("id")
            ON DELETE CASCADE
            ON UPDATE CASCADE;
