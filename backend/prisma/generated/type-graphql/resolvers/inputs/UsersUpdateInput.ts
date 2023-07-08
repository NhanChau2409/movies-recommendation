import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { RatingsUpdateManyWithoutUsersNestedInput } from "../inputs/RatingsUpdateManyWithoutUsersNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("UsersUpdateInput", {})
export class UsersUpdateInput {
  @TypeGraphQL.Field((_type) => IntFieldUpdateOperationsInput, {
    nullable: true,
  })
  id?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => StringFieldUpdateOperationsInput, {
    nullable: true,
  })
  username?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => StringFieldUpdateOperationsInput, {
    nullable: true,
  })
  password?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => RatingsUpdateManyWithoutUsersNestedInput, {
    nullable: true,
  })
  Ratings?: RatingsUpdateManyWithoutUsersNestedInput | undefined;
}
