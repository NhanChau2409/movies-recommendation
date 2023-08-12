import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneMovie_genresArgs } from "./args/UpdateOneMovie_genresArgs";
import { Movie_genres } from "../../../models/Movie_genres";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => Movie_genres)
export class UpdateOneMovie_genresResolver {
  @TypeGraphQL.Mutation((_returns) => Movie_genres, {
    nullable: true,
  })
  async updateOneMovie_genres(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateOneMovie_genresArgs,
  ): Promise<Movie_genres | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movie_genres.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
