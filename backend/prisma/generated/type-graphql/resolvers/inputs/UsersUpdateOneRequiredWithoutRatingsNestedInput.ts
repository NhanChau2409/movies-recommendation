import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UsersCreateOrConnectWithoutRatingsInput } from "../inputs/UsersCreateOrConnectWithoutRatingsInput";
import { UsersCreateWithoutRatingsInput } from "../inputs/UsersCreateWithoutRatingsInput";
import { UsersUpdateWithoutRatingsInput } from "../inputs/UsersUpdateWithoutRatingsInput";
import { UsersUpsertWithoutRatingsInput } from "../inputs/UsersUpsertWithoutRatingsInput";
import { UsersWhereUniqueInput } from "../inputs/UsersWhereUniqueInput";

@TypeGraphQL.InputType("UsersUpdateOneRequiredWithoutRatingsNestedInput", {})
export class UsersUpdateOneRequiredWithoutRatingsNestedInput {
  @TypeGraphQL.Field((_type) => UsersCreateWithoutRatingsInput, {
    nullable: true,
  })
  create?: UsersCreateWithoutRatingsInput | undefined;

  @TypeGraphQL.Field((_type) => UsersCreateOrConnectWithoutRatingsInput, {
    nullable: true,
  })
  connectOrCreate?: UsersCreateOrConnectWithoutRatingsInput | undefined;

  @TypeGraphQL.Field((_type) => UsersUpsertWithoutRatingsInput, {
    nullable: true,
  })
  upsert?: UsersUpsertWithoutRatingsInput | undefined;

  @TypeGraphQL.Field((_type) => UsersWhereUniqueInput, {
    nullable: true,
  })
  connect?: UsersWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => UsersUpdateWithoutRatingsInput, {
    nullable: true,
  })
  update?: UsersUpdateWithoutRatingsInput | undefined;
}
