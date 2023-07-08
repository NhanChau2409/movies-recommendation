import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { DecimalNullableWithAggregatesFilter } from "../inputs/DecimalNullableWithAggregatesFilter";
import { IntNullableWithAggregatesFilter } from "../inputs/IntNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";

@TypeGraphQL.InputType("MoviesScalarWhereWithAggregatesInput", {})
export class MoviesScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field((_type) => [MoviesScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  AND?: MoviesScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MoviesScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  OR?: MoviesScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MoviesScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  NOT?: MoviesScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field((_type) => IntWithAggregatesFilter, {
    nullable: true,
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => StringNullableWithAggregatesFilter, {
    nullable: true,
  })
  title?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeNullableWithAggregatesFilter, {
    nullable: true,
  })
  release_date?: DateTimeNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => IntNullableWithAggregatesFilter, {
    nullable: true,
  })
  runtime?: IntNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => StringNullableWithAggregatesFilter, {
    nullable: true,
  })
  overview?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => DecimalNullableWithAggregatesFilter, {
    nullable: true,
  })
  popularity?: DecimalNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => DecimalNullableWithAggregatesFilter, {
    nullable: true,
  })
  vote_average?: DecimalNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => IntNullableWithAggregatesFilter, {
    nullable: true,
  })
  vote_count?: IntNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => StringNullableWithAggregatesFilter, {
    nullable: true,
  })
  poster_path?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => StringNullableWithAggregatesFilter, {
    nullable: true,
  })
  backdrop_path?: StringNullableWithAggregatesFilter | undefined;
}
