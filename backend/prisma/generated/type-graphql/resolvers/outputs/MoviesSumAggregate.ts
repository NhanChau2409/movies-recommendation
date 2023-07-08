import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("MoviesSumAggregate", {})
export class MoviesSumAggregate {
  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  id!: number | null;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
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

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  vote_count!: number | null;
}
