import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateOneMovie_genresArgs } from "./args/CreateOneMovie_genresArgs";
import { Movie_genres } from "../../../models/Movie_genres";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => Movie_genres)
export class CreateOneMovie_genresResolver {
  @TypeGraphQL.Mutation((_returns) => Movie_genres, {
    nullable: false,
  })
  async createOneMovie_genres(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateOneMovie_genresArgs,
  ): Promise<Movie_genres> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movie_genres.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
