import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("MoviesMinAggregate", {})
export class MoviesMinAggregate {
  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  id!: number | null;

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
}
