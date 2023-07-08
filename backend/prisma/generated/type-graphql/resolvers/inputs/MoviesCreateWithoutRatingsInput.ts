import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieGenresCreateNestedManyWithoutMoviesInput } from "../inputs/MovieGenresCreateNestedManyWithoutMoviesInput";

@TypeGraphQL.InputType("MoviesCreateWithoutRatingsInput", {})
export class MoviesCreateWithoutRatingsInput {
  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: false,
  })
  id!: number;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  title?: string | undefined;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: true,
  })
  release_date?: Date | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  runtime?: number | undefined;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  overview?: string | undefined;

  @TypeGraphQL.Field((_type) => DecimalJSScalar, {
    nullable: true,
  })
  popularity?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field((_type) => DecimalJSScalar, {
    nullable: true,
  })
  vote_average?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  vote_count?: number | undefined;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  poster_path?: string | undefined;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  backdrop_path?: string | undefined;

  @TypeGraphQL.Field((_type) => MovieGenresCreateNestedManyWithoutMoviesInput, {
    nullable: true,
  })
  MovieGenres?: MovieGenresCreateNestedManyWithoutMoviesInput | undefined;
}
