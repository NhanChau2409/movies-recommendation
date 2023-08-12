import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Movie_genresCreateManyGenresInput } from "../inputs/Movie_genresCreateManyGenresInput";

@TypeGraphQL.InputType("Movie_genresCreateManyGenresInputEnvelope", {})
export class Movie_genresCreateManyGenresInputEnvelope {
  @TypeGraphQL.Field((_type) => [Movie_genresCreateManyGenresInput], {
    nullable: false,
  })
  data!: Movie_genresCreateManyGenresInput[];

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
