import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenresCountMovieGenresArgs } from "./args/GenresCountMovieGenresArgs";

@TypeGraphQL.ObjectType("GenresCount", {})
export class GenresCount {
  MovieGenres!: number;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    name: "MovieGenres",
    nullable: false,
  })
  getMovieGenres(
    @TypeGraphQL.Root() root: GenresCount,
    @TypeGraphQL.Args() args: GenresCountMovieGenresArgs,
  ): number {
    return root.MovieGenres;
  }
}
