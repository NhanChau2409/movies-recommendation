import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RatingsCreateManyMoviesInputEnvelope } from "../inputs/RatingsCreateManyMoviesInputEnvelope";
import { RatingsCreateOrConnectWithoutMoviesInput } from "../inputs/RatingsCreateOrConnectWithoutMoviesInput";
import { RatingsCreateWithoutMoviesInput } from "../inputs/RatingsCreateWithoutMoviesInput";
import { RatingsScalarWhereInput } from "../inputs/RatingsScalarWhereInput";
import { RatingsUpdateManyWithWhereWithoutMoviesInput } from "../inputs/RatingsUpdateManyWithWhereWithoutMoviesInput";
import { RatingsUpdateWithWhereUniqueWithoutMoviesInput } from "../inputs/RatingsUpdateWithWhereUniqueWithoutMoviesInput";
import { RatingsUpsertWithWhereUniqueWithoutMoviesInput } from "../inputs/RatingsUpsertWithWhereUniqueWithoutMoviesInput";
import { RatingsWhereUniqueInput } from "../inputs/RatingsWhereUniqueInput";

@TypeGraphQL.InputType("RatingsUpdateManyWithoutMoviesNestedInput", {})
export class RatingsUpdateManyWithoutMoviesNestedInput {
  @TypeGraphQL.Field((_type) => [RatingsCreateWithoutMoviesInput], {
    nullable: true,
  })
  create?: RatingsCreateWithoutMoviesInput[] | undefined;

  @TypeGraphQL.Field((_type) => [RatingsCreateOrConnectWithoutMoviesInput], {
    nullable: true,
  })
  connectOrCreate?: RatingsCreateOrConnectWithoutMoviesInput[] | undefined;

  @TypeGraphQL.Field(
    (_type) => [RatingsUpsertWithWhereUniqueWithoutMoviesInput],
    {
      nullable: true,
    },
  )
  upsert?: RatingsUpsertWithWhereUniqueWithoutMoviesInput[] | undefined;

  @TypeGraphQL.Field((_type) => RatingsCreateManyMoviesInputEnvelope, {
    nullable: true,
  })
  createMany?: RatingsCreateManyMoviesInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [RatingsWhereUniqueInput], {
    nullable: true,
  })
  set?: RatingsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [RatingsWhereUniqueInput], {
    nullable: true,
  })
  disconnect?: RatingsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [RatingsWhereUniqueInput], {
    nullable: true,
  })
  delete?: RatingsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [RatingsWhereUniqueInput], {
    nullable: true,
  })
  connect?: RatingsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(
    (_type) => [RatingsUpdateWithWhereUniqueWithoutMoviesInput],
    {
      nullable: true,
    },
  )
  update?: RatingsUpdateWithWhereUniqueWithoutMoviesInput[] | undefined;

  @TypeGraphQL.Field(
    (_type) => [RatingsUpdateManyWithWhereWithoutMoviesInput],
    {
      nullable: true,
    },
  )
  updateMany?: RatingsUpdateManyWithWhereWithoutMoviesInput[] | undefined;

  @TypeGraphQL.Field((_type) => [RatingsScalarWhereInput], {
    nullable: true,
  })
  deleteMany?: RatingsScalarWhereInput[] | undefined;
}
