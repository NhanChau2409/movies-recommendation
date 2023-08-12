import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenresCreateNestedOneWithoutMovie_genresInput } from "../inputs/GenresCreateNestedOneWithoutMovie_genresInput";

@TypeGraphQL.InputType("Movie_genresCreateWithoutMoviesInput", {})
export class Movie_genresCreateWithoutMoviesInput {
  @TypeGraphQL.Field((_type) => GenresCreateNestedOneWithoutMovie_genresInput, {
    nullable: false,
  })
  genres!: GenresCreateNestedOneWithoutMovie_genresInput;
}
