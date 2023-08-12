import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Movie_genres } from "../../../models/Movie_genres";
import { Movies } from "../../../models/Movies";
import { Ratings } from "../../../models/Ratings";
import { MoviesMovie_genresArgs } from "./args/MoviesMovie_genresArgs";
import { MoviesRatingsArgs } from "./args/MoviesRatingsArgs";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => Movies)
export class MoviesRelationsResolver {
  @TypeGraphQL.FieldResolver((_type) => [Movie_genres], {
    nullable: false,
  })
  async movie_genres(
    @TypeGraphQL.Root() movies: Movies,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: MoviesMovie_genresArgs,
  ): Promise<Movie_genres[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx)
      .movies.findUniqueOrThrow({
        where: {
          id: movies.id,
        },
      })
      .movie_genres({
        ...args,
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      });
  }

  @TypeGraphQL.FieldResolver((_type) => [Ratings], {
    nullable: false,
  })
  async ratings(
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
      .ratings({
        ...args,
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      });
  }
}
