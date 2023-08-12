import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoviesCreateWithoutMovie_genresInput } from "../inputs/MoviesCreateWithoutMovie_genresInput";
import { MoviesWhereUniqueInput } from "../inputs/MoviesWhereUniqueInput";

@TypeGraphQL.InputType("MoviesCreateOrConnectWithoutMovie_genresInput", {})
export class MoviesCreateOrConnectWithoutMovie_genresInput {
  @TypeGraphQL.Field((_type) => MoviesWhereUniqueInput, {
    nullable: false,
  })
  where!: MoviesWhereUniqueInput;

  @TypeGraphQL.Field((_type) => MoviesCreateWithoutMovie_genresInput, {
    nullable: false,
  })
  create!: MoviesCreateWithoutMovie_genresInput;
}
