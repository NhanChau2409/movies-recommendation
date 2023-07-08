import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoviesCreateWithoutRatingsInput } from "../inputs/MoviesCreateWithoutRatingsInput";
import { MoviesWhereUniqueInput } from "../inputs/MoviesWhereUniqueInput";

@TypeGraphQL.InputType("MoviesCreateOrConnectWithoutRatingsInput", {})
export class MoviesCreateOrConnectWithoutRatingsInput {
  @TypeGraphQL.Field((_type) => MoviesWhereUniqueInput, {
    nullable: false,
  })
  where!: MoviesWhereUniqueInput;

  @TypeGraphQL.Field((_type) => MoviesCreateWithoutRatingsInput, {
    nullable: false,
  })
  create!: MoviesCreateWithoutRatingsInput;
}
