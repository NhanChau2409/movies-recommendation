import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenresUpdateOneRequiredWithoutMovie_genresNestedInput } from "../inputs/GenresUpdateOneRequiredWithoutMovie_genresNestedInput";

@TypeGraphQL.InputType("Movie_genresUpdateWithoutMoviesInput", {})
export class Movie_genresUpdateWithoutMoviesInput {
  @TypeGraphQL.Field(
    (_type) => GenresUpdateOneRequiredWithoutMovie_genresNestedInput,
    {
      nullable: true,
    },
  )
  genres?: GenresUpdateOneRequiredWithoutMovie_genresNestedInput | undefined;
}
