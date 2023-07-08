import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FloatWithAggregatesFilter } from "../inputs/FloatWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("RatingsScalarWhereWithAggregatesInput", {})
export class RatingsScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field((_type) => [RatingsScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  AND?: RatingsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field((_type) => [RatingsScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  OR?: RatingsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field((_type) => [RatingsScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  NOT?: RatingsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field((_type) => IntWithAggregatesFilter, {
    nullable: true,
  })
  user_id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => IntWithAggregatesFilter, {
    nullable: true,
  })
  movie_id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => FloatWithAggregatesFilter, {
    nullable: true,
  })
  rating?: FloatWithAggregatesFilter | undefined;
}
