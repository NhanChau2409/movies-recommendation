import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieGenresCreateWithoutMoviesInput } from "../inputs/MovieGenresCreateWithoutMoviesInput";
import { MovieGenresWhereUniqueInput } from "../inputs/MovieGenresWhereUniqueInput";

@TypeGraphQL.InputType("MovieGenresCreateOrConnectWithoutMoviesInput", {})
export class MovieGenresCreateOrConnectWithoutMoviesInput {
  @TypeGraphQL.Field((_type) => MovieGenresWhereUniqueInput, {
    nullable: false,
  })
  where!: MovieGenresWhereUniqueInput;

  @TypeGraphQL.Field((_type) => MovieGenresCreateWithoutMoviesInput, {
    nullable: false,
  })
  create!: MovieGenresCreateWithoutMoviesInput;
}
