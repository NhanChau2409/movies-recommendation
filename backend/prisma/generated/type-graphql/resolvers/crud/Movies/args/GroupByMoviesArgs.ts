import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoviesOrderByWithAggregationInput } from "../../../inputs/MoviesOrderByWithAggregationInput";
import { MoviesScalarWhereWithAggregatesInput } from "../../../inputs/MoviesScalarWhereWithAggregatesInput";
import { MoviesWhereInput } from "../../../inputs/MoviesWhereInput";
import { MoviesScalarFieldEnum } from "../../../../enums/MoviesScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByMoviesArgs {
  @TypeGraphQL.Field((_type) => MoviesWhereInput, {
    nullable: true,
  })
  where?: MoviesWhereInput | undefined;

  @TypeGraphQL.Field((_type) => [MoviesOrderByWithAggregationInput], {
    nullable: true,
  })
  orderBy?: MoviesOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MoviesScalarFieldEnum], {
    nullable: false,
  })
  by!: Array<
    | "id"
    | "title"
    | "release_date"
    | "runtime"
    | "overview"
    | "popularity"
    | "vote_average"
    | "vote_count"
    | "poster_path"
    | "backdrop_path"
  >;

  @TypeGraphQL.Field((_type) => MoviesScalarWhereWithAggregatesInput, {
    nullable: true,
  })
  having?: MoviesScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;
}
