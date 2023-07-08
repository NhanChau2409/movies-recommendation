import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { MovieGenresUpdateManyWithoutGenresNestedInput } from "../inputs/MovieGenresUpdateManyWithoutGenresNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("GenresUpdateInput", {})
export class GenresUpdateInput {
  @TypeGraphQL.Field((_type) => IntFieldUpdateOperationsInput, {
    nullable: true,
  })
  id?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => StringFieldUpdateOperationsInput, {
    nullable: true,
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => MovieGenresUpdateManyWithoutGenresNestedInput, {
    nullable: true,
  })
  MovieGenres?: MovieGenresUpdateManyWithoutGenresNestedInput | undefined;
}
