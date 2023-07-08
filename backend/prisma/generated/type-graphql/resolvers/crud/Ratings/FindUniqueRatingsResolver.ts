import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueRatingsArgs } from "./args/FindUniqueRatingsArgs";
import { Ratings } from "../../../models/Ratings";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => Ratings)
export class FindUniqueRatingsResolver {
  @TypeGraphQL.Query((_returns) => Ratings, {
    nullable: true,
  })
  async findUniqueRatings(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueRatingsArgs,
  ): Promise<Ratings | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).ratings.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
