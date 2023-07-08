import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoviesCreateOrConnectWithoutRatingsInput } from "../inputs/MoviesCreateOrConnectWithoutRatingsInput";
import { MoviesCreateWithoutRatingsInput } from "../inputs/MoviesCreateWithoutRatingsInput";
import { MoviesUpdateWithoutRatingsInput } from "../inputs/MoviesUpdateWithoutRatingsInput";
import { MoviesUpsertWithoutRatingsInput } from "../inputs/MoviesUpsertWithoutRatingsInput";
import { MoviesWhereUniqueInput } from "../inputs/MoviesWhereUniqueInput";

@TypeGraphQL.InputType("MoviesUpdateOneRequiredWithoutRatingsNestedInput", {})
export class MoviesUpdateOneRequiredWithoutRatingsNestedInput {
  @TypeGraphQL.Field((_type) => MoviesCreateWithoutRatingsInput, {
    nullable: true,
  })
  create?: MoviesCreateWithoutRatingsInput | undefined;

  @TypeGraphQL.Field((_type) => MoviesCreateOrConnectWithoutRatingsInput, {
    nullable: true,
  })
  connectOrCreate?: MoviesCreateOrConnectWithoutRatingsInput | undefined;

  @TypeGraphQL.Field((_type) => MoviesUpsertWithoutRatingsInput, {
    nullable: true,
  })
  upsert?: MoviesUpsertWithoutRatingsInput | undefined;

  @TypeGraphQL.Field((_type) => MoviesWhereUniqueInput, {
    nullable: true,
  })
  connect?: MoviesWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => MoviesUpdateWithoutRatingsInput, {
    nullable: true,
  })
  update?: MoviesUpdateWithoutRatingsInput | undefined;
}
