import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateMoviesArgs } from "./args/AggregateMoviesArgs";
import { Movies } from "../../../models/Movies";
import { AggregateMovies } from "../../outputs/AggregateMovies";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => Movies)
export class AggregateMoviesResolver {
  @TypeGraphQL.Query((_returns) => AggregateMovies, {
    nullable: false,
  })
  async aggregateMovies(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateMoviesArgs,
  ): Promise<AggregateMovies> {
    return getPrismaFromContext(ctx).movies.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
