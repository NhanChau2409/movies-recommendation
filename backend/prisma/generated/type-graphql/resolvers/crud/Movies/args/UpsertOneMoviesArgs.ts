import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoviesCreateInput } from "../../../inputs/MoviesCreateInput";
import { MoviesUpdateInput } from "../../../inputs/MoviesUpdateInput";
import { MoviesWhereUniqueInput } from "../../../inputs/MoviesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneMoviesArgs {
  @TypeGraphQL.Field((_type) => MoviesWhereUniqueInput, {
    nullable: false,
  })
  where!: MoviesWhereUniqueInput;

  @TypeGraphQL.Field((_type) => MoviesCreateInput, {
    nullable: false,
  })
  create!: MoviesCreateInput;

  @TypeGraphQL.Field((_type) => MoviesUpdateInput, {
    nullable: false,
  })
  update!: MoviesUpdateInput;
}
