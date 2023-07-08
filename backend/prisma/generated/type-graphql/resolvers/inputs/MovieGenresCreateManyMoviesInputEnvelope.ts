import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieGenresCreateManyMoviesInput } from "../inputs/MovieGenresCreateManyMoviesInput";

@TypeGraphQL.InputType("MovieGenresCreateManyMoviesInputEnvelope", {})
export class MovieGenresCreateManyMoviesInputEnvelope {
  @TypeGraphQL.Field((_type) => [MovieGenresCreateManyMoviesInput], {
    nullable: false,
  })
  data!: MovieGenresCreateManyMoviesInput[];
}
