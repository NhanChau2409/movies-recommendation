import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByMovie_genresArgs } from "./args/GroupByMovie_genresArgs";
import { Movie_genres } from "../../../models/Movie_genres";
import { Movie_genresGroupBy } from "../../outputs/Movie_genresGroupBy";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => Movie_genres)
export class GroupByMovie_genresResolver {
  @TypeGraphQL.Query((_returns) => [Movie_genresGroupBy], {
    nullable: false,
  })
  async groupByMovie_genres(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: GroupByMovie_genresArgs,
  ): Promise<Movie_genresGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } =
      transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movie_genres.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(
          ([_, v]) => v != null,
        ),
      ),
    });
  }
}
