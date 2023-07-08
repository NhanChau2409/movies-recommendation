import * as TypeGraphQL from "type-graphql";

export enum GenresScalarFieldEnum {
  id = "id",
  name = "name",
}
TypeGraphQL.registerEnumType(GenresScalarFieldEnum, {
  name: "GenresScalarFieldEnum",
  description: undefined,
});
