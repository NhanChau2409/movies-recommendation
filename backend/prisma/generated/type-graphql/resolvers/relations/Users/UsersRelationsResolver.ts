import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Ratings } from "../../../models/Ratings";
import { Users } from "../../../models/Users";
import { UsersRatingsArgs } from "./args/UsersRatingsArgs";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => Users)
export class UsersRelationsResolver {
  @TypeGraphQL.FieldResolver((_type) => [Ratings], {
    nullable: false,
  })
  async Ratings(
    @TypeGraphQL.Root() users: Users,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UsersRatingsArgs,
  ): Promise<Ratings[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx)
      .users.findUniqueOrThrow({
        where: {
          id: users.id,
        },
      })
      .Ratings({
        ...args,
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      });
  }
}
