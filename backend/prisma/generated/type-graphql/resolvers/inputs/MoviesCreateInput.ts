import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Movie_genresCreateNestedManyWithoutMoviesInput } from "../inputs/Movie_genresCreateNestedManyWithoutMoviesInput";
import { RatingsCreateNestedManyWithoutMoviesInput } from "../inputs/RatingsCreateNestedManyWithoutMoviesInput";

@TypeGraphQL.InputType("MoviesCreateInput", {})
export class MoviesCreateInput {
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

  @TypeGraphQL.Field(
    (_type) => Movie_genresCreateNestedManyWithoutMoviesInput,
    {
      nullable: true,
    },
  )
  movie_genres?: Movie_genresCreateNestedManyWithoutMoviesInput | undefined;

  @TypeGraphQL.Field((_type) => RatingsCreateNestedManyWithoutMoviesInput, {
    nullable: true,
  })
  ratings?: RatingsCreateNestedManyWithoutMoviesInput | undefined;
}
