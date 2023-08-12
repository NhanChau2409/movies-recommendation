import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("GenresCreateWithoutMovie_genresInput", {})
export class GenresCreateWithoutMovie_genresInput {
  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  genre!: string;
}
