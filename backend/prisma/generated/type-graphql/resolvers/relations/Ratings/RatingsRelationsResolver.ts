import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Movies } from "../../../models/Movies";
import { Ratings } from "../../../models/Ratings";
import { Users } from "../../../models/Users";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => Ratings)
export class RatingsRelationsResolver {
  @TypeGraphQL.FieldResolver((_type) => Movies, {
    nullable: false,
  })
  async Movies(
    @TypeGraphQL.Root() ratings: Ratings,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
  ): Promise<Movies> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx)
      .ratings.findUniqueOrThrow({
        where: {
          user_id_movie_id: {
            user_id: ratings.user_id,
            movie_id: ratings.movie_id,
          },
        },
      })
      .Movies({
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      });
  }

  @TypeGraphQL.FieldResolver((_type) => Users, {
    nullable: false,
  })
  async Users(
    @TypeGraphQL.Root() ratings: Ratings,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
  ): Promise<Users> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx)
      .ratings.findUniqueOrThrow({
        where: {
          user_id_movie_id: {
            user_id: ratings.user_id,
            movie_id: ratings.movie_id,
          },
        },
      })
      .Users({
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      });
  }
}
