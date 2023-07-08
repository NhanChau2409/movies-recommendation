import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoviesCreateOrConnectWithoutMovieGenresInput } from "../inputs/MoviesCreateOrConnectWithoutMovieGenresInput";
import { MoviesCreateWithoutMovieGenresInput } from "../inputs/MoviesCreateWithoutMovieGenresInput";
import { MoviesUpdateWithoutMovieGenresInput } from "../inputs/MoviesUpdateWithoutMovieGenresInput";
import { MoviesUpsertWithoutMovieGenresInput } from "../inputs/MoviesUpsertWithoutMovieGenresInput";
import { MoviesWhereUniqueInput } from "../inputs/MoviesWhereUniqueInput";

@TypeGraphQL.InputType(
  "MoviesUpdateOneRequiredWithoutMovieGenresNestedInput",
  {},
)
export class MoviesUpdateOneRequiredWithoutMovieGenresNestedInput {
  @TypeGraphQL.Field((_type) => MoviesCreateWithoutMovieGenresInput, {
    nullable: true,
  })
  create?: MoviesCreateWithoutMovieGenresInput | undefined;

  @TypeGraphQL.Field((_type) => MoviesCreateOrConnectWithoutMovieGenresInput, {
    nullable: true,
  })
  connectOrCreate?: MoviesCreateOrConnectWithoutMovieGenresInput | undefined;

  @TypeGraphQL.Field((_type) => MoviesUpsertWithoutMovieGenresInput, {
    nullable: true,
  })
  upsert?: MoviesUpsertWithoutMovieGenresInput | undefined;

  @TypeGraphQL.Field((_type) => MoviesWhereUniqueInput, {
    nullable: true,
  })
  connect?: MoviesWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => MoviesUpdateWithoutMovieGenresInput, {
    nullable: true,
  })
  update?: MoviesUpdateWithoutMovieGenresInput | undefined;
}
