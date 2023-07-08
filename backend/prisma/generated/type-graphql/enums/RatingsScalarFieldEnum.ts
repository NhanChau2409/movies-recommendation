import * as TypeGraphQL from "type-graphql";

export enum RatingsScalarFieldEnum {
  user_id = "user_id",
  movie_id = "movie_id",
  rating = "rating",
}
TypeGraphQL.registerEnumType(RatingsScalarFieldEnum, {
  name: "RatingsScalarFieldEnum",
  description: undefined,
});
