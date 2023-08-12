import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Movie_genresScalarWhereInput } from "../inputs/Movie_genresScalarWhereInput";

@TypeGraphQL.InputType("Movie_genresUpdateManyWithWhereWithoutMoviesInput", {})
export class Movie_genresUpdateManyWithWhereWithoutMoviesInput {
  @TypeGraphQL.Field((_type) => Movie_genresScalarWhereInput, {
    nullable: false,
  })
  where!: Movie_genresScalarWhereInput;

}
