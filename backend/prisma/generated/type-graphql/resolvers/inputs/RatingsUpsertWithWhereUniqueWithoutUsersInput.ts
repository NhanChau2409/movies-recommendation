import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RatingsCreateWithoutUsersInput } from "../inputs/RatingsCreateWithoutUsersInput";
import { RatingsUpdateWithoutUsersInput } from "../inputs/RatingsUpdateWithoutUsersInput";
import { RatingsWhereUniqueInput } from "../inputs/RatingsWhereUniqueInput";

@TypeGraphQL.InputType("RatingsUpsertWithWhereUniqueWithoutUsersInput", {})
export class RatingsUpsertWithWhereUniqueWithoutUsersInput {
  @TypeGraphQL.Field((_type) => RatingsWhereUniqueInput, {
    nullable: false,
  })
  where!: RatingsWhereUniqueInput;

  @TypeGraphQL.Field((_type) => RatingsUpdateWithoutUsersInput, {
    nullable: false,
  })
  update!: RatingsUpdateWithoutUsersInput;

  @TypeGraphQL.Field((_type) => RatingsCreateWithoutUsersInput, {
    nullable: false,
  })
  create!: RatingsCreateWithoutUsersInput;
}
