import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenresOrderByWithRelationInput } from "../inputs/GenresOrderByWithRelationInput";
import { MoviesOrderByWithRelationInput } from "../inputs/MoviesOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("MovieGenresOrderByWithRelationInput", {})
export class MovieGenresOrderByWithRelationInput {
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
  Genres?: GenresOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field((_type) => MoviesOrderByWithRelationInput, {
    nullable: true,
  })
  Movies?: MoviesOrderByWithRelationInput | undefined;
}
