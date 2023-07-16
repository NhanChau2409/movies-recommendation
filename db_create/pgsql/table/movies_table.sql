CREATE TABLE IF NOT EXISTS movie.movies (
    id INT PRIMARY KEY,
    title VARCHAR(255),
    release_date DATE,
    runtime INT,
    overview TEXT,
    popularity NUMERIC(10, 2),
    vote_average NUMERIC(3, 2),
    vote_count INT,
    poster_path VARCHAR(255),
    backdrop_path VARCHAR(255)
);
