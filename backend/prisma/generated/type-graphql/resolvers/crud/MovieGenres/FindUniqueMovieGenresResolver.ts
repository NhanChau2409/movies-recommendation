import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueMovieGenresArgs } from "./args/FindUniqueMovieGenresArgs";
import { MovieGenres } from "../../../models/MovieGenres";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => MovieGenres)
export class FindUniqueMovieGenresResolver {
  @TypeGraphQL.Query((_returns) => MovieGenres, {
    nullable: true,
  })
  async findUniqueMovieGenres(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueMovieGenresArgs,
  ): Promise<MovieGenres | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieGenres.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
