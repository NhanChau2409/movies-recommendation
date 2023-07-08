import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenresUpdateOneRequiredWithoutMovieGenresNestedInput } from "../inputs/GenresUpdateOneRequiredWithoutMovieGenresNestedInput";

@TypeGraphQL.InputType("MovieGenresUpdateWithoutMoviesInput", {})
export class MovieGenresUpdateWithoutMoviesInput {
  @TypeGraphQL.Field(
    (_type) => GenresUpdateOneRequiredWithoutMovieGenresNestedInput,
    {
      nullable: true,
    },
  )
  Genres?: GenresUpdateOneRequiredWithoutMovieGenresNestedInput | undefined;
}
