import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Movie_genresUpdateManyWithoutGenresNestedInput } from "../inputs/Movie_genresUpdateManyWithoutGenresNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("GenresUpdateInput", {})
export class GenresUpdateInput {
  @TypeGraphQL.Field((_type) => StringFieldUpdateOperationsInput, {
    nullable: true,
  })
  genre?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(
    (_type) => Movie_genresUpdateManyWithoutGenresNestedInput,
    {
      nullable: true,
    },
  )
  movie_genres?: Movie_genresUpdateManyWithoutGenresNestedInput | undefined;
}
