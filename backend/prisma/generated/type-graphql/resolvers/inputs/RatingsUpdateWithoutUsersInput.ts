import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FloatFieldUpdateOperationsInput } from "../inputs/FloatFieldUpdateOperationsInput";
import { MoviesUpdateOneRequiredWithoutRatingsNestedInput } from "../inputs/MoviesUpdateOneRequiredWithoutRatingsNestedInput";

@TypeGraphQL.InputType("RatingsUpdateWithoutUsersInput", {})
export class RatingsUpdateWithoutUsersInput {
  @TypeGraphQL.Field((_type) => FloatFieldUpdateOperationsInput, {
    nullable: true,
  })
  rating?: FloatFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(
    (_type) => MoviesUpdateOneRequiredWithoutRatingsNestedInput,
    {
      nullable: true,
    },
  )
  movies?: MoviesUpdateOneRequiredWithoutRatingsNestedInput | undefined;
}
