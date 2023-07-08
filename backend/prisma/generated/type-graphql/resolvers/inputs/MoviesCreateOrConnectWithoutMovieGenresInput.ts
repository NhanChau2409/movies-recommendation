import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoviesCreateWithoutMovieGenresInput } from "../inputs/MoviesCreateWithoutMovieGenresInput";
import { MoviesWhereUniqueInput } from "../inputs/MoviesWhereUniqueInput";

@TypeGraphQL.InputType("MoviesCreateOrConnectWithoutMovieGenresInput", {})
export class MoviesCreateOrConnectWithoutMovieGenresInput {
  @TypeGraphQL.Field((_type) => MoviesWhereUniqueInput, {
    nullable: false,
  })
  where!: MoviesWhereUniqueInput;

  @TypeGraphQL.Field((_type) => MoviesCreateWithoutMovieGenresInput, {
    nullable: false,
  })
  create!: MoviesCreateWithoutMovieGenresInput;
}
