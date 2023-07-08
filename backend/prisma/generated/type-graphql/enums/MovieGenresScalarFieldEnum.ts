import * as TypeGraphQL from "type-graphql";

export enum MovieGenresScalarFieldEnum {
  movie_id = "movie_id",
  genre_id = "genre_id",
}
TypeGraphQL.registerEnumType(MovieGenresScalarFieldEnum, {
  name: "MovieGenresScalarFieldEnum",
  description: undefined,
});
