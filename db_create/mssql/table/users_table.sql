IF OBJECT_ID('[user].[Users]', 'U') IS NULL
BEGIN
    CREATE TABLE [user].[Users] (
        [id] INT PRIMARY KEY,
        [username] NVARCHAR(50) NOT NULL,
        [password] NVARCHAR(50) NOT NULL
    );
END;
