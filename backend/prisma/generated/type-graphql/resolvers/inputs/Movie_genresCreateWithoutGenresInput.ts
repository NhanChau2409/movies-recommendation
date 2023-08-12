import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoviesCreateNestedOneWithoutMovie_genresInput } from "../inputs/MoviesCreateNestedOneWithoutMovie_genresInput";

@TypeGraphQL.InputType("Movie_genresCreateWithoutGenresInput", {})
export class Movie_genresCreateWithoutGenresInput {
  @TypeGraphQL.Field((_type) => MoviesCreateNestedOneWithoutMovie_genresInput, {
    nullable: false,
  })
  movies!: MoviesCreateNestedOneWithoutMovie_genresInput;
}
