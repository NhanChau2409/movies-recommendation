import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RatingsOrderByWithAggregationInput } from "../../../inputs/RatingsOrderByWithAggregationInput";
import { RatingsScalarWhereWithAggregatesInput } from "../../../inputs/RatingsScalarWhereWithAggregatesInput";
import { RatingsWhereInput } from "../../../inputs/RatingsWhereInput";
import { RatingsScalarFieldEnum } from "../../../../enums/RatingsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByRatingsArgs {
  @TypeGraphQL.Field((_type) => RatingsWhereInput, {
    nullable: true,
  })
  where?: RatingsWhereInput | undefined;

  @TypeGraphQL.Field((_type) => [RatingsOrderByWithAggregationInput], {
    nullable: true,
  })
  orderBy?: RatingsOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field((_type) => [RatingsScalarFieldEnum], {
    nullable: false,
  })
  by!: Array<"user_id" | "movie_id" | "rating">;

  @TypeGraphQL.Field((_type) => RatingsScalarWhereWithAggregatesInput, {
    nullable: true,
  })
  having?: RatingsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;
}
