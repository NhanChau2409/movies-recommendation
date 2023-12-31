import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UsersCreateInput } from "../../../inputs/UsersCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneUsersArgs {
  @TypeGraphQL.Field((_type) => UsersCreateInput, {
    nullable: false,
  })
  data!: UsersCreateInput;
}
