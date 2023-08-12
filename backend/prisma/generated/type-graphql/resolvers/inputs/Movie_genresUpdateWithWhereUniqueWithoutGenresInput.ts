import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Movie_genresUpdateWithoutGenresInput } from "../inputs/Movie_genresUpdateWithoutGenresInput";
import { Movie_genresWhereUniqueInput } from "../inputs/Movie_genresWhereUniqueInput";

@TypeGraphQL.InputType(
  "Movie_genresUpdateWithWhereUniqueWithoutGenresInput",
  {},
)
export class Movie_genresUpdateWithWhereUniqueWithoutGenresInput {
  @TypeGraphQL.Field((_type) => Movie_genresWhereUniqueInput, {
    nullable: false,
  })
  where!: Movie_genresWhereUniqueInput;

  @TypeGraphQL.Field((_type) => Movie_genresUpdateWithoutGenresInput, {
    nullable: false,
  })
  data!: Movie_genresUpdateWithoutGenresInput;
}
