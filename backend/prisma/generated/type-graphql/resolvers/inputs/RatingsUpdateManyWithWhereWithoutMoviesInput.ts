import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RatingsScalarWhereInput } from "../inputs/RatingsScalarWhereInput";
import { RatingsUpdateManyMutationInput } from "../inputs/RatingsUpdateManyMutationInput";

@TypeGraphQL.InputType("RatingsUpdateManyWithWhereWithoutMoviesInput", {})
export class RatingsUpdateManyWithWhereWithoutMoviesInput {
  @TypeGraphQL.Field((_type) => RatingsScalarWhereInput, {
    nullable: false,
  })
  where!: RatingsScalarWhereInput;

  @TypeGraphQL.Field((_type) => RatingsUpdateManyMutationInput, {
    nullable: false,
  })
  data!: RatingsUpdateManyMutationInput;
}
