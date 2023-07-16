IF OBJECT_ID('[genre].[Genres]', 'U') IS NULL
BEGIN
    CREATE TABLE [genre].[Genres] (
        [id] INT PRIMARY KEY,
        [genre] NVARCHAR(255) NOT NULL
    );
END;