import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneMovieGenresArgs } from "./args/UpsertOneMovieGenresArgs";
import { MovieGenres } from "../../../models/MovieGenres";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => MovieGenres)
export class UpsertOneMovieGenresResolver {
  @TypeGraphQL.Mutation((_returns) => MovieGenres, {
    nullable: false,
  })
  async upsertOneMovieGenres(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertOneMovieGenresArgs,
  ): Promise<MovieGenres> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieGenres.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
