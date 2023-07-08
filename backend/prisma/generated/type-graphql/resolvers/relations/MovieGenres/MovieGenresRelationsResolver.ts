import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Genres } from "../../../models/Genres";
import { MovieGenres } from "../../../models/MovieGenres";
import { Movies } from "../../../models/Movies";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => MovieGenres)
export class MovieGenresRelationsResolver {
  @TypeGraphQL.FieldResolver((_type) => Genres, {
    nullable: false,
  })
  async Genres(
    @TypeGraphQL.Root() movieGenres: MovieGenres,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
  ): Promise<Genres> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx)
      .movieGenres.findUniqueOrThrow({
        where: {
          movie_id_genre_id: {
            movie_id: movieGenres.movie_id,
            genre_id: movieGenres.genre_id,
          },
        },
      })
      .Genres({
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      });
  }

  @TypeGraphQL.FieldResolver((_type) => Movies, {
    nullable: false,
  })
  async Movies(
    @TypeGraphQL.Root() movieGenres: MovieGenres,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
  ): Promise<Movies> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx)
      .movieGenres.findUniqueOrThrow({
        where: {
          movie_id_genre_id: {
            movie_id: movieGenres.movie_id,
            genre_id: movieGenres.genre_id,
          },
        },
      })
      .Movies({
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      });
  }
}
