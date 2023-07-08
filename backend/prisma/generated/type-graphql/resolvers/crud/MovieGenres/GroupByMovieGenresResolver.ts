import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByMovieGenresArgs } from "./args/GroupByMovieGenresArgs";
import { MovieGenres } from "../../../models/MovieGenres";
import { MovieGenresGroupBy } from "../../outputs/MovieGenresGroupBy";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => MovieGenres)
export class GroupByMovieGenresResolver {
  @TypeGraphQL.Query((_returns) => [MovieGenresGroupBy], {
    nullable: false,
  })
  async groupByMovieGenres(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: GroupByMovieGenresArgs,
  ): Promise<MovieGenresGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } =
      transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieGenres.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(
          ([_, v]) => v != null,
        ),
      ),
    });
  }
}
