import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Genres } from "../../../models/Genres";
import { MovieGenres } from "../../../models/MovieGenres";
import { GenresMovieGenresArgs } from "./args/GenresMovieGenresArgs";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => Genres)
export class GenresRelationsResolver {
  @TypeGraphQL.FieldResolver((_type) => [MovieGenres], {
    nullable: false,
  })
  async MovieGenres(
    @TypeGraphQL.Root() genres: Genres,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: GenresMovieGenresArgs,
  ): Promise<MovieGenres[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx)
      .genres.findUniqueOrThrow({
        where: {
          id: genres.id,
        },
      })
      .MovieGenres({
        ...args,
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      });
  }
}
