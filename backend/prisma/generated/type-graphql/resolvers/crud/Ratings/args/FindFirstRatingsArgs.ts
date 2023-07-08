import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RatingsOrderByWithRelationInput } from "../../../inputs/RatingsOrderByWithRelationInput";
import { RatingsWhereInput } from "../../../inputs/RatingsWhereInput";
import { RatingsWhereUniqueInput } from "../../../inputs/RatingsWhereUniqueInput";
import { RatingsScalarFieldEnum } from "../../../../enums/RatingsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstRatingsArgs {
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

  @TypeGraphQL.Field((_type) => [RatingsScalarFieldEnum], {
    nullable: true,
  })
  distinct?: Array<"user_id" | "movie_id" | "rating"> | undefined;
}
