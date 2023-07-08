import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieGenresWhereInput } from "../inputs/MovieGenresWhereInput";

@TypeGraphQL.InputType("MovieGenresListRelationFilter", {})
export class MovieGenresListRelationFilter {
  @TypeGraphQL.Field((_type) => MovieGenresWhereInput, {
    nullable: true,
  })
  every?: MovieGenresWhereInput | undefined;

  @TypeGraphQL.Field((_type) => MovieGenresWhereInput, {
    nullable: true,
  })
  some?: MovieGenresWhereInput | undefined;

  @TypeGraphQL.Field((_type) => MovieGenresWhereInput, {
    nullable: true,
  })
  none?: MovieGenresWhereInput | undefined;
}
