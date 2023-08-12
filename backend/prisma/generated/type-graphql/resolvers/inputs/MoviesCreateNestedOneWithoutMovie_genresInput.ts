import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoviesCreateOrConnectWithoutMovie_genresInput } from "../inputs/MoviesCreateOrConnectWithoutMovie_genresInput";
import { MoviesCreateWithoutMovie_genresInput } from "../inputs/MoviesCreateWithoutMovie_genresInput";
import { MoviesWhereUniqueInput } from "../inputs/MoviesWhereUniqueInput";

@TypeGraphQL.InputType("MoviesCreateNestedOneWithoutMovie_genresInput", {})
export class MoviesCreateNestedOneWithoutMovie_genresInput {
  @TypeGraphQL.Field((_type) => MoviesCreateWithoutMovie_genresInput, {
    nullable: true,
  })
  create?: MoviesCreateWithoutMovie_genresInput | undefined;

  @TypeGraphQL.Field((_type) => MoviesCreateOrConnectWithoutMovie_genresInput, {
    nullable: true,
  })
  connectOrCreate?: MoviesCreateOrConnectWithoutMovie_genresInput | undefined;

  @TypeGraphQL.Field((_type) => MoviesWhereUniqueInput, {
    nullable: true,
  })
  connect?: MoviesWhereUniqueInput | undefined;
}
