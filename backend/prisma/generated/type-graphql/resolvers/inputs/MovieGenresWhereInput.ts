import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenresRelationFilter } from "../inputs/GenresRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { MoviesRelationFilter } from "../inputs/MoviesRelationFilter";

@TypeGraphQL.InputType("MovieGenresWhereInput", {})
export class MovieGenresWhereInput {
  @TypeGraphQL.Field((_type) => [MovieGenresWhereInput], {
    nullable: true,
  })
  AND?: MovieGenresWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MovieGenresWhereInput], {
    nullable: true,
  })
  OR?: MovieGenresWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MovieGenresWhereInput], {
    nullable: true,
  })
  NOT?: MovieGenresWhereInput[] | undefined;

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
  Genres?: GenresRelationFilter | undefined;

  @TypeGraphQL.Field((_type) => MoviesRelationFilter, {
    nullable: true,
  })
  Movies?: MoviesRelationFilter | undefined;
}
