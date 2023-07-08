import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieGenresCreateWithoutGenresInput } from "../inputs/MovieGenresCreateWithoutGenresInput";
import { MovieGenresUpdateWithoutGenresInput } from "../inputs/MovieGenresUpdateWithoutGenresInput";
import { MovieGenresWhereUniqueInput } from "../inputs/MovieGenresWhereUniqueInput";

@TypeGraphQL.InputType("MovieGenresUpsertWithWhereUniqueWithoutGenresInput", {})
export class MovieGenresUpsertWithWhereUniqueWithoutGenresInput {
  @TypeGraphQL.Field((_type) => MovieGenresWhereUniqueInput, {
    nullable: false,
  })
  where!: MovieGenresWhereUniqueInput;

  @TypeGraphQL.Field((_type) => MovieGenresUpdateWithoutGenresInput, {
    nullable: false,
  })
  update!: MovieGenresUpdateWithoutGenresInput;

  @TypeGraphQL.Field((_type) => MovieGenresCreateWithoutGenresInput, {
    nullable: false,
  })
  create!: MovieGenresCreateWithoutGenresInput;
}
