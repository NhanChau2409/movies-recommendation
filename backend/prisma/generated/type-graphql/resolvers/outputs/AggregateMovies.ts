import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoviesAvgAggregate } from "../outputs/MoviesAvgAggregate";
import { MoviesCountAggregate } from "../outputs/MoviesCountAggregate";
import { MoviesMaxAggregate } from "../outputs/MoviesMaxAggregate";
import { MoviesMinAggregate } from "../outputs/MoviesMinAggregate";
import { MoviesSumAggregate } from "../outputs/MoviesSumAggregate";

@TypeGraphQL.ObjectType("AggregateMovies", {})
export class AggregateMovies {
  @TypeGraphQL.Field((_type) => MoviesCountAggregate, {
    nullable: true,
  })
  _count!: MoviesCountAggregate | null;

  @TypeGraphQL.Field((_type) => MoviesAvgAggregate, {
    nullable: true,
  })
  _avg!: MoviesAvgAggregate | null;

  @TypeGraphQL.Field((_type) => MoviesSumAggregate, {
    nullable: true,
  })
  _sum!: MoviesSumAggregate | null;

  @TypeGraphQL.Field((_type) => MoviesMinAggregate, {
    nullable: true,
  })
  _min!: MoviesMinAggregate | null;

  @TypeGraphQL.Field((_type) => MoviesMaxAggregate, {
    nullable: true,
  })
  _max!: MoviesMaxAggregate | null;
}
