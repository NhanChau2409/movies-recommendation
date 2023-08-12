import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Movie_genresCreateWithoutMoviesInput } from "../inputs/Movie_genresCreateWithoutMoviesInput";
import { Movie_genresUpdateWithoutMoviesInput } from "../inputs/Movie_genresUpdateWithoutMoviesInput";
import { Movie_genresWhereUniqueInput } from "../inputs/Movie_genresWhereUniqueInput";

@TypeGraphQL.InputType(
  "Movie_genresUpsertWithWhereUniqueWithoutMoviesInput",
  {},
)
export class Movie_genresUpsertWithWhereUniqueWithoutMoviesInput {
  @TypeGraphQL.Field((_type) => Movie_genresWhereUniqueInput, {
    nullable: false,
  })
  where!: Movie_genresWhereUniqueInput;

  @TypeGraphQL.Field((_type) => Movie_genresUpdateWithoutMoviesInput, {
    nullable: false,
  })
  update!: Movie_genresUpdateWithoutMoviesInput;

  @TypeGraphQL.Field((_type) => Movie_genresCreateWithoutMoviesInput, {
    nullable: false,
  })
  create!: Movie_genresCreateWithoutMoviesInput;
}
