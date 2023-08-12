import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenresCreateWithoutMovie_genresInput } from "../inputs/GenresCreateWithoutMovie_genresInput";
import { GenresUpdateWithoutMovie_genresInput } from "../inputs/GenresUpdateWithoutMovie_genresInput";

@TypeGraphQL.InputType("GenresUpsertWithoutMovie_genresInput", {})
export class GenresUpsertWithoutMovie_genresInput {
  @TypeGraphQL.Field((_type) => GenresUpdateWithoutMovie_genresInput, {
    nullable: false,
  })
  update!: GenresUpdateWithoutMovie_genresInput;

  @TypeGraphQL.Field((_type) => GenresCreateWithoutMovie_genresInput, {
    nullable: false,
  })
  create!: GenresCreateWithoutMovie_genresInput;
}
