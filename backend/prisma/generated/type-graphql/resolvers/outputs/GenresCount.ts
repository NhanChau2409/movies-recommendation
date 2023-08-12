import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenresCountMovie_genresArgs } from "./args/GenresCountMovie_genresArgs";

@TypeGraphQL.ObjectType("GenresCount", {})
export class GenresCount {
  movie_genres!: number;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    name: "movie_genres",
    nullable: false,
  })
  getMovie_genres(
    @TypeGraphQL.Root() root: GenresCount,
    @TypeGraphQL.Args() args: GenresCountMovie_genresArgs,
  ): number {
    return root.movie_genres;
  }
}
