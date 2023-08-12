import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FloatFieldUpdateOperationsInput } from "../inputs/FloatFieldUpdateOperationsInput";
import { UsersUpdateOneRequiredWithoutRatingsNestedInput } from "../inputs/UsersUpdateOneRequiredWithoutRatingsNestedInput";

@TypeGraphQL.InputType("RatingsUpdateWithoutMoviesInput", {})
export class RatingsUpdateWithoutMoviesInput {
  @TypeGraphQL.Field((_type) => FloatFieldUpdateOperationsInput, {
    nullable: true,
  })
  rating?: FloatFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(
    (_type) => UsersUpdateOneRequiredWithoutRatingsNestedInput,
    {
      nullable: true,
    },
  )
  users?: UsersUpdateOneRequiredWithoutRatingsNestedInput | undefined;
}
