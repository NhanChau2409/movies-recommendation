import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieGenresUpdateWithoutMoviesInput } from "../inputs/MovieGenresUpdateWithoutMoviesInput";
import { MovieGenresWhereUniqueInput } from "../inputs/MovieGenresWhereUniqueInput";

@TypeGraphQL.InputType("MovieGenresUpdateWithWhereUniqueWithoutMoviesInput", {})
export class MovieGenresUpdateWithWhereUniqueWithoutMoviesInput {
  @TypeGraphQL.Field((_type) => MovieGenresWhereUniqueInput, {
    nullable: false,
  })
  where!: MovieGenresWhereUniqueInput;

  @TypeGraphQL.Field((_type) => MovieGenresUpdateWithoutMoviesInput, {
    nullable: false,
  })
  data!: MovieGenresUpdateWithoutMoviesInput;
}
