import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieGenresUpdateInput } from "../../../inputs/MovieGenresUpdateInput";
import { MovieGenresWhereUniqueInput } from "../../../inputs/MovieGenresWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneMovieGenresArgs {
  @TypeGraphQL.Field((_type) => MovieGenresUpdateInput, {
    nullable: false,
  })
  data!: MovieGenresUpdateInput;

  @TypeGraphQL.Field((_type) => MovieGenresWhereUniqueInput, {
    nullable: false,
  })
  where!: MovieGenresWhereUniqueInput;
}
