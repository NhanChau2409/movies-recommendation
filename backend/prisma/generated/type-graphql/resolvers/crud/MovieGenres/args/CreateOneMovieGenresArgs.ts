import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieGenresCreateInput } from "../../../inputs/MovieGenresCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneMovieGenresArgs {
  @TypeGraphQL.Field((_type) => MovieGenresCreateInput, {
    nullable: false,
  })
  data!: MovieGenresCreateInput;
}
