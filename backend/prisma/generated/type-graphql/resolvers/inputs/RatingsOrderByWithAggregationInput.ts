import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RatingsAvgOrderByAggregateInput } from "../inputs/RatingsAvgOrderByAggregateInput";
import { RatingsCountOrderByAggregateInput } from "../inputs/RatingsCountOrderByAggregateInput";
import { RatingsMaxOrderByAggregateInput } from "../inputs/RatingsMaxOrderByAggregateInput";
import { RatingsMinOrderByAggregateInput } from "../inputs/RatingsMinOrderByAggregateInput";
import { RatingsSumOrderByAggregateInput } from "../inputs/RatingsSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("RatingsOrderByWithAggregationInput", {})
export class RatingsOrderByWithAggregationInput {
  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  user_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  movie_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  rating?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => RatingsCountOrderByAggregateInput, {
    nullable: true,
  })
  _count?: RatingsCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => RatingsAvgOrderByAggregateInput, {
    nullable: true,
  })
  _avg?: RatingsAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => RatingsMaxOrderByAggregateInput, {
    nullable: true,
  })
  _max?: RatingsMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => RatingsMinOrderByAggregateInput, {
    nullable: true,
  })
  _min?: RatingsMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => RatingsSumOrderByAggregateInput, {
    nullable: true,
  })
  _sum?: RatingsSumOrderByAggregateInput | undefined;
}
