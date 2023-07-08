import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RatingsWhereInput } from "../inputs/RatingsWhereInput";

@TypeGraphQL.InputType("RatingsListRelationFilter", {})
export class RatingsListRelationFilter {
  @TypeGraphQL.Field((_type) => RatingsWhereInput, {
    nullable: true,
  })
  every?: RatingsWhereInput | undefined;

  @TypeGraphQL.Field((_type) => RatingsWhereInput, {
    nullable: true,
  })
  some?: RatingsWhereInput | undefined;

  @TypeGraphQL.Field((_type) => RatingsWhereInput, {
    nullable: true,
  })
  none?: RatingsWhereInput | undefined;
}
