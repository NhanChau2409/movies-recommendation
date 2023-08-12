import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Movie_genresWhereInput } from "../inputs/Movie_genresWhereInput";

@TypeGraphQL.InputType("Movie_genresListRelationFilter", {})
export class Movie_genresListRelationFilter {
  @TypeGraphQL.Field((_type) => Movie_genresWhereInput, {
    nullable: true,
  })
  every?: Movie_genresWhereInput | undefined;

  @TypeGraphQL.Field((_type) => Movie_genresWhereInput, {
    nullable: true,
  })
  some?: Movie_genresWhereInput | undefined;

  @TypeGraphQL.Field((_type) => Movie_genresWhereInput, {
    nullable: true,
  })
  none?: Movie_genresWhereInput | undefined;
}
