import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieGenresOrderByWithAggregationInput } from "../../../inputs/MovieGenresOrderByWithAggregationInput";
import { MovieGenresScalarWhereWithAggregatesInput } from "../../../inputs/MovieGenresScalarWhereWithAggregatesInput";
import { MovieGenresWhereInput } from "../../../inputs/MovieGenresWhereInput";
import { MovieGenresScalarFieldEnum } from "../../../../enums/MovieGenresScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByMovieGenresArgs {
  @TypeGraphQL.Field((_type) => MovieGenresWhereInput, {
    nullable: true,
  })
  where?: MovieGenresWhereInput | undefined;

  @TypeGraphQL.Field((_type) => [MovieGenresOrderByWithAggregationInput], {
    nullable: true,
  })
  orderBy?: MovieGenresOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MovieGenresScalarFieldEnum], {
    nullable: false,
  })
  by!: Array<"movie_id" | "genre_id">;

  @TypeGraphQL.Field((_type) => MovieGenresScalarWhereWithAggregatesInput, {
    nullable: true,
  })
  having?: MovieGenresScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;
}
