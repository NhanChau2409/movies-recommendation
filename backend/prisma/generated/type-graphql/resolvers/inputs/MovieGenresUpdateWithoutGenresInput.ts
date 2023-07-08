import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoviesUpdateOneRequiredWithoutMovieGenresNestedInput } from "../inputs/MoviesUpdateOneRequiredWithoutMovieGenresNestedInput";

@TypeGraphQL.InputType("MovieGenresUpdateWithoutGenresInput", {})
export class MovieGenresUpdateWithoutGenresInput {
  @TypeGraphQL.Field(
    (_type) => MoviesUpdateOneRequiredWithoutMovieGenresNestedInput,
    {
      nullable: true,
    },
  )
  Movies?: MoviesUpdateOneRequiredWithoutMovieGenresNestedInput | undefined;
}
