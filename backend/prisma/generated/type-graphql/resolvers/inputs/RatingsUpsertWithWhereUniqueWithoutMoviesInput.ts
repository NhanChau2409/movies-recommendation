import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RatingsCreateWithoutMoviesInput } from "../inputs/RatingsCreateWithoutMoviesInput";
import { RatingsUpdateWithoutMoviesInput } from "../inputs/RatingsUpdateWithoutMoviesInput";
import { RatingsWhereUniqueInput } from "../inputs/RatingsWhereUniqueInput";

@TypeGraphQL.InputType("RatingsUpsertWithWhereUniqueWithoutMoviesInput", {})
export class RatingsUpsertWithWhereUniqueWithoutMoviesInput {
  @TypeGraphQL.Field((_type) => RatingsWhereUniqueInput, {
    nullable: false,
  })
  where!: RatingsWhereUniqueInput;

  @TypeGraphQL.Field((_type) => RatingsUpdateWithoutMoviesInput, {
    nullable: false,
  })
  update!: RatingsUpdateWithoutMoviesInput;

  @TypeGraphQL.Field((_type) => RatingsCreateWithoutMoviesInput, {
    nullable: false,
  })
  create!: RatingsCreateWithoutMoviesInput;
}
