import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenresCreateNestedOneWithoutMovie_genresInput } from "../inputs/GenresCreateNestedOneWithoutMovie_genresInput";
import { MoviesCreateNestedOneWithoutMovie_genresInput } from "../inputs/MoviesCreateNestedOneWithoutMovie_genresInput";

@TypeGraphQL.InputType("Movie_genresCreateInput", {})
export class Movie_genresCreateInput {
  @TypeGraphQL.Field((_type) => GenresCreateNestedOneWithoutMovie_genresInput, {
    nullable: false,
  })
  genres!: GenresCreateNestedOneWithoutMovie_genresInput;

  @TypeGraphQL.Field((_type) => MoviesCreateNestedOneWithoutMovie_genresInput, {
    nullable: false,
  })
  movies!: MoviesCreateNestedOneWithoutMovie_genresInput;
}
