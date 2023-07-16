IF OBJECT_ID('[rating].[Ratings]', 'U') IS NULL
BEGIN
    CREATE TABLE [rating].[Ratings] (
        [user_id] INT NOT NULL,
        [movie_id] INT NOT NULL,
        [rating] FLOAT NOT NULL,
        CONSTRAINT [PK_Rating] PRIMARY KEY ([user_id], [movie_id]),
    );
END;