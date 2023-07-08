import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoviesOrderByWithRelationInput } from "../inputs/MoviesOrderByWithRelationInput";
import { UsersOrderByWithRelationInput } from "../inputs/UsersOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("RatingsOrderByWithRelationInput", {})
export class RatingsOrderByWithRelationInput {
  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  user_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  movie_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  rating?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => MoviesOrderByWithRelationInput, {
    nullable: true,
  })
  Movies?: MoviesOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field((_type) => UsersOrderByWithRelationInput, {
    nullable: true,
  })
  Users?: UsersOrderByWithRelationInput | undefined;
}
