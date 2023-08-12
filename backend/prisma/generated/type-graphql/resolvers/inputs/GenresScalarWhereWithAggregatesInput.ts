import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("GenresScalarWhereWithAggregatesInput", {})
export class GenresScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field((_type) => [GenresScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  AND?: GenresScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field((_type) => [GenresScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  OR?: GenresScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field((_type) => [GenresScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  NOT?: GenresScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field((_type) => IntWithAggregatesFilter, {
    nullable: true,
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => StringWithAggregatesFilter, {
    nullable: true,
  })
  genre?: StringWithAggregatesFilter | undefined;
}
