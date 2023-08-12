import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenresCreateWithoutMovie_genresInput } from "../inputs/GenresCreateWithoutMovie_genresInput";
import { GenresWhereUniqueInput } from "../inputs/GenresWhereUniqueInput";

@TypeGraphQL.InputType("GenresCreateOrConnectWithoutMovie_genresInput", {})
export class GenresCreateOrConnectWithoutMovie_genresInput {
  @TypeGraphQL.Field((_type) => GenresWhereUniqueInput, {
    nullable: false,
  })
  where!: GenresWhereUniqueInput;

  @TypeGraphQL.Field((_type) => GenresCreateWithoutMovie_genresInput, {
    nullable: false,
  })
  create!: GenresCreateWithoutMovie_genresInput;
}
