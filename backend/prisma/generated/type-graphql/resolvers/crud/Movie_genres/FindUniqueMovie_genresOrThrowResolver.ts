import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueMovie_genresOrThrowArgs } from "./args/FindUniqueMovie_genresOrThrowArgs";
import { Movie_genres } from "../../../models/Movie_genres";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => Movie_genres)
export class FindUniqueMovie_genresOrThrowResolver {
  @TypeGraphQL.Query((_returns) => Movie_genres, {
    nullable: true,
  })
  async findUniqueMovie_genresOrThrow(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueMovie_genresOrThrowArgs,
  ): Promise<Movie_genres | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movie_genres.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
