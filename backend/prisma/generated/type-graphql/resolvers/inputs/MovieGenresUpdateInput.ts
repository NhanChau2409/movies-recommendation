import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenresUpdateOneRequiredWithoutMovieGenresNestedInput } from "../inputs/GenresUpdateOneRequiredWithoutMovieGenresNestedInput";
import { MoviesUpdateOneRequiredWithoutMovieGenresNestedInput } from "../inputs/MoviesUpdateOneRequiredWithoutMovieGenresNestedInput";

@TypeGraphQL.InputType("MovieGenresUpdateInput", {})
export class MovieGenresUpdateInput {
  @TypeGraphQL.Field(
    (_type) => GenresUpdateOneRequiredWithoutMovieGenresNestedInput,
    {
      nullable: true,
    },
  )
  Genres?: GenresUpdateOneRequiredWithoutMovieGenresNestedInput | undefined;

  @TypeGraphQL.Field(
    (_type) => MoviesUpdateOneRequiredWithoutMovieGenresNestedInput,
    {
      nullable: true,
    },
  )
  Movies?: MoviesUpdateOneRequiredWithoutMovieGenresNestedInput | undefined;
}
