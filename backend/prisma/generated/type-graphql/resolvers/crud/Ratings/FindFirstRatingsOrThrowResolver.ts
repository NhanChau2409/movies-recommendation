import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstRatingsOrThrowArgs } from "./args/FindFirstRatingsOrThrowArgs";
import { Ratings } from "../../../models/Ratings";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => Ratings)
export class FindFirstRatingsOrThrowResolver {
  @TypeGraphQL.Query((_returns) => Ratings, {
    nullable: true,
  })
  async findFirstRatingsOrThrow(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstRatingsOrThrowArgs,
  ): Promise<Ratings | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).ratings.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
