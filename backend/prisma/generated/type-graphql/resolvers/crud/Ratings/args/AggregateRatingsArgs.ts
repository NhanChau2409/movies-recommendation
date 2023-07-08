import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RatingsOrderByWithRelationInput } from "../../../inputs/RatingsOrderByWithRelationInput";
import { RatingsWhereInput } from "../../../inputs/RatingsWhereInput";
import { RatingsWhereUniqueInput } from "../../../inputs/RatingsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateRatingsArgs {
  @TypeGraphQL.Field((_type) => RatingsWhereInput, {
    nullable: true,
  })
  where?: RatingsWhereInput | undefined;

  @TypeGraphQL.Field((_type) => [RatingsOrderByWithRelationInput], {
    nullable: true,
  })
  orderBy?: RatingsOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field((_type) => RatingsWhereUniqueInput, {
    nullable: true,
  })
  cursor?: RatingsWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;
}
