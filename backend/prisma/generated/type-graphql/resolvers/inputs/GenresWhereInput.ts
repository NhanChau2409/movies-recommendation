import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { MovieGenresListRelationFilter } from "../inputs/MovieGenresListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("GenresWhereInput", {})
export class GenresWhereInput {
  @TypeGraphQL.Field((_type) => [GenresWhereInput], {
    nullable: true,
  })
  AND?: GenresWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [GenresWhereInput], {
    nullable: true,
  })
  OR?: GenresWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [GenresWhereInput], {
    nullable: true,
  })
  NOT?: GenresWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => IntFilter, {
    nullable: true,
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => MovieGenresListRelationFilter, {
    nullable: true,
  })
  MovieGenres?: MovieGenresListRelationFilter | undefined;
}
