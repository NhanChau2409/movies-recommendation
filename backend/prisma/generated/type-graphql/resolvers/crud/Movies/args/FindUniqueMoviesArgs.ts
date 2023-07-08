import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoviesWhereUniqueInput } from "../../../inputs/MoviesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueMoviesArgs {
  @TypeGraphQL.Field((_type) => MoviesWhereUniqueInput, {
    nullable: false,
  })
  where!: MoviesWhereUniqueInput;
}
