import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GenresOrderByWithAggregationInput } from "../../../inputs/GenresOrderByWithAggregationInput";
import { GenresScalarWhereWithAggregatesInput } from "../../../inputs/GenresScalarWhereWithAggregatesInput";
import { GenresWhereInput } from "../../../inputs/GenresWhereInput";
import { GenresScalarFieldEnum } from "../../../../enums/GenresScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByGenresArgs {
  @TypeGraphQL.Field((_type) => GenresWhereInput, {
    nullable: true,
  })
  where?: GenresWhereInput | undefined;

  @TypeGraphQL.Field((_type) => [GenresOrderByWithAggregationInput], {
    nullable: true,
  })
  orderBy?: GenresOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field((_type) => [GenresScalarFieldEnum], {
    nullable: false,
  })
  by!: Array<"id" | "genre">;

  @TypeGraphQL.Field((_type) => GenresScalarWhereWithAggregatesInput, {
    nullable: true,
  })
  having?: GenresScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;
}
