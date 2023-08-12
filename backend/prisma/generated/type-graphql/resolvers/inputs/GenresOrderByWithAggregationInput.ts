import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenresAvgOrderByAggregateInput } from "../inputs/GenresAvgOrderByAggregateInput";
import { GenresCountOrderByAggregateInput } from "../inputs/GenresCountOrderByAggregateInput";
import { GenresMaxOrderByAggregateInput } from "../inputs/GenresMaxOrderByAggregateInput";
import { GenresMinOrderByAggregateInput } from "../inputs/GenresMinOrderByAggregateInput";
import { GenresSumOrderByAggregateInput } from "../inputs/GenresSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("GenresOrderByWithAggregationInput", {})
export class GenresOrderByWithAggregationInput {
  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  genre?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => GenresCountOrderByAggregateInput, {
    nullable: true,
  })
  _count?: GenresCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => GenresAvgOrderByAggregateInput, {
    nullable: true,
  })
  _avg?: GenresAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => GenresMaxOrderByAggregateInput, {
    nullable: true,
  })
  _max?: GenresMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => GenresMinOrderByAggregateInput, {
    nullable: true,
  })
  _min?: GenresMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => GenresSumOrderByAggregateInput, {
    nullable: true,
  })
  _sum?: GenresSumOrderByAggregateInput | undefined;
}
