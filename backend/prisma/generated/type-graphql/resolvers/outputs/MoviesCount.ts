import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoviesCountMovieGenresArgs } from "./args/MoviesCountMovieGenresArgs";
import { MoviesCountRatingsArgs } from "./args/MoviesCountRatingsArgs";

@TypeGraphQL.ObjectType("MoviesCount", {})
export class MoviesCount {
  MovieGenres!: number;
  Ratings!: number;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    name: "MovieGenres",
    nullable: false,
  })
  getMovieGenres(
    @TypeGraphQL.Root() root: MoviesCount,
    @TypeGraphQL.Args() args: MoviesCountMovieGenresArgs,
  ): number {
    return root.MovieGenres;
  }

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    name: "Ratings",
    nullable: false,
  })
  getRatings(
    @TypeGraphQL.Root() root: MoviesCount,
    @TypeGraphQL.Args() args: MoviesCountRatingsArgs,
  ): number {
    return root.Ratings;
  }
}
