import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenresCreateNestedOneWithoutMovieGenresInput } from "../inputs/GenresCreateNestedOneWithoutMovieGenresInput";

@TypeGraphQL.InputType("MovieGenresCreateWithoutMoviesInput", {})
export class MovieGenresCreateWithoutMoviesInput {
  @TypeGraphQL.Field((_type) => GenresCreateNestedOneWithoutMovieGenresInput, {
    nullable: false,
  })
  Genres!: GenresCreateNestedOneWithoutMovieGenresInput;
}
