import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UsersCreateWithoutRatingsInput } from "../inputs/UsersCreateWithoutRatingsInput";
import { UsersWhereUniqueInput } from "../inputs/UsersWhereUniqueInput";

@TypeGraphQL.InputType("UsersCreateOrConnectWithoutRatingsInput", {})
export class UsersCreateOrConnectWithoutRatingsInput {
  @TypeGraphQL.Field((_type) => UsersWhereUniqueInput, {
    nullable: false,
  })
  where!: UsersWhereUniqueInput;

  @TypeGraphQL.Field((_type) => UsersCreateWithoutRatingsInput, {
    nullable: false,
  })
  create!: UsersCreateWithoutRatingsInput;
}
