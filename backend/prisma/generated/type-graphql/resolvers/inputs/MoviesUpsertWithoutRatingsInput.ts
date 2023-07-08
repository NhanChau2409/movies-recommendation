import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoviesCreateWithoutRatingsInput } from "../inputs/MoviesCreateWithoutRatingsInput";
import { MoviesUpdateWithoutRatingsInput } from "../inputs/MoviesUpdateWithoutRatingsInput";

@TypeGraphQL.InputType("MoviesUpsertWithoutRatingsInput", {})
export class MoviesUpsertWithoutRatingsInput {
  @TypeGraphQL.Field((_type) => MoviesUpdateWithoutRatingsInput, {
    nullable: false,
  })
  update!: MoviesUpdateWithoutRatingsInput;

  @TypeGraphQL.Field((_type) => MoviesCreateWithoutRatingsInput, {
    nullable: false,
  })
  create!: MoviesCreateWithoutRatingsInput;
}
