import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenresUpdateOneRequiredWithoutMovie_genresNestedInput } from "../inputs/GenresUpdateOneRequiredWithoutMovie_genresNestedInput";
import { MoviesUpdateOneRequiredWithoutMovie_genresNestedInput } from "../inputs/MoviesUpdateOneRequiredWithoutMovie_genresNestedInput";

@TypeGraphQL.InputType("Movie_genresUpdateInput", {})
export class Movie_genresUpdateInput {
  @TypeGraphQL.Field(
    (_type) => GenresUpdateOneRequiredWithoutMovie_genresNestedInput,
    {
      nullable: true,
    },
  )
  genres?: GenresUpdateOneRequiredWithoutMovie_genresNestedInput | undefined;

  @TypeGraphQL.Field(
    (_type) => MoviesUpdateOneRequiredWithoutMovie_genresNestedInput,
    {
      nullable: true,
    },
  )
  movies?: MoviesUpdateOneRequiredWithoutMovie_genresNestedInput | undefined;
}
