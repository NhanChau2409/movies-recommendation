import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UsersCreateNestedOneWithoutRatingsInput } from "../inputs/UsersCreateNestedOneWithoutRatingsInput";

@TypeGraphQL.InputType("RatingsCreateWithoutMoviesInput", {})
export class RatingsCreateWithoutMoviesInput {
  @TypeGraphQL.Field((_type) => TypeGraphQL.Float, {
    nullable: false,
  })
  rating!: number;

  @TypeGraphQL.Field((_type) => UsersCreateNestedOneWithoutRatingsInput, {
    nullable: false,
  })
  users!: UsersCreateNestedOneWithoutRatingsInput;
}
