import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstGenresOrThrowArgs } from "./args/FindFirstGenresOrThrowArgs";
import { Genres } from "../../../models/Genres";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => Genres)
export class FindFirstGenresOrThrowResolver {
  @TypeGraphQL.Query((_returns) => Genres, {
    nullable: true,
  })
  async findFirstGenresOrThrow(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstGenresOrThrowArgs,
  ): Promise<Genres | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).genres.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
