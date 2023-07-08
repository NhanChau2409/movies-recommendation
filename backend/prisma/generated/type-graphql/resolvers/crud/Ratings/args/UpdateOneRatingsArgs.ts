import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RatingsUpdateInput } from "../../../inputs/RatingsUpdateInput";
import { RatingsWhereUniqueInput } from "../../../inputs/RatingsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneRatingsArgs {
  @TypeGraphQL.Field((_type) => RatingsUpdateInput, {
    nullable: false,
  })
  data!: RatingsUpdateInput;

  @TypeGraphQL.Field((_type) => RatingsWhereUniqueInput, {
    nullable: false,
  })
  where!: RatingsWhereUniqueInput;
}
