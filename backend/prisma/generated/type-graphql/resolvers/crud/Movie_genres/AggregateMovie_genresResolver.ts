import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateMovie_genresArgs } from "./args/AggregateMovie_genresArgs";
import { Movie_genres } from "../../../models/Movie_genres";
import { AggregateMovie_genres } from "../../outputs/AggregateMovie_genres";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => Movie_genres)
export class AggregateMovie_genresResolver {
  @TypeGraphQL.Query((_returns) => AggregateMovie_genres, {
    nullable: false,
  })
  async aggregateMovie_genres(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateMovie_genresArgs,
  ): Promise<AggregateMovie_genres> {
    return getPrismaFromContext(ctx).movie_genres.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
