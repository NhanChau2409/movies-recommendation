import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { MovieGenresUpdateManyWithoutMoviesNestedInput } from "../inputs/MovieGenresUpdateManyWithoutMoviesNestedInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableDecimalFieldUpdateOperationsInput } from "../inputs/NullableDecimalFieldUpdateOperationsInput";
import { NullableIntFieldUpdateOperationsInput } from "../inputs/NullableIntFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("MoviesUpdateWithoutRatingsInput", {})
export class MoviesUpdateWithoutRatingsInput {
  @TypeGraphQL.Field((_type) => IntFieldUpdateOperationsInput, {
    nullable: true,
  })
  id?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => NullableStringFieldUpdateOperationsInput, {
    nullable: true,
  })
  title?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true,
  })
  release_date?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => NullableIntFieldUpdateOperationsInput, {
    nullable: true,
  })
  runtime?: NullableIntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => NullableStringFieldUpdateOperationsInput, {
    nullable: true,
  })
  overview?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => NullableDecimalFieldUpdateOperationsInput, {
    nullable: true,
  })
  popularity?: NullableDecimalFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => NullableDecimalFieldUpdateOperationsInput, {
    nullable: true,
  })
  vote_average?: NullableDecimalFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => NullableIntFieldUpdateOperationsInput, {
    nullable: true,
  })
  vote_count?: NullableIntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => NullableStringFieldUpdateOperationsInput, {
    nullable: true,
  })
  poster_path?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => NullableStringFieldUpdateOperationsInput, {
    nullable: true,
  })
  backdrop_path?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => MovieGenresUpdateManyWithoutMoviesNestedInput, {
    nullable: true,
  })
  MovieGenres?: MovieGenresUpdateManyWithoutMoviesNestedInput | undefined;
}
