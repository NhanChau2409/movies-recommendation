import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Genres } from "../../../models/Genres";
import { Movie_genres } from "../../../models/Movie_genres";
import { GenresMovie_genresArgs } from "./args/GenresMovie_genresArgs";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => Genres)
export class GenresRelationsResolver {
  @TypeGraphQL.FieldResolver((_type) => [Movie_genres], {
    nullable: false,
  })
  async movie_genres(
    @TypeGraphQL.Root() genres: Genres,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: GenresMovie_genresArgs,
  ): Promise<Movie_genres[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx)
      .genres.findUniqueOrThrow({
        where: {
          id: genres.id,
        },
      })
      .movie_genres({
        ...args,
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      });
  }
}
