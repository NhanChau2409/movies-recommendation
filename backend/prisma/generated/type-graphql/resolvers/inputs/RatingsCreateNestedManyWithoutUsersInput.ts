import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RatingsCreateManyUsersInputEnvelope } from "../inputs/RatingsCreateManyUsersInputEnvelope";
import { RatingsCreateOrConnectWithoutUsersInput } from "../inputs/RatingsCreateOrConnectWithoutUsersInput";
import { RatingsCreateWithoutUsersInput } from "../inputs/RatingsCreateWithoutUsersInput";
import { RatingsWhereUniqueInput } from "../inputs/RatingsWhereUniqueInput";

@TypeGraphQL.InputType("RatingsCreateNestedManyWithoutUsersInput", {})
export class RatingsCreateNestedManyWithoutUsersInput {
  @TypeGraphQL.Field((_type) => [RatingsCreateWithoutUsersInput], {
    nullable: true,
  })
  create?: RatingsCreateWithoutUsersInput[] | undefined;

  @TypeGraphQL.Field((_type) => [RatingsCreateOrConnectWithoutUsersInput], {
    nullable: true,
  })
  connectOrCreate?: RatingsCreateOrConnectWithoutUsersInput[] | undefined;

  @TypeGraphQL.Field((_type) => RatingsCreateManyUsersInputEnvelope, {
    nullable: true,
  })
  createMany?: RatingsCreateManyUsersInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [RatingsWhereUniqueInput], {
    nullable: true,
  })
  connect?: RatingsWhereUniqueInput[] | undefined;
}
