import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieGenresUpdateWithoutGenresInput } from "../inputs/MovieGenresUpdateWithoutGenresInput";
import { MovieGenresWhereUniqueInput } from "../inputs/MovieGenresWhereUniqueInput";

@TypeGraphQL.InputType("MovieGenresUpdateWithWhereUniqueWithoutGenresInput", {})
export class MovieGenresUpdateWithWhereUniqueWithoutGenresInput {
  @TypeGraphQL.Field((_type) => MovieGenresWhereUniqueInput, {
    nullable: false,
  })
  where!: MovieGenresWhereUniqueInput;

  @TypeGraphQL.Field((_type) => MovieGenresUpdateWithoutGenresInput, {
    nullable: false,
  })
  data!: MovieGenresUpdateWithoutGenresInput;
}
