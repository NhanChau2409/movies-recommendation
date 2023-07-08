import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieGenresCreateWithoutMoviesInput } from "../inputs/MovieGenresCreateWithoutMoviesInput";
import { MovieGenresUpdateWithoutMoviesInput } from "../inputs/MovieGenresUpdateWithoutMoviesInput";
import { MovieGenresWhereUniqueInput } from "../inputs/MovieGenresWhereUniqueInput";

@TypeGraphQL.InputType("MovieGenresUpsertWithWhereUniqueWithoutMoviesInput", {})
export class MovieGenresUpsertWithWhereUniqueWithoutMoviesInput {
  @TypeGraphQL.Field((_type) => MovieGenresWhereUniqueInput, {
    nullable: false,
  })
  where!: MovieGenresWhereUniqueInput;

  @TypeGraphQL.Field((_type) => MovieGenresUpdateWithoutMoviesInput, {
    nullable: false,
  })
  update!: MovieGenresUpdateWithoutMoviesInput;

  @TypeGraphQL.Field((_type) => MovieGenresCreateWithoutMoviesInput, {
    nullable: false,
  })
  create!: MovieGenresCreateWithoutMoviesInput;
}
