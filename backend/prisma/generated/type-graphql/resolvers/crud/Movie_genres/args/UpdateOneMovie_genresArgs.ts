import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Movie_genresUpdateInput } from "../../../inputs/Movie_genresUpdateInput";
import { Movie_genresWhereUniqueInput } from "../../../inputs/Movie_genresWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneMovie_genresArgs {
  @TypeGraphQL.Field((_type) => Movie_genresUpdateInput, {
    nullable: false,
  })
  data!: Movie_genresUpdateInput;

  @TypeGraphQL.Field((_type) => Movie_genresWhereUniqueInput, {
    nullable: false,
  })
  where!: Movie_genresWhereUniqueInput;
}
