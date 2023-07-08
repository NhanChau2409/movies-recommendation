import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateOneMovieGenresArgs } from "./args/CreateOneMovieGenresArgs";
import { MovieGenres } from "../../../models/MovieGenres";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => MovieGenres)
export class CreateOneMovieGenresResolver {
  @TypeGraphQL.Mutation((_returns) => MovieGenres, {
    nullable: false,
  })
  async createOneMovieGenres(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateOneMovieGenresArgs,
  ): Promise<MovieGenres> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieGenres.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
