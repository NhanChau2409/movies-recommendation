import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Movie_genresCreateManyMoviesInput } from "../inputs/Movie_genresCreateManyMoviesInput";

@TypeGraphQL.InputType("Movie_genresCreateManyMoviesInputEnvelope", {})
export class Movie_genresCreateManyMoviesInputEnvelope {
  @TypeGraphQL.Field((_type) => [Movie_genresCreateManyMoviesInput], {
    nullable: false,
  })
  data!: Movie_genresCreateManyMoviesInput[];

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
