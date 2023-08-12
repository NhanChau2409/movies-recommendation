import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Movie_genresWhereUniqueInput } from "../../../inputs/Movie_genresWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneMovie_genresArgs {
  @TypeGraphQL.Field((_type) => Movie_genresWhereUniqueInput, {
    nullable: false,
  })
  where!: Movie_genresWhereUniqueInput;
}
