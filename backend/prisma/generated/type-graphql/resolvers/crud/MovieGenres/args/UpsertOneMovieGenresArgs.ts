import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieGenresCreateInput } from "../../../inputs/MovieGenresCreateInput";
import { MovieGenresUpdateInput } from "../../../inputs/MovieGenresUpdateInput";
import { MovieGenresWhereUniqueInput } from "../../../inputs/MovieGenresWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneMovieGenresArgs {
  @TypeGraphQL.Field((_type) => MovieGenresWhereUniqueInput, {
    nullable: false,
  })
  where!: MovieGenresWhereUniqueInput;

  @TypeGraphQL.Field((_type) => MovieGenresCreateInput, {
    nullable: false,
  })
  create!: MovieGenresCreateInput;

  @TypeGraphQL.Field((_type) => MovieGenresUpdateInput, {
    nullable: false,
  })
  update!: MovieGenresUpdateInput;
}
