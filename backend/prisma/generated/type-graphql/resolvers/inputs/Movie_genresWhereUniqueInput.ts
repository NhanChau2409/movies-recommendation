import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { movie_genresMovie_idGenre_idCompoundUniqueInput } from "../inputs/movie_genresMovie_idGenre_idCompoundUniqueInput";

@TypeGraphQL.InputType("Movie_genresWhereUniqueInput", {})
export class Movie_genresWhereUniqueInput {
  @TypeGraphQL.Field(
    (_type) => movie_genresMovie_idGenre_idCompoundUniqueInput,
    {
      nullable: true,
    },
  )
  movie_id_genre_id?:
    | movie_genresMovie_idGenre_idCompoundUniqueInput
    | undefined;
}
