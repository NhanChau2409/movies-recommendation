-- Create "genres" table
CREATE TABLE [genres] (
    [id] INT IDENTITY(1,1) PRIMARY KEY,
    [genre] NVARCHAR(255) NOT NULL
    );

-- Create "movies" table
CREATE TABLE [movies] (
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

-- Create "movie_genres" table
CREATE TABLE [movie_genres] (
    [movie_id] INT,
    [genre_id] INT,
     CONSTRAINT PK_movie_genres PRIMARY KEY ([movie_id], [genre_id])
    );

-- Create "users" table
CREATE TABLE [users] (
    [id] INT IDENTITY(1,1) PRIMARY KEY,
    [username] NVARCHAR(50) NOT NULL,
    [password] NVARCHAR(50) NOT NULL
    );

-- Create "ratings" table
CREATE TABLE [ratings] (
    [user_id] INT NOT NULL,
    [movie_id] INT NOT NULL,
    [rating] FLOAT NOT NULL,
     CONSTRAINT PK_Rating PRIMARY KEY ([user_id], [movie_id])
    );

-- Add foreign key constraint for FK_Rating_User
ALTER TABLE [ratings]
    ADD CONSTRAINT FK_Rating_User
    FOREIGN KEY ([user_id])
    REFERENCES [users] ([id])
    ON DELETE CASCADE
ON UPDATE CASCADE;

-- Add foreign key constraint for FK_Rating_Movie
ALTER TABLE [ratings]
    ADD CONSTRAINT FK_Rating_Movie
    FOREIGN KEY ([movie_id])
    REFERENCES [movies] ([id])
    ON DELETE CASCADE
ON UPDATE CASCADE;

-- Add foreign key constraint for FK_movie_genres_movie_id
ALTER TABLE [movie_genres]
    ADD CONSTRAINT FK_movie_genres_movie_id
    FOREIGN KEY ([movie_id])
    REFERENCES [movies] ([id])
    ON DELETE CASCADE
ON UPDATE CASCADE;

-- Add foreign key constraint for FK_movie_genres_genre_id
ALTER TABLE [movie_genres]
    ADD CONSTRAINT FK_movie_genres_genre_id
    FOREIGN KEY ([genre_id])
    REFERENCES [genres] ([id])
    ON DELETE CASCADE
ON UPDATE CASCADE;
