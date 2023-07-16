IF OBJECT_ID('[genre].[MovieGenres]', 'U') IS NULL
BEGIN
    CREATE TABLE [genre].[MovieGenres] (
        [movie_id] INT,
        [genre_id] INT,
        CONSTRAINT [PK_movie_genres] PRIMARY KEY ([movie_id], [genre_id]),
    );
END;