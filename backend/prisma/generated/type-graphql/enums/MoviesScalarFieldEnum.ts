import * as TypeGraphQL from "type-graphql";

export enum MoviesScalarFieldEnum {
  id = "id",
  title = "title",
  release_date = "release_date",
  runtime = "runtime",
  overview = "overview",
  popularity = "popularity",
  vote_average = "vote_average",
  vote_count = "vote_count",
  poster_path = "poster_path",
  backdrop_path = "backdrop_path",
}
TypeGraphQL.registerEnumType(MoviesScalarFieldEnum, {
  name: "MoviesScalarFieldEnum",
  description: undefined,
});
