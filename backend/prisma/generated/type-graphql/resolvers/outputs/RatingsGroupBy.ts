import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RatingsAvgAggregate } from "../outputs/RatingsAvgAggregate";
import { RatingsCountAggregate } from "../outputs/RatingsCountAggregate";
import { RatingsMaxAggregate } from "../outputs/RatingsMaxAggregate";
import { RatingsMinAggregate } from "../outputs/RatingsMinAggregate";
import { RatingsSumAggregate } from "../outputs/RatingsSumAggregate";

@TypeGraphQL.ObjectType("RatingsGroupBy", {})
export class RatingsGroupBy {
  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: false,
  })
  user_id!: number;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: false,
  })
  movie_id!: number;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Float, {
    nullable: false,
  })
  rating!: number;

  @TypeGraphQL.Field((_type) => RatingsCountAggregate, {
    nullable: true,
  })
  _count!: RatingsCountAggregate | null;

  @TypeGraphQL.Field((_type) => RatingsAvgAggregate, {
    nullable: true,
  })
  _avg!: RatingsAvgAggregate | null;

  @TypeGraphQL.Field((_type) => RatingsSumAggregate, {
    nullable: true,
  })
  _sum!: RatingsSumAggregate | null;

  @TypeGraphQL.Field((_type) => RatingsMinAggregate, {
    nullable: true,
  })
  _min!: RatingsMinAggregate | null;

  @TypeGraphQL.Field((_type) => RatingsMaxAggregate, {
    nullable: true,
  })
  _max!: RatingsMaxAggregate | null;
}
