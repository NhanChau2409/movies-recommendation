import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateMovieGenresArgs } from "./args/AggregateMovieGenresArgs";
import { CreateManyMovieGenresArgs } from "./args/CreateManyMovieGenresArgs";
import { CreateOneMovieGenresArgs } from "./args/CreateOneMovieGenresArgs";
import { DeleteManyMovieGenresArgs } from "./args/DeleteManyMovieGenresArgs";
import { DeleteOneMovieGenresArgs } from "./args/DeleteOneMovieGenresArgs";
import { FindFirstMovieGenresArgs } from "./args/FindFirstMovieGenresArgs";
import { FindFirstMovieGenresOrThrowArgs } from "./args/FindFirstMovieGenresOrThrowArgs";
import { FindManyMovieGenresArgs } from "./args/FindManyMovieGenresArgs";
import { FindUniqueMovieGenresArgs } from "./args/FindUniqueMovieGenresArgs";
import { FindUniqueMovieGenresOrThrowArgs } from "./args/FindUniqueMovieGenresOrThrowArgs";
import { GroupByMovieGenresArgs } from "./args/GroupByMovieGenresArgs";
import { UpdateManyMovieGenresArgs } from "./args/UpdateManyMovieGenresArgs";
import { UpdateOneMovieGenresArgs } from "./args/UpdateOneMovieGenresArgs";
import { UpsertOneMovieGenresArgs } from "./args/UpsertOneMovieGenresArgs";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";
import { MovieGenres } from "../../../models/MovieGenres";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateMovieGenres } from "../../outputs/AggregateMovieGenres";
import { MovieGenresGroupBy } from "../../outputs/MovieGenresGroupBy";

@TypeGraphQL.Resolver((_of) => MovieGenres)
export class MovieGenresCrudResolver {
  @TypeGraphQL.Query((_returns) => AggregateMovieGenres, {
    nullable: false,
  })
  async aggregateMovieGenres(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateMovieGenresArgs,
  ): Promise<AggregateMovieGenres> {
    return getPrismaFromContext(ctx).movieGenres.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async createManyMovieGenres(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyMovieGenresArgs,
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieGenres.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

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

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async deleteManyMovieGenres(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyMovieGenresArgs,
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieGenres.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => MovieGenres, {
    nullable: true,
  })
  async deleteOneMovieGenres(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteOneMovieGenresArgs,
  ): Promise<MovieGenres | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieGenres.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => MovieGenres, {
    nullable: true,
  })
  async findFirstMovieGenres(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstMovieGenresArgs,
  ): Promise<MovieGenres | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieGenres.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => MovieGenres, {
    nullable: true,
  })
  async findFirstMovieGenresOrThrow(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstMovieGenresOrThrowArgs,
  ): Promise<MovieGenres | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieGenres.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => [MovieGenres], {
    nullable: false,
  })
  async findManyMovieGenres(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyMovieGenresArgs,
  ): Promise<MovieGenres[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieGenres.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => MovieGenres, {
    nullable: true,
  })
  async findUniqueMovieGenres(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueMovieGenresArgs,
  ): Promise<MovieGenres | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieGenres.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => MovieGenres, {
    nullable: true,
  })
  async findUniqueMovieGenresOrThrow(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueMovieGenresOrThrowArgs,
  ): Promise<MovieGenres | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieGenres.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => [MovieGenresGroupBy], {
    nullable: false,
  })
  async groupByMovieGenres(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: GroupByMovieGenresArgs,
  ): Promise<MovieGenresGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } =
      transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieGenres.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(
          ([_, v]) => v != null,
        ),
      ),
    });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async updateManyMovieGenres(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyMovieGenresArgs,
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieGenres.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => MovieGenres, {
    nullable: true,
  })
  async updateOneMovieGenres(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateOneMovieGenresArgs,
  ): Promise<MovieGenres | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieGenres.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => MovieGenres, {
    nullable: false,
  })
  async upsertOneMovieGenres(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertOneMovieGenresArgs,
  ): Promise<MovieGenres> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieGenres.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
