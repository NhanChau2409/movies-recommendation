import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenresOrderByWithRelationInput } from "../inputs/GenresOrderByWithRelationInput";
import { MoviesOrderByWithRelationInput } from "../inputs/MoviesOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Movie_genresOrderByWithRelationInput", {})
export class Movie_genresOrderByWithRelationInput {
  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  movie_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  genre_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => GenresOrderByWithRelationInput, {
    nullable: true,
  })
  genres?: GenresOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field((_type) => MoviesOrderByWithRelationInput, {
    nullable: true,
  })
  movies?: MoviesOrderByWithRelationInput | undefined;
}
