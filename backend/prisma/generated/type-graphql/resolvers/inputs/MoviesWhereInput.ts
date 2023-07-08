import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { DecimalNullableFilter } from "../inputs/DecimalNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { MovieGenresListRelationFilter } from "../inputs/MovieGenresListRelationFilter";
import { RatingsListRelationFilter } from "../inputs/RatingsListRelationFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("MoviesWhereInput", {})
export class MoviesWhereInput {
  @TypeGraphQL.Field((_type) => [MoviesWhereInput], {
    nullable: true,
  })
  AND?: MoviesWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MoviesWhereInput], {
    nullable: true,
  })
  OR?: MoviesWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MoviesWhereInput], {
    nullable: true,
  })
  NOT?: MoviesWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => IntFilter, {
    nullable: true,
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field((_type) => StringNullableFilter, {
    nullable: true,
  })
  title?: StringNullableFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeNullableFilter, {
    nullable: true,
  })
  release_date?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field((_type) => IntNullableFilter, {
    nullable: true,
  })
  runtime?: IntNullableFilter | undefined;

  @TypeGraphQL.Field((_type) => StringNullableFilter, {
    nullable: true,
  })
  overview?: StringNullableFilter | undefined;

  @TypeGraphQL.Field((_type) => DecimalNullableFilter, {
    nullable: true,
  })
  popularity?: DecimalNullableFilter | undefined;

  @TypeGraphQL.Field((_type) => DecimalNullableFilter, {
    nullable: true,
  })
  vote_average?: DecimalNullableFilter | undefined;

  @TypeGraphQL.Field((_type) => IntNullableFilter, {
    nullable: true,
  })
  vote_count?: IntNullableFilter | undefined;

  @TypeGraphQL.Field((_type) => StringNullableFilter, {
    nullable: true,
  })
  poster_path?: StringNullableFilter | undefined;

  @TypeGraphQL.Field((_type) => StringNullableFilter, {
    nullable: true,
  })
  backdrop_path?: StringNullableFilter | undefined;

  @TypeGraphQL.Field((_type) => MovieGenresListRelationFilter, {
    nullable: true,
  })
  MovieGenres?: MovieGenresListRelationFilter | undefined;

  @TypeGraphQL.Field((_type) => RatingsListRelationFilter, {
    nullable: true,
  })
  Ratings?: RatingsListRelationFilter | undefined;
}
