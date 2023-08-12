import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Movie_genresOrderByRelationAggregateInput } from "../inputs/Movie_genresOrderByRelationAggregateInput";
import { RatingsOrderByRelationAggregateInput } from "../inputs/RatingsOrderByRelationAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("MoviesOrderByWithRelationInput", {})
export class MoviesOrderByWithRelationInput {
  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrderInput, {
    nullable: true,
  })
  title?: SortOrderInput | undefined;

  @TypeGraphQL.Field((_type) => SortOrderInput, {
    nullable: true,
  })
  release_date?: SortOrderInput | undefined;

  @TypeGraphQL.Field((_type) => SortOrderInput, {
    nullable: true,
  })
  runtime?: SortOrderInput | undefined;

  @TypeGraphQL.Field((_type) => SortOrderInput, {
    nullable: true,
  })
  overview?: SortOrderInput | undefined;

  @TypeGraphQL.Field((_type) => SortOrderInput, {
    nullable: true,
  })
  popularity?: SortOrderInput | undefined;

  @TypeGraphQL.Field((_type) => SortOrderInput, {
    nullable: true,
  })
  vote_average?: SortOrderInput | undefined;

  @TypeGraphQL.Field((_type) => SortOrderInput, {
    nullable: true,
  })
  vote_count?: SortOrderInput | undefined;

  @TypeGraphQL.Field((_type) => SortOrderInput, {
    nullable: true,
  })
  poster_path?: SortOrderInput | undefined;

  @TypeGraphQL.Field((_type) => SortOrderInput, {
    nullable: true,
  })
  backdrop_path?: SortOrderInput | undefined;

  @TypeGraphQL.Field((_type) => Movie_genresOrderByRelationAggregateInput, {
    nullable: true,
  })
  movie_genres?: Movie_genresOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => RatingsOrderByRelationAggregateInput, {
    nullable: true,
  })
  ratings?: RatingsOrderByRelationAggregateInput | undefined;
}
