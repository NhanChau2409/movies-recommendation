import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenresCreateOrConnectWithoutMovie_genresInput } from "../inputs/GenresCreateOrConnectWithoutMovie_genresInput";
import { GenresCreateWithoutMovie_genresInput } from "../inputs/GenresCreateWithoutMovie_genresInput";
import { GenresUpdateWithoutMovie_genresInput } from "../inputs/GenresUpdateWithoutMovie_genresInput";
import { GenresUpsertWithoutMovie_genresInput } from "../inputs/GenresUpsertWithoutMovie_genresInput";
import { GenresWhereUniqueInput } from "../inputs/GenresWhereUniqueInput";

@TypeGraphQL.InputType(
  "GenresUpdateOneRequiredWithoutMovie_genresNestedInput",
  {},
)
export class GenresUpdateOneRequiredWithoutMovie_genresNestedInput {
  @TypeGraphQL.Field((_type) => GenresCreateWithoutMovie_genresInput, {
    nullable: true,
  })
  create?: GenresCreateWithoutMovie_genresInput | undefined;

  @TypeGraphQL.Field((_type) => GenresCreateOrConnectWithoutMovie_genresInput, {
    nullable: true,
  })
  connectOrCreate?: GenresCreateOrConnectWithoutMovie_genresInput | undefined;

  @TypeGraphQL.Field((_type) => GenresUpsertWithoutMovie_genresInput, {
    nullable: true,
  })
  upsert?: GenresUpsertWithoutMovie_genresInput | undefined;

  @TypeGraphQL.Field((_type) => GenresWhereUniqueInput, {
    nullable: true,
  })
  connect?: GenresWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => GenresUpdateWithoutMovie_genresInput, {
    nullable: true,
  })
  update?: GenresUpdateWithoutMovie_genresInput | undefined;
}
