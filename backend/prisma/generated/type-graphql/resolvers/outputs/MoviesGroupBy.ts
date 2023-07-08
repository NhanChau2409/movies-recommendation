import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoviesAvgAggregate } from "../outputs/MoviesAvgAggregate";
import { MoviesCountAggregate } from "../outputs/MoviesCountAggregate";
import { MoviesMaxAggregate } from "../outputs/MoviesMaxAggregate";
import { MoviesMinAggregate } from "../outputs/MoviesMinAggregate";
import { MoviesSumAggregate } from "../outputs/MoviesSumAggregate";

@TypeGraphQL.ObjectType("MoviesGroupBy", {})
export class MoviesGroupBy {
  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: false,
  })
  id!: number;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  title!: string | null;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: true,
  })
  release_date!: Date | null;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  runtime!: number | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  overview!: string | null;

  @TypeGraphQL.Field((_type) => DecimalJSScalar, {
    nullable: true,
  })
  popularity!: Prisma.Decimal | null;

  @TypeGraphQL.Field((_type) => DecimalJSScalar, {
    nullable: true,
  })
  vote_average!: Prisma.Decimal | null;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  vote_count!: number | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  poster_path!: string | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  backdrop_path!: string | null;

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
