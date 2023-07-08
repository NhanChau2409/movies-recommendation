import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoviesWhereInput } from "../inputs/MoviesWhereInput";

@TypeGraphQL.InputType("MoviesRelationFilter", {})
export class MoviesRelationFilter {
  @TypeGraphQL.Field((_type) => MoviesWhereInput, {
    nullable: true,
  })
  is?: MoviesWhereInput | undefined;

  @TypeGraphQL.Field((_type) => MoviesWhereInput, {
    nullable: true,
  })
  isNot?: MoviesWhereInput | undefined;
}
