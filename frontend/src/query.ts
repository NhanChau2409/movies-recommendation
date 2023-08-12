import {gql} from './types/gql/__generated__';

const QUERY_MOVIE_POSTER =
    gql(`query FindManyMovies($take: Int) {
  findManyMovies(take: $take) {
    id
    poster_path
    runtime
    vote_average
    release_date
  }
}`)

export {QUERY_MOVIE_POSTER}