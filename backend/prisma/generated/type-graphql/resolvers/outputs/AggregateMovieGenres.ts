import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieGenresAvgAggregate } from "../outputs/MovieGenresAvgAggregate";
import { MovieGenresCountAggregate } from "../outputs/MovieGenresCountAggregate";
import { MovieGenresMaxAggregate } from "../outputs/MovieGenresMaxAggregate";
import { MovieGenresMinAggregate } from "../outputs/MovieGenresMinAggregate";
import { MovieGenresSumAggregate } from "../outputs/MovieGenresSumAggregate";

@TypeGraphQL.ObjectType("AggregateMovieGenres", {})
export class AggregateMovieGenres {
  @TypeGraphQL.Field((_type) => MovieGenresCountAggregate, {
    nullable: true,
  })
  _count!: MovieGenresCountAggregate | null;

  @TypeGraphQL.Field((_type) => MovieGenresAvgAggregate, {
    nullable: true,
  })
  _avg!: MovieGenresAvgAggregate | null;

  @TypeGraphQL.Field((_type) => MovieGenresSumAggregate, {
    nullable: true,
  })
  _sum!: MovieGenresSumAggregate | null;

  @TypeGraphQL.Field((_type) => MovieGenresMinAggregate, {
    nullable: true,
  })
  _min!: MovieGenresMinAggregate | null;

  @TypeGraphQL.Field((_type) => MovieGenresMaxAggregate, {
    nullable: true,
  })
  _max!: MovieGenresMaxAggregate | null;
}
