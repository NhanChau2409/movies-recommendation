import {gql} from './types/gql/__generated__';

const QUERY_MOVIE_POSTER =
    gql(`query FindManyMovies($take: Int) {
  findManyMovies(take: $take) {
    id
    backdrop_path
    poster_path
  }
}`)

export {QUERY_MOVIE_POSTER}