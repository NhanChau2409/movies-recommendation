import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoviesCreateWithoutMovieGenresInput } from "../inputs/MoviesCreateWithoutMovieGenresInput";
import { MoviesUpdateWithoutMovieGenresInput } from "../inputs/MoviesUpdateWithoutMovieGenresInput";

@TypeGraphQL.InputType("MoviesUpsertWithoutMovieGenresInput", {})
export class MoviesUpsertWithoutMovieGenresInput {
  @TypeGraphQL.Field((_type) => MoviesUpdateWithoutMovieGenresInput, {
    nullable: false,
  })
  update!: MoviesUpdateWithoutMovieGenresInput;

  @TypeGraphQL.Field((_type) => MoviesCreateWithoutMovieGenresInput, {
    nullable: false,
  })
  create!: MoviesCreateWithoutMovieGenresInput;
}
