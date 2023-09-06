import { gql } from "./types/gql/__generated__";

const QUERY_MOVIE_POSTER = gql(`query FindManyMovies($take: Int) {
  findManyMovies(take: $take) {
    id
    poster_path
    runtime
    vote_average
    release_date
  }
}`);

const QUERY_MOVIE_DETAIL =
  gql(`query FindUniqueMovies($where: MoviesWhereUniqueInput!) {
  findUniqueMovies(where: $where) {
    id
    movie_genres {
      genres {
        genre
      }
    }
    overview
    popularity
    poster_path
    release_date
    runtime
    title
    vote_average
    vote_count
  }
}`);

export { QUERY_MOVIE_POSTER, QUERY_MOVIE_DETAIL };
