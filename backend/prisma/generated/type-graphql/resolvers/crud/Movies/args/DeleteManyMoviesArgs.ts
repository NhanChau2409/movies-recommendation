import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoviesWhereInput } from "../../../inputs/MoviesWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyMoviesArgs {
  @TypeGraphQL.Field((_type) => MoviesWhereInput, {
    nullable: true,
  })
  where?: MoviesWhereInput | undefined;
}
