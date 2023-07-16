IF OBJECT_ID('[movie].[Movies]', 'U') IS NULL
BEGIN
    CREATE TABLE [movie].[Movies] (
        [id] INT PRIMARY KEY,
        [title] NVARCHAR(255),
        [release_date] DATE,
        [runtime] INT,
        [overview] NVARCHAR(MAX),
        [popularity] DECIMAL(10, 2),
        [vote_average] DECIMAL(3, 2),
        [vote_count] INT,
        [poster_path] NVARCHAR(255),
        [backdrop_path] NVARCHAR(255)
    );
END;
