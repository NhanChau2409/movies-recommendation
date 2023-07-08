import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieGenresAvgOrderByAggregateInput } from "../inputs/MovieGenresAvgOrderByAggregateInput";
import { MovieGenresCountOrderByAggregateInput } from "../inputs/MovieGenresCountOrderByAggregateInput";
import { MovieGenresMaxOrderByAggregateInput } from "../inputs/MovieGenresMaxOrderByAggregateInput";
import { MovieGenresMinOrderByAggregateInput } from "../inputs/MovieGenresMinOrderByAggregateInput";
import { MovieGenresSumOrderByAggregateInput } from "../inputs/MovieGenresSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("MovieGenresOrderByWithAggregationInput", {})
export class MovieGenresOrderByWithAggregationInput {
  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  movie_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  genre_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => MovieGenresCountOrderByAggregateInput, {
    nullable: true,
  })
  _count?: MovieGenresCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => MovieGenresAvgOrderByAggregateInput, {
    nullable: true,
  })
  _avg?: MovieGenresAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => MovieGenresMaxOrderByAggregateInput, {
    nullable: true,
  })
  _max?: MovieGenresMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => MovieGenresMinOrderByAggregateInput, {
    nullable: true,
  })
  _min?: MovieGenresMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => MovieGenresSumOrderByAggregateInput, {
    nullable: true,
  })
  _sum?: MovieGenresSumOrderByAggregateInput | undefined;
}
