import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RatingsUpdateWithoutUsersInput } from "../inputs/RatingsUpdateWithoutUsersInput";
import { RatingsWhereUniqueInput } from "../inputs/RatingsWhereUniqueInput";

@TypeGraphQL.InputType("RatingsUpdateWithWhereUniqueWithoutUsersInput", {})
export class RatingsUpdateWithWhereUniqueWithoutUsersInput {
  @TypeGraphQL.Field((_type) => RatingsWhereUniqueInput, {
    nullable: false,
  })
  where!: RatingsWhereUniqueInput;

  @TypeGraphQL.Field((_type) => RatingsUpdateWithoutUsersInput, {
    nullable: false,
  })
  data!: RatingsUpdateWithoutUsersInput;
}
