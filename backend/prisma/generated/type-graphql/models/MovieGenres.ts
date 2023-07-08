import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Genres } from "../models/Genres";
import { Movies } from "../models/Movies";

@TypeGraphQL.ObjectType("MovieGenres", {})
export class MovieGenres {
  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: false,
  })
  movie_id!: number;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: false,
  })
  genre_id!: number;

  Genres?: Genres;

  Movies?: Movies;
}
