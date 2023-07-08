import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RatingsWhereInput } from "../../../inputs/RatingsWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyRatingsArgs {
  @TypeGraphQL.Field((_type) => RatingsWhereInput, {
    nullable: true,
  })
  where?: RatingsWhereInput | undefined;
}
