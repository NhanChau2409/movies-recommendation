import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Movie_genresCreateWithoutMoviesInput } from "../inputs/Movie_genresCreateWithoutMoviesInput";
import { Movie_genresWhereUniqueInput } from "../inputs/Movie_genresWhereUniqueInput";

@TypeGraphQL.InputType("Movie_genresCreateOrConnectWithoutMoviesInput", {})
export class Movie_genresCreateOrConnectWithoutMoviesInput {
  @TypeGraphQL.Field((_type) => Movie_genresWhereUniqueInput, {
    nullable: false,
  })
  where!: Movie_genresWhereUniqueInput;

  @TypeGraphQL.Field((_type) => Movie_genresCreateWithoutMoviesInput, {
    nullable: false,
  })
  create!: Movie_genresCreateWithoutMoviesInput;
}
