import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieGenresWhereInput } from "../../inputs/MovieGenresWhereInput";

@TypeGraphQL.ArgsType()
export class MoviesCountMovieGenresArgs {
  @TypeGraphQL.Field((_type) => MovieGenresWhereInput, {
    nullable: true,
  })
  where?: MovieGenresWhereInput | undefined;
}
