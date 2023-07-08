import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateMovieGenresArgs } from "./args/AggregateMovieGenresArgs";
import { MovieGenres } from "../../../models/MovieGenres";
import { AggregateMovieGenres } from "../../outputs/AggregateMovieGenres";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => MovieGenres)
export class AggregateMovieGenresResolver {
  @TypeGraphQL.Query((_returns) => AggregateMovieGenres, {
    nullable: false,
  })
  async aggregateMovieGenres(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateMovieGenresArgs,
  ): Promise<AggregateMovieGenres> {
    return getPrismaFromContext(ctx).movieGenres.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
