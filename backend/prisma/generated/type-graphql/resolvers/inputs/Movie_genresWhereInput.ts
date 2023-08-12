import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenresRelationFilter } from "../inputs/GenresRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { MoviesRelationFilter } from "../inputs/MoviesRelationFilter";

@TypeGraphQL.InputType("Movie_genresWhereInput", {})
export class Movie_genresWhereInput {
  @TypeGraphQL.Field((_type) => [Movie_genresWhereInput], {
    nullable: true,
  })
  AND?: Movie_genresWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [Movie_genresWhereInput], {
    nullable: true,
  })
  OR?: Movie_genresWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [Movie_genresWhereInput], {
    nullable: true,
  })
  NOT?: Movie_genresWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => IntFilter, {
    nullable: true,
  })
  movie_id?: IntFilter | undefined;

  @TypeGraphQL.Field((_type) => IntFilter, {
    nullable: true,
  })
  genre_id?: IntFilter | undefined;

  @TypeGraphQL.Field((_type) => GenresRelationFilter, {
    nullable: true,
  })
  genres?: GenresRelationFilter | undefined;

  @TypeGraphQL.Field((_type) => MoviesRelationFilter, {
    nullable: true,
  })
  movies?: MoviesRelationFilter | undefined;
}
