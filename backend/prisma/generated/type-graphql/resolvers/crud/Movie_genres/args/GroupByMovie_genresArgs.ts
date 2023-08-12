import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Movie_genresOrderByWithAggregationInput } from "../../../inputs/Movie_genresOrderByWithAggregationInput";
import { Movie_genresScalarWhereWithAggregatesInput } from "../../../inputs/Movie_genresScalarWhereWithAggregatesInput";
import { Movie_genresWhereInput } from "../../../inputs/Movie_genresWhereInput";
import { Movie_genresScalarFieldEnum } from "../../../../enums/Movie_genresScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByMovie_genresArgs {
  @TypeGraphQL.Field((_type) => Movie_genresWhereInput, {
    nullable: true,
  })
  where?: Movie_genresWhereInput | undefined;

  @TypeGraphQL.Field((_type) => [Movie_genresOrderByWithAggregationInput], {
    nullable: true,
  })
  orderBy?: Movie_genresOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field((_type) => [Movie_genresScalarFieldEnum], {
    nullable: false,
  })
  by!: Array<"movie_id" | "genre_id">;

  @TypeGraphQL.Field((_type) => Movie_genresScalarWhereWithAggregatesInput, {
    nullable: true,
  })
  having?: Movie_genresScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;
}
