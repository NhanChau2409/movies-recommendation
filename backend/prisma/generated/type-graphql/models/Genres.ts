import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Movie_genres } from "../models/Movie_genres";
import { GenresCount } from "../resolvers/outputs/GenresCount";

@TypeGraphQL.ObjectType("Genres", {})
export class Genres {
  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: false,
  })
  id!: number;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  genre!: string;

  movie_genres?: Movie_genres[];

  @TypeGraphQL.Field((_type) => GenresCount, {
    nullable: true,
  })
  _count?: GenresCount | null;
}
