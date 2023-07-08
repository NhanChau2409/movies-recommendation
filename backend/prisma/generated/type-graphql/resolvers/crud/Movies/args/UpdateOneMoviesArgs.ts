import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoviesUpdateInput } from "../../../inputs/MoviesUpdateInput";
import { MoviesWhereUniqueInput } from "../../../inputs/MoviesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneMoviesArgs {
  @TypeGraphQL.Field((_type) => MoviesUpdateInput, {
    nullable: false,
  })
  data!: MoviesUpdateInput;

  @TypeGraphQL.Field((_type) => MoviesWhereUniqueInput, {
    nullable: false,
  })
  where!: MoviesWhereUniqueInput;
}
