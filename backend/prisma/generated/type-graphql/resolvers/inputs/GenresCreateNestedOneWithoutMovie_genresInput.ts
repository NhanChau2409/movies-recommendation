import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenresCreateOrConnectWithoutMovie_genresInput } from "../inputs/GenresCreateOrConnectWithoutMovie_genresInput";
import { GenresCreateWithoutMovie_genresInput } from "../inputs/GenresCreateWithoutMovie_genresInput";
import { GenresWhereUniqueInput } from "../inputs/GenresWhereUniqueInput";

@TypeGraphQL.InputType("GenresCreateNestedOneWithoutMovie_genresInput", {})
export class GenresCreateNestedOneWithoutMovie_genresInput {
  @TypeGraphQL.Field((_type) => GenresCreateWithoutMovie_genresInput, {
    nullable: true,
  })
  create?: GenresCreateWithoutMovie_genresInput | undefined;

  @TypeGraphQL.Field((_type) => GenresCreateOrConnectWithoutMovie_genresInput, {
    nullable: true,
  })
  connectOrCreate?: GenresCreateOrConnectWithoutMovie_genresInput | undefined;

  @TypeGraphQL.Field((_type) => GenresWhereUniqueInput, {
    nullable: true,
  })
  connect?: GenresWhereUniqueInput | undefined;
}
