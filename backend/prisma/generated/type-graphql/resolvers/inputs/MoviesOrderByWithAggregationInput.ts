import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoviesAvgOrderByAggregateInput } from "../inputs/MoviesAvgOrderByAggregateInput";
import { MoviesCountOrderByAggregateInput } from "../inputs/MoviesCountOrderByAggregateInput";
import { MoviesMaxOrderByAggregateInput } from "../inputs/MoviesMaxOrderByAggregateInput";
import { MoviesMinOrderByAggregateInput } from "../inputs/MoviesMinOrderByAggregateInput";
import { MoviesSumOrderByAggregateInput } from "../inputs/MoviesSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("MoviesOrderByWithAggregationInput", {})
export class MoviesOrderByWithAggregationInput {
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

  @TypeGraphQL.Field((_type) => MoviesCountOrderByAggregateInput, {
    nullable: true,
  })
  _count?: MoviesCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => MoviesAvgOrderByAggregateInput, {
    nullable: true,
  })
  _avg?: MoviesAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => MoviesMaxOrderByAggregateInput, {
    nullable: true,
  })
  _max?: MoviesMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => MoviesMinOrderByAggregateInput, {
    nullable: true,
  })
  _min?: MoviesMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => MoviesSumOrderByAggregateInput, {
    nullable: true,
  })
  _sum?: MoviesSumOrderByAggregateInput | undefined;
}
