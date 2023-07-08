import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenresCreateOrConnectWithoutMovieGenresInput } from "../inputs/GenresCreateOrConnectWithoutMovieGenresInput";
import { GenresCreateWithoutMovieGenresInput } from "../inputs/GenresCreateWithoutMovieGenresInput";
import { GenresWhereUniqueInput } from "../inputs/GenresWhereUniqueInput";

@TypeGraphQL.InputType("GenresCreateNestedOneWithoutMovieGenresInput", {})
export class GenresCreateNestedOneWithoutMovieGenresInput {
  @TypeGraphQL.Field((_type) => GenresCreateWithoutMovieGenresInput, {
    nullable: true,
  })
  create?: GenresCreateWithoutMovieGenresInput | undefined;

  @TypeGraphQL.Field((_type) => GenresCreateOrConnectWithoutMovieGenresInput, {
    nullable: true,
  })
  connectOrCreate?: GenresCreateOrConnectWithoutMovieGenresInput | undefined;

  @TypeGraphQL.Field((_type) => GenresWhereUniqueInput, {
    nullable: true,
  })
  connect?: GenresWhereUniqueInput | undefined;
}
