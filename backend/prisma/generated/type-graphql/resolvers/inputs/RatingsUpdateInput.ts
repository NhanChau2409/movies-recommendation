import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FloatFieldUpdateOperationsInput } from "../inputs/FloatFieldUpdateOperationsInput";
import { MoviesUpdateOneRequiredWithoutRatingsNestedInput } from "../inputs/MoviesUpdateOneRequiredWithoutRatingsNestedInput";
import { UsersUpdateOneRequiredWithoutRatingsNestedInput } from "../inputs/UsersUpdateOneRequiredWithoutRatingsNestedInput";

@TypeGraphQL.InputType("RatingsUpdateInput", {})
export class RatingsUpdateInput {
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
  Movies?: MoviesUpdateOneRequiredWithoutRatingsNestedInput | undefined;

  @TypeGraphQL.Field(
    (_type) => UsersUpdateOneRequiredWithoutRatingsNestedInput,
    {
      nullable: true,
    },
  )
  Users?: UsersUpdateOneRequiredWithoutRatingsNestedInput | undefined;
}
