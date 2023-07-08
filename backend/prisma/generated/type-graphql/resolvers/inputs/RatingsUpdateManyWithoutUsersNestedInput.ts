import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RatingsCreateManyUsersInputEnvelope } from "../inputs/RatingsCreateManyUsersInputEnvelope";
import { RatingsCreateOrConnectWithoutUsersInput } from "../inputs/RatingsCreateOrConnectWithoutUsersInput";
import { RatingsCreateWithoutUsersInput } from "../inputs/RatingsCreateWithoutUsersInput";
import { RatingsScalarWhereInput } from "../inputs/RatingsScalarWhereInput";
import { RatingsUpdateManyWithWhereWithoutUsersInput } from "../inputs/RatingsUpdateManyWithWhereWithoutUsersInput";
import { RatingsUpdateWithWhereUniqueWithoutUsersInput } from "../inputs/RatingsUpdateWithWhereUniqueWithoutUsersInput";
import { RatingsUpsertWithWhereUniqueWithoutUsersInput } from "../inputs/RatingsUpsertWithWhereUniqueWithoutUsersInput";
import { RatingsWhereUniqueInput } from "../inputs/RatingsWhereUniqueInput";

@TypeGraphQL.InputType("RatingsUpdateManyWithoutUsersNestedInput", {})
export class RatingsUpdateManyWithoutUsersNestedInput {
  @TypeGraphQL.Field((_type) => [RatingsCreateWithoutUsersInput], {
    nullable: true,
  })
  create?: RatingsCreateWithoutUsersInput[] | undefined;

  @TypeGraphQL.Field((_type) => [RatingsCreateOrConnectWithoutUsersInput], {
    nullable: true,
  })
  connectOrCreate?: RatingsCreateOrConnectWithoutUsersInput[] | undefined;

  @TypeGraphQL.Field(
    (_type) => [RatingsUpsertWithWhereUniqueWithoutUsersInput],
    {
      nullable: true,
    },
  )
  upsert?: RatingsUpsertWithWhereUniqueWithoutUsersInput[] | undefined;

  @TypeGraphQL.Field((_type) => RatingsCreateManyUsersInputEnvelope, {
    nullable: true,
  })
  createMany?: RatingsCreateManyUsersInputEnvelope | undefined;

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
    (_type) => [RatingsUpdateWithWhereUniqueWithoutUsersInput],
    {
      nullable: true,
    },
  )
  update?: RatingsUpdateWithWhereUniqueWithoutUsersInput[] | undefined;

  @TypeGraphQL.Field((_type) => [RatingsUpdateManyWithWhereWithoutUsersInput], {
    nullable: true,
  })
  updateMany?: RatingsUpdateManyWithWhereWithoutUsersInput[] | undefined;

  @TypeGraphQL.Field((_type) => [RatingsScalarWhereInput], {
    nullable: true,
  })
  deleteMany?: RatingsScalarWhereInput[] | undefined;
}
