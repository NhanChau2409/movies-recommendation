import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FloatFilter } from "../inputs/FloatFilter";
import { IntFilter } from "../inputs/IntFilter";
import { MoviesRelationFilter } from "../inputs/MoviesRelationFilter";
import { UsersRelationFilter } from "../inputs/UsersRelationFilter";

@TypeGraphQL.InputType("RatingsWhereInput", {})
export class RatingsWhereInput {
  @TypeGraphQL.Field((_type) => [RatingsWhereInput], {
    nullable: true,
  })
  AND?: RatingsWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [RatingsWhereInput], {
    nullable: true,
  })
  OR?: RatingsWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [RatingsWhereInput], {
    nullable: true,
  })
  NOT?: RatingsWhereInput[] | undefined;

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

  @TypeGraphQL.Field((_type) => MoviesRelationFilter, {
    nullable: true,
  })
  Movies?: MoviesRelationFilter | undefined;

  @TypeGraphQL.Field((_type) => UsersRelationFilter, {
    nullable: true,
  })
  Users?: UsersRelationFilter | undefined;
}
