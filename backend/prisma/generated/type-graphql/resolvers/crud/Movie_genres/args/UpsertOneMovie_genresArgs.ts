import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Movie_genresCreateInput } from "../../../inputs/Movie_genresCreateInput";
import { Movie_genresUpdateInput } from "../../../inputs/Movie_genresUpdateInput";
import { Movie_genresWhereUniqueInput } from "../../../inputs/Movie_genresWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneMovie_genresArgs {
  @TypeGraphQL.Field((_type) => Movie_genresWhereUniqueInput, {
    nullable: false,
  })
  where!: Movie_genresWhereUniqueInput;

  @TypeGraphQL.Field((_type) => Movie_genresCreateInput, {
    nullable: false,
  })
  create!: Movie_genresCreateInput;

  @TypeGraphQL.Field((_type) => Movie_genresUpdateInput, {
    nullable: false,
  })
  update!: Movie_genresUpdateInput;
}
