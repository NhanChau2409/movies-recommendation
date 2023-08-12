import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Movie_genresOrderByRelationAggregateInput } from "../inputs/Movie_genresOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("GenresOrderByWithRelationInput", {})
export class GenresOrderByWithRelationInput {
  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  genre?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => Movie_genresOrderByRelationAggregateInput, {
    nullable: true,
  })
  movie_genres?: Movie_genresOrderByRelationAggregateInput | undefined;
}
