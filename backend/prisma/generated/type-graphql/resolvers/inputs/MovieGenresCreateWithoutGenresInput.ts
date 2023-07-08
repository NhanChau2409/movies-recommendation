import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoviesCreateNestedOneWithoutMovieGenresInput } from "../inputs/MoviesCreateNestedOneWithoutMovieGenresInput";

@TypeGraphQL.InputType("MovieGenresCreateWithoutGenresInput", {})
export class MovieGenresCreateWithoutGenresInput {
  @TypeGraphQL.Field((_type) => MoviesCreateNestedOneWithoutMovieGenresInput, {
    nullable: false,
  })
  Movies!: MoviesCreateNestedOneWithoutMovieGenresInput;
}
