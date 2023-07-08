import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RatingsUpdateWithoutMoviesInput } from "../inputs/RatingsUpdateWithoutMoviesInput";
import { RatingsWhereUniqueInput } from "../inputs/RatingsWhereUniqueInput";

@TypeGraphQL.InputType("RatingsUpdateWithWhereUniqueWithoutMoviesInput", {})
export class RatingsUpdateWithWhereUniqueWithoutMoviesInput {
  @TypeGraphQL.Field((_type) => RatingsWhereUniqueInput, {
    nullable: false,
  })
  where!: RatingsWhereUniqueInput;

  @TypeGraphQL.Field((_type) => RatingsUpdateWithoutMoviesInput, {
    nullable: false,
  })
  data!: RatingsUpdateWithoutMoviesInput;
}
