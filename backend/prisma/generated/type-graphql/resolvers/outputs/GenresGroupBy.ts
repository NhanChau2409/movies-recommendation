import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenresAvgAggregate } from "../outputs/GenresAvgAggregate";
import { GenresCountAggregate } from "../outputs/GenresCountAggregate";
import { GenresMaxAggregate } from "../outputs/GenresMaxAggregate";
import { GenresMinAggregate } from "../outputs/GenresMinAggregate";
import { GenresSumAggregate } from "../outputs/GenresSumAggregate";

@TypeGraphQL.ObjectType("GenresGroupBy", {})
export class GenresGroupBy {
  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: false,
  })
  id!: number;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  name!: string;

  @TypeGraphQL.Field((_type) => GenresCountAggregate, {
    nullable: true,
  })
  _count!: GenresCountAggregate | null;

  @TypeGraphQL.Field((_type) => GenresAvgAggregate, {
    nullable: true,
  })
  _avg!: GenresAvgAggregate | null;

  @TypeGraphQL.Field((_type) => GenresSumAggregate, {
    nullable: true,
  })
  _sum!: GenresSumAggregate | null;

  @TypeGraphQL.Field((_type) => GenresMinAggregate, {
    nullable: true,
  })
  _min!: GenresMinAggregate | null;

  @TypeGraphQL.Field((_type) => GenresMaxAggregate, {
    nullable: true,
  })
  _max!: GenresMaxAggregate | null;
}
