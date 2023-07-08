import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RatingsWhereUniqueInput } from "../../../inputs/RatingsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueRatingsOrThrowArgs {
  @TypeGraphQL.Field((_type) => RatingsWhereUniqueInput, {
    nullable: false,
  })
  where!: RatingsWhereUniqueInput;
}
