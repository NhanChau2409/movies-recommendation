import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RatingsUpdateManyMutationInput } from "../../../inputs/RatingsUpdateManyMutationInput";
import { RatingsWhereInput } from "../../../inputs/RatingsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyRatingsArgs {
  @TypeGraphQL.Field((_type) => RatingsUpdateManyMutationInput, {
    nullable: false,
  })
  data!: RatingsUpdateManyMutationInput;

  @TypeGraphQL.Field((_type) => RatingsWhereInput, {
    nullable: true,
  })
  where?: RatingsWhereInput | undefined;
}
