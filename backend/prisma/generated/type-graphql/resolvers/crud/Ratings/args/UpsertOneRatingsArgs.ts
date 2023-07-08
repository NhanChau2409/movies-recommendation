import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RatingsCreateInput } from "../../../inputs/RatingsCreateInput";
import { RatingsUpdateInput } from "../../../inputs/RatingsUpdateInput";
import { RatingsWhereUniqueInput } from "../../../inputs/RatingsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneRatingsArgs {
  @TypeGraphQL.Field((_type) => RatingsWhereUniqueInput, {
    nullable: false,
  })
  where!: RatingsWhereUniqueInput;

  @TypeGraphQL.Field((_type) => RatingsCreateInput, {
    nullable: false,
  })
  create!: RatingsCreateInput;

  @TypeGraphQL.Field((_type) => RatingsUpdateInput, {
    nullable: false,
  })
  update!: RatingsUpdateInput;
}
