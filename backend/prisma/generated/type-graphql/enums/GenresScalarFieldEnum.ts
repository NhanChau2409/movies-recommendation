import * as TypeGraphQL from "type-graphql";

export enum GenresScalarFieldEnum {
  id = "id",
  genre = "genre",
}
TypeGraphQL.registerEnumType(GenresScalarFieldEnum, {
  name: "GenresScalarFieldEnum",
  description: undefined,
});
