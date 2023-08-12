import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Movie_genresCreateWithoutGenresInput } from "../inputs/Movie_genresCreateWithoutGenresInput";
import { Movie_genresUpdateWithoutGenresInput } from "../inputs/Movie_genresUpdateWithoutGenresInput";
import { Movie_genresWhereUniqueInput } from "../inputs/Movie_genresWhereUniqueInput";

@TypeGraphQL.InputType(
  "Movie_genresUpsertWithWhereUniqueWithoutGenresInput",
  {},
)
export class Movie_genresUpsertWithWhereUniqueWithoutGenresInput {
  @TypeGraphQL.Field((_type) => Movie_genresWhereUniqueInput, {
    nullable: false,
  })
  where!: Movie_genresWhereUniqueInput;

  @TypeGraphQL.Field((_type) => Movie_genresUpdateWithoutGenresInput, {
    nullable: false,
  })
  update!: Movie_genresUpdateWithoutGenresInput;

  @TypeGraphQL.Field((_type) => Movie_genresCreateWithoutGenresInput, {
    nullable: false,
  })
  create!: Movie_genresCreateWithoutGenresInput;
}
