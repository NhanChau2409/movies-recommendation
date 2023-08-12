import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoviesCountMovie_genresArgs } from "./args/MoviesCountMovie_genresArgs";
import { MoviesCountRatingsArgs } from "./args/MoviesCountRatingsArgs";

@TypeGraphQL.ObjectType("MoviesCount", {})
export class MoviesCount {
  movie_genres!: number;
  ratings!: number;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    name: "movie_genres",
    nullable: false,
  })
  getMovie_genres(
    @TypeGraphQL.Root() root: MoviesCount,
    @TypeGraphQL.Args() args: MoviesCountMovie_genresArgs,
  ): number {
    return root.movie_genres;
  }

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    name: "ratings",
    nullable: false,
  })
  getRatings(
    @TypeGraphQL.Root() root: MoviesCount,
    @TypeGraphQL.Args() args: MoviesCountRatingsArgs,
  ): number {
    return root.ratings;
  }
}
