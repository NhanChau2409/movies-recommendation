import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoviesCreateWithoutMovie_genresInput } from "../inputs/MoviesCreateWithoutMovie_genresInput";
import { MoviesUpdateWithoutMovie_genresInput } from "../inputs/MoviesUpdateWithoutMovie_genresInput";

@TypeGraphQL.InputType("MoviesUpsertWithoutMovie_genresInput", {})
export class MoviesUpsertWithoutMovie_genresInput {
  @TypeGraphQL.Field((_type) => MoviesUpdateWithoutMovie_genresInput, {
    nullable: false,
  })
  update!: MoviesUpdateWithoutMovie_genresInput;

  @TypeGraphQL.Field((_type) => MoviesCreateWithoutMovie_genresInput, {
    nullable: false,
  })
  create!: MoviesCreateWithoutMovie_genresInput;
}
