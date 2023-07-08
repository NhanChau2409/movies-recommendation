import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoviesCreateOrConnectWithoutRatingsInput } from "../inputs/MoviesCreateOrConnectWithoutRatingsInput";
import { MoviesCreateWithoutRatingsInput } from "../inputs/MoviesCreateWithoutRatingsInput";
import { MoviesWhereUniqueInput } from "../inputs/MoviesWhereUniqueInput";

@TypeGraphQL.InputType("MoviesCreateNestedOneWithoutRatingsInput", {})
export class MoviesCreateNestedOneWithoutRatingsInput {
  @TypeGraphQL.Field((_type) => MoviesCreateWithoutRatingsInput, {
    nullable: true,
  })
  create?: MoviesCreateWithoutRatingsInput | undefined;

  @TypeGraphQL.Field((_type) => MoviesCreateOrConnectWithoutRatingsInput, {
    nullable: true,
  })
  connectOrCreate?: MoviesCreateOrConnectWithoutRatingsInput | undefined;

  @TypeGraphQL.Field((_type) => MoviesWhereUniqueInput, {
    nullable: true,
  })
  connect?: MoviesWhereUniqueInput | undefined;
}
