import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenresCreateWithoutMovieGenresInput } from "../inputs/GenresCreateWithoutMovieGenresInput";
import { GenresUpdateWithoutMovieGenresInput } from "../inputs/GenresUpdateWithoutMovieGenresInput";

@TypeGraphQL.InputType("GenresUpsertWithoutMovieGenresInput", {})
export class GenresUpsertWithoutMovieGenresInput {
  @TypeGraphQL.Field((_type) => GenresUpdateWithoutMovieGenresInput, {
    nullable: false,
  })
  update!: GenresUpdateWithoutMovieGenresInput;

  @TypeGraphQL.Field((_type) => GenresCreateWithoutMovieGenresInput, {
    nullable: false,
  })
  create!: GenresCreateWithoutMovieGenresInput;
}
