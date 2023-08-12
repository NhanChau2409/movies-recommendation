import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Genres } from "../../../models/Genres";
import { Movie_genres } from "../../../models/Movie_genres";
import { Movies } from "../../../models/Movies";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => Movie_genres)
export class Movie_genresRelationsResolver {
  @TypeGraphQL.FieldResolver((_type) => Genres, {
    nullable: false,
  })
  async genres(
    @TypeGraphQL.Root() movie_genres: Movie_genres,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
  ): Promise<Genres> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx)
      .movie_genres.findUniqueOrThrow({
        where: {
          movie_id_genre_id: {
            movie_id: movie_genres.movie_id,
            genre_id: movie_genres.genre_id,
          },
        },
      })
      .genres({
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      });
  }

  @TypeGraphQL.FieldResolver((_type) => Movies, {
    nullable: false,
  })
  async movies(
    @TypeGraphQL.Root() movie_genres: Movie_genres,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
  ): Promise<Movies> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx)
      .movie_genres.findUniqueOrThrow({
        where: {
          movie_id_genre_id: {
            movie_id: movie_genres.movie_id,
            genre_id: movie_genres.genre_id,
          },
        },
      })
      .movies({
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      });
  }
}
