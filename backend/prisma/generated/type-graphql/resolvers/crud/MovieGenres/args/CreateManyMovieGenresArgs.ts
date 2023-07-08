import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieGenresCreateManyInput } from "../../../inputs/MovieGenresCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyMovieGenresArgs {
  @TypeGraphQL.Field((_type) => [MovieGenresCreateManyInput], {
    nullable: false,
  })
  data!: MovieGenresCreateManyInput[];
}
