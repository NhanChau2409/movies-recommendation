import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateGenresArgs } from "./args/AggregateGenresArgs";
import { Genres } from "../../../models/Genres";
import { AggregateGenres } from "../../outputs/AggregateGenres";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => Genres)
export class AggregateGenresResolver {
  @TypeGraphQL.Query((_returns) => AggregateGenres, {
    nullable: false,
  })
  async aggregateGenres(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateGenresArgs,
  ): Promise<AggregateGenres> {
    return getPrismaFromContext(ctx).genres.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
