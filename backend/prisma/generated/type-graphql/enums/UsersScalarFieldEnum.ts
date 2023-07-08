import * as TypeGraphQL from "type-graphql";

export enum UsersScalarFieldEnum {
  id = "id",
  username = "username",
  password = "password",
}
TypeGraphQL.registerEnumType(UsersScalarFieldEnum, {
  name: "UsersScalarFieldEnum",
  description: undefined,
});
