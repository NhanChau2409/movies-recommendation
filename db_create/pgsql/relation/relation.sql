-- Add foreign key constraint for FK_Rating_User
ALTER TABLE "rating"."ratings"
ADD CONSTRAINT FK_Rating_User
FOREIGN KEY ("user_id")
REFERENCES "user"."users" ("id")
ON DELETE CASCADE
ON UPDATE CASCADE;

-- Add foreign key constraint for FK_Rating_Movie
ALTER TABLE "rating"."ratings"
ADD CONSTRAINT FK_Rating_Movie
FOREIGN KEY ("movie_id")
REFERENCES "movie"."movies" ("id")
ON DELETE CASCADE
ON UPDATE CASCADE;

-- Add foreign key constraint for FK_movie_genres_movie_id
ALTER TABLE "genre"."movie_genres"
ADD CONSTRAINT FK_movie_genres_movie_id
FOREIGN KEY ("movie_id")
REFERENCES "movie"."movies" ("id")
ON DELETE CASCADE
ON UPDATE CASCADE;

-- Add foreign key constraint for FK_movie_genres_genre_id
ALTER TABLE "genre"."movie_genres"
ADD CONSTRAINT FK_movie_genres_genre_id
FOREIGN KEY ("genre_id")
REFERENCES "genre"."genres" ("id")
ON DELETE CASCADE
ON UPDATE CASCADE;
