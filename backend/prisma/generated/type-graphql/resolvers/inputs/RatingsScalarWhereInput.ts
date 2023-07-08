import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FloatFilter } from "../inputs/FloatFilter";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType("RatingsScalarWhereInput", {})
export class RatingsScalarWhereInput {
  @TypeGraphQL.Field((_type) => [RatingsScalarWhereInput], {
    nullable: true,
  })
  AND?: RatingsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [RatingsScalarWhereInput], {
    nullable: true,
  })
  OR?: RatingsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [RatingsScalarWhereInput], {
    nullable: true,
  })
  NOT?: RatingsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => IntFilter, {
    nullable: true,
  })
  user_id?: IntFilter | undefined;

  @TypeGraphQL.Field((_type) => IntFilter, {
    nullable: true,
  })
  movie_id?: IntFilter | undefined;

  @TypeGraphQL.Field((_type) => FloatFilter, {
    nullable: true,
  })
  rating?: FloatFilter | undefined;
}
