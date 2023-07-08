import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenresCreateWithoutMovieGenresInput } from "../inputs/GenresCreateWithoutMovieGenresInput";
import { GenresWhereUniqueInput } from "../inputs/GenresWhereUniqueInput";

@TypeGraphQL.InputType("GenresCreateOrConnectWithoutMovieGenresInput", {})
export class GenresCreateOrConnectWithoutMovieGenresInput {
  @TypeGraphQL.Field((_type) => GenresWhereUniqueInput, {
    nullable: false,
  })
  where!: GenresWhereUniqueInput;

  @TypeGraphQL.Field((_type) => GenresCreateWithoutMovieGenresInput, {
    nullable: false,
  })
  create!: GenresCreateWithoutMovieGenresInput;
}
