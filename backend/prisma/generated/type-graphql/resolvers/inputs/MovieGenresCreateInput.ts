import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenresCreateNestedOneWithoutMovieGenresInput } from "../inputs/GenresCreateNestedOneWithoutMovieGenresInput";
import { MoviesCreateNestedOneWithoutMovieGenresInput } from "../inputs/MoviesCreateNestedOneWithoutMovieGenresInput";

@TypeGraphQL.InputType("MovieGenresCreateInput", {})
export class MovieGenresCreateInput {
  @TypeGraphQL.Field((_type) => GenresCreateNestedOneWithoutMovieGenresInput, {
    nullable: false,
  })
  Genres!: GenresCreateNestedOneWithoutMovieGenresInput;

  @TypeGraphQL.Field((_type) => MoviesCreateNestedOneWithoutMovieGenresInput, {
    nullable: false,
  })
  Movies!: MoviesCreateNestedOneWithoutMovieGenresInput;
}
