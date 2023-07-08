import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoviesCreateNestedOneWithoutRatingsInput } from "../inputs/MoviesCreateNestedOneWithoutRatingsInput";
import { UsersCreateNestedOneWithoutRatingsInput } from "../inputs/UsersCreateNestedOneWithoutRatingsInput";

@TypeGraphQL.InputType("RatingsCreateInput", {})
export class RatingsCreateInput {
  @TypeGraphQL.Field((_type) => TypeGraphQL.Float, {
    nullable: false,
  })
  rating!: number;

  @TypeGraphQL.Field((_type) => MoviesCreateNestedOneWithoutRatingsInput, {
    nullable: false,
  })
  Movies!: MoviesCreateNestedOneWithoutRatingsInput;

  @TypeGraphQL.Field((_type) => UsersCreateNestedOneWithoutRatingsInput, {
    nullable: false,
  })
  Users!: UsersCreateNestedOneWithoutRatingsInput;
}
