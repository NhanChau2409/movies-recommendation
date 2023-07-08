import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RatingsCreateWithoutUsersInput } from "../inputs/RatingsCreateWithoutUsersInput";
import { RatingsWhereUniqueInput } from "../inputs/RatingsWhereUniqueInput";

@TypeGraphQL.InputType("RatingsCreateOrConnectWithoutUsersInput", {})
export class RatingsCreateOrConnectWithoutUsersInput {
  @TypeGraphQL.Field((_type) => RatingsWhereUniqueInput, {
    nullable: false,
  })
  where!: RatingsWhereUniqueInput;

  @TypeGraphQL.Field((_type) => RatingsCreateWithoutUsersInput, {
    nullable: false,
  })
  create!: RatingsCreateWithoutUsersInput;
}
