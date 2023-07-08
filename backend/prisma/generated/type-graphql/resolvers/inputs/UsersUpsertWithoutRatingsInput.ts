import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UsersCreateWithoutRatingsInput } from "../inputs/UsersCreateWithoutRatingsInput";
import { UsersUpdateWithoutRatingsInput } from "../inputs/UsersUpdateWithoutRatingsInput";

@TypeGraphQL.InputType("UsersUpsertWithoutRatingsInput", {})
export class UsersUpsertWithoutRatingsInput {
  @TypeGraphQL.Field((_type) => UsersUpdateWithoutRatingsInput, {
    nullable: false,
  })
  update!: UsersUpdateWithoutRatingsInput;

  @TypeGraphQL.Field((_type) => UsersCreateWithoutRatingsInput, {
    nullable: false,
  })
  create!: UsersCreateWithoutRatingsInput;
}
