import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Movie_genresAvgAggregate } from "../outputs/Movie_genresAvgAggregate";
import { Movie_genresCountAggregate } from "../outputs/Movie_genresCountAggregate";
import { Movie_genresMaxAggregate } from "../outputs/Movie_genresMaxAggregate";
import { Movie_genresMinAggregate } from "../outputs/Movie_genresMinAggregate";
import { Movie_genresSumAggregate } from "../outputs/Movie_genresSumAggregate";

@TypeGraphQL.ObjectType("Movie_genresGroupBy", {})
export class Movie_genresGroupBy {
  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: false,
  })
  movie_id!: number;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: false,
  })
  genre_id!: number;

  @TypeGraphQL.Field((_type) => Movie_genresCountAggregate, {
    nullable: true,
  })
  _count!: Movie_genresCountAggregate | null;

  @TypeGraphQL.Field((_type) => Movie_genresAvgAggregate, {
    nullable: true,
  })
  _avg!: Movie_genresAvgAggregate | null;

  @TypeGraphQL.Field((_type) => Movie_genresSumAggregate, {
    nullable: true,
  })
  _sum!: Movie_genresSumAggregate | null;

  @TypeGraphQL.Field((_type) => Movie_genresMinAggregate, {
    nullable: true,
  })
  _min!: Movie_genresMinAggregate | null;

  @TypeGraphQL.Field((_type) => Movie_genresMaxAggregate, {
    nullable: true,
  })
  _max!: Movie_genresMaxAggregate | null;
}
