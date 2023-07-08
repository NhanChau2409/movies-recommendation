import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UsersCreateOrConnectWithoutRatingsInput } from "../inputs/UsersCreateOrConnectWithoutRatingsInput";
import { UsersCreateWithoutRatingsInput } from "../inputs/UsersCreateWithoutRatingsInput";
import { UsersWhereUniqueInput } from "../inputs/UsersWhereUniqueInput";

@TypeGraphQL.InputType("UsersCreateNestedOneWithoutRatingsInput", {})
export class UsersCreateNestedOneWithoutRatingsInput {
  @TypeGraphQL.Field((_type) => UsersCreateWithoutRatingsInput, {
    nullable: true,
  })
  create?: UsersCreateWithoutRatingsInput | undefined;

  @TypeGraphQL.Field((_type) => UsersCreateOrConnectWithoutRatingsInput, {
    nullable: true,
  })
  connectOrCreate?: UsersCreateOrConnectWithoutRatingsInput | undefined;

  @TypeGraphQL.Field((_type) => UsersWhereUniqueInput, {
    nullable: true,
  })
  connect?: UsersWhereUniqueInput | undefined;
}
