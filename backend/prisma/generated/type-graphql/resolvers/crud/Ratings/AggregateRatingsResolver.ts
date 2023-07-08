import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateRatingsArgs } from "./args/AggregateRatingsArgs";
import { Ratings } from "../../../models/Ratings";
import { AggregateRatings } from "../../outputs/AggregateRatings";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => Ratings)
export class AggregateRatingsResolver {
  @TypeGraphQL.Query((_returns) => AggregateRatings, {
    nullable: false,
  })
  async aggregateRatings(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateRatingsArgs,
  ): Promise<AggregateRatings> {
    return getPrismaFromContext(ctx).ratings.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
