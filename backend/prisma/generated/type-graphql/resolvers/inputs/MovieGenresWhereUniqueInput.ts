import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieGenresMovie_idGenre_idCompoundUniqueInput } from "../inputs/MovieGenresMovie_idGenre_idCompoundUniqueInput";

@TypeGraphQL.InputType("MovieGenresWhereUniqueInput", {})
export class MovieGenresWhereUniqueInput {
  @TypeGraphQL.Field(
    (_type) => MovieGenresMovie_idGenre_idCompoundUniqueInput,
    {
      nullable: true,
    },
  )
  movie_id_genre_id?:
    | MovieGenresMovie_idGenre_idCompoundUniqueInput
    | undefined;
}
