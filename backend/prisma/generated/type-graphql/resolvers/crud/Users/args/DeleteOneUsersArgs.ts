import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UsersWhereUniqueInput } from "../../../inputs/UsersWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneUsersArgs {
  @TypeGraphQL.Field((_type) => UsersWhereUniqueInput, {
    nullable: false,
  })
  where!: UsersWhereUniqueInput;
}
