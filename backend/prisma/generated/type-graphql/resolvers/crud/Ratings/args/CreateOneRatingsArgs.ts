import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RatingsCreateInput } from "../../../inputs/RatingsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneRatingsArgs {
  @TypeGraphQL.Field((_type) => RatingsCreateInput, {
    nullable: false,
  })
  data!: RatingsCreateInput;
}
