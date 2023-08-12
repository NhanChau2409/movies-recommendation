import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoviesCreateNestedOneWithoutRatingsInput } from "../inputs/MoviesCreateNestedOneWithoutRatingsInput";

@TypeGraphQL.InputType("RatingsCreateWithoutUsersInput", {})
export class RatingsCreateWithoutUsersInput {
  @TypeGraphQL.Field((_type) => TypeGraphQL.Float, {
    nullable: false,
  })
  rating!: number;

  @TypeGraphQL.Field((_type) => MoviesCreateNestedOneWithoutRatingsInput, {
    nullable: false,
  })
  movies!: MoviesCreateNestedOneWithoutRatingsInput;
}
