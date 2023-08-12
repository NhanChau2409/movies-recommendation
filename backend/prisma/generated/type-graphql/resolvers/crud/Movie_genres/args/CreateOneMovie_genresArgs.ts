import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Movie_genresCreateInput } from "../../../inputs/Movie_genresCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneMovie_genresArgs {
  @TypeGraphQL.Field((_type) => Movie_genresCreateInput, {
    nullable: false,
  })
  data!: Movie_genresCreateInput;
}
