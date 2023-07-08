import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieGenresWhereUniqueInput } from "../../../inputs/MovieGenresWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueMovieGenresArgs {
  @TypeGraphQL.Field((_type) => MovieGenresWhereUniqueInput, {
    nullable: false,
  })
  where!: MovieGenresWhereUniqueInput;
}
