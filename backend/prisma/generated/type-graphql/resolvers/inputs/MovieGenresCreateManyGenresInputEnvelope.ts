import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieGenresCreateManyGenresInput } from "../inputs/MovieGenresCreateManyGenresInput";

@TypeGraphQL.InputType("MovieGenresCreateManyGenresInputEnvelope", {})
export class MovieGenresCreateManyGenresInputEnvelope {
  @TypeGraphQL.Field((_type) => [MovieGenresCreateManyGenresInput], {
    nullable: false,
  })
  data!: MovieGenresCreateManyGenresInput[];
}
