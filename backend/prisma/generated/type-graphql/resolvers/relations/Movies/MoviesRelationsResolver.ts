import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { MovieGenres } from "../../../models/MovieGenres";
import { Movies } from "../../../models/Movies";
import { Ratings } from "../../../models/Ratings";
import { MoviesMovieGenresArgs } from "./args/MoviesMovieGenresArgs";
import { MoviesRatingsArgs } from "./args/MoviesRatingsArgs";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => Movies)
export class MoviesRelationsResolver {
  @TypeGraphQL.FieldResolver((_type) => [MovieGenres], {
    nullable: false,
  })
  async MovieGenres(
    @TypeGraphQL.Root() movies: Movies,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: MoviesMovieGenresArgs,
  ): Promise<MovieGenres[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx)
      .movies.findUniqueOrThrow({
        where: {
          id: movies.id,
        },
      })
      .MovieGenres({
        ...args,
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      });
  }

  @TypeGraphQL.FieldResolver((_type) => [Ratings], {
    nullable: false,
  })
  async Ratings(
    @TypeGraphQL.Root() movies: Movies,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: MoviesRatingsArgs,
  ): Promise<Ratings[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx)
      .movies.findUniqueOrThrow({
        where: {
          id: movies.id,
        },
      })
      .Ratings({
        ...args,
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      });
  }
}
