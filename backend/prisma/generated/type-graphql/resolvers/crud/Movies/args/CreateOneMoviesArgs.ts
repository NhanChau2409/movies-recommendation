import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoviesCreateInput } from "../../../inputs/MoviesCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneMoviesArgs {
  @TypeGraphQL.Field((_type) => MoviesCreateInput, {
    nullable: false,
  })
  data!: MoviesCreateInput;
}
