import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoviesUpdateOneRequiredWithoutMovie_genresNestedInput } from "../inputs/MoviesUpdateOneRequiredWithoutMovie_genresNestedInput";

@TypeGraphQL.InputType("Movie_genresUpdateWithoutGenresInput", {})
export class Movie_genresUpdateWithoutGenresInput {
  @TypeGraphQL.Field(
    (_type) => MoviesUpdateOneRequiredWithoutMovie_genresNestedInput,
    {
      nullable: true,
    },
  )
  movies?: MoviesUpdateOneRequiredWithoutMovie_genresNestedInput | undefined;
}
