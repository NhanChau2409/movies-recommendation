import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Movie_genresAvgOrderByAggregateInput } from "../inputs/Movie_genresAvgOrderByAggregateInput";
import { Movie_genresCountOrderByAggregateInput } from "../inputs/Movie_genresCountOrderByAggregateInput";
import { Movie_genresMaxOrderByAggregateInput } from "../inputs/Movie_genresMaxOrderByAggregateInput";
import { Movie_genresMinOrderByAggregateInput } from "../inputs/Movie_genresMinOrderByAggregateInput";
import { Movie_genresSumOrderByAggregateInput } from "../inputs/Movie_genresSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Movie_genresOrderByWithAggregationInput", {})
export class Movie_genresOrderByWithAggregationInput {
  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  movie_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  genre_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => Movie_genresCountOrderByAggregateInput, {
    nullable: true,
  })
  _count?: Movie_genresCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => Movie_genresAvgOrderByAggregateInput, {
    nullable: true,
  })
  _avg?: Movie_genresAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => Movie_genresMaxOrderByAggregateInput, {
    nullable: true,
  })
  _max?: Movie_genresMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => Movie_genresMinOrderByAggregateInput, {
    nullable: true,
  })
  _min?: Movie_genresMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => Movie_genresSumOrderByAggregateInput, {
    nullable: true,
  })
  _sum?: Movie_genresSumOrderByAggregateInput | undefined;
}
