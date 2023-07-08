import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstMoviesOrThrowArgs } from "./args/FindFirstMoviesOrThrowArgs";
import { Movies } from "../../../models/Movies";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => Movies)
export class FindFirstMoviesOrThrowResolver {
  @TypeGraphQL.Query((_returns) => Movies, {
    nullable: true,
  })
  async findFirstMoviesOrThrow(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstMoviesOrThrowArgs,
  ): Promise<Movies | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movies.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
