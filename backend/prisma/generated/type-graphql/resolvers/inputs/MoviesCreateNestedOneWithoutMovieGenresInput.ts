import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoviesCreateOrConnectWithoutMovieGenresInput } from "../inputs/MoviesCreateOrConnectWithoutMovieGenresInput";
import { MoviesCreateWithoutMovieGenresInput } from "../inputs/MoviesCreateWithoutMovieGenresInput";
import { MoviesWhereUniqueInput } from "../inputs/MoviesWhereUniqueInput";

@TypeGraphQL.InputType("MoviesCreateNestedOneWithoutMovieGenresInput", {})
export class MoviesCreateNestedOneWithoutMovieGenresInput {
  @TypeGraphQL.Field((_type) => MoviesCreateWithoutMovieGenresInput, {
    nullable: true,
  })
  create?: MoviesCreateWithoutMovieGenresInput | undefined;

  @TypeGraphQL.Field((_type) => MoviesCreateOrConnectWithoutMovieGenresInput, {
    nullable: true,
  })
  connectOrCreate?: MoviesCreateOrConnectWithoutMovieGenresInput | undefined;

  @TypeGraphQL.Field((_type) => MoviesWhereUniqueInput, {
    nullable: true,
  })
  connect?: MoviesWhereUniqueInput | undefined;
}
