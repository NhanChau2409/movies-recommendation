import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenresCreateOrConnectWithoutMovieGenresInput } from "../inputs/GenresCreateOrConnectWithoutMovieGenresInput";
import { GenresCreateWithoutMovieGenresInput } from "../inputs/GenresCreateWithoutMovieGenresInput";
import { GenresUpdateWithoutMovieGenresInput } from "../inputs/GenresUpdateWithoutMovieGenresInput";
import { GenresUpsertWithoutMovieGenresInput } from "../inputs/GenresUpsertWithoutMovieGenresInput";
import { GenresWhereUniqueInput } from "../inputs/GenresWhereUniqueInput";

@TypeGraphQL.InputType(
  "GenresUpdateOneRequiredWithoutMovieGenresNestedInput",
  {},
)
export class GenresUpdateOneRequiredWithoutMovieGenresNestedInput {
  @TypeGraphQL.Field((_type) => GenresCreateWithoutMovieGenresInput, {
    nullable: true,
  })
  create?: GenresCreateWithoutMovieGenresInput | undefined;

  @TypeGraphQL.Field((_type) => GenresCreateOrConnectWithoutMovieGenresInput, {
    nullable: true,
  })
  connectOrCreate?: GenresCreateOrConnectWithoutMovieGenresInput | undefined;

  @TypeGraphQL.Field((_type) => GenresUpsertWithoutMovieGenresInput, {
    nullable: true,
  })
  upsert?: GenresUpsertWithoutMovieGenresInput | undefined;

  @TypeGraphQL.Field((_type) => GenresWhereUniqueInput, {
    nullable: true,
  })
  connect?: GenresWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => GenresUpdateWithoutMovieGenresInput, {
    nullable: true,
  })
  update?: GenresUpdateWithoutMovieGenresInput | undefined;
}
