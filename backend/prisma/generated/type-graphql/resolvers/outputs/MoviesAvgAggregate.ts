import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("MoviesAvgAggregate", {})
export class MoviesAvgAggregate {
  @TypeGraphQL.Field((_type) => TypeGraphQL.Float, {
    nullable: true,
  })
  id!: number | null;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Float, {
    nullable: true,
  })
  runtime!: number | null;

  @TypeGraphQL.Field((_type) => DecimalJSScalar, {
    nullable: true,
  })
  popularity!: Prisma.Decimal | null;

  @TypeGraphQL.Field((_type) => DecimalJSScalar, {
    nullable: true,
  })
  vote_average!: Prisma.Decimal | null;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Float, {
    nullable: true,
  })
  vote_count!: number | null;
}
