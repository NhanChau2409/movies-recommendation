import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RatingsCreateWithoutMoviesInput } from "../inputs/RatingsCreateWithoutMoviesInput";
import { RatingsWhereUniqueInput } from "../inputs/RatingsWhereUniqueInput";

@TypeGraphQL.InputType("RatingsCreateOrConnectWithoutMoviesInput", {})
export class RatingsCreateOrConnectWithoutMoviesInput {
  @TypeGraphQL.Field((_type) => RatingsWhereUniqueInput, {
    nullable: false,
  })
  where!: RatingsWhereUniqueInput;

  @TypeGraphQL.Field((_type) => RatingsCreateWithoutMoviesInput, {
    nullable: false,
  })
  create!: RatingsCreateWithoutMoviesInput;
}
