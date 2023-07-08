import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("MovieGenresScalarWhereWithAggregatesInput", {})
export class MovieGenresScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field((_type) => [MovieGenresScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  AND?: MovieGenresScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MovieGenresScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  OR?: MovieGenresScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MovieGenresScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  NOT?: MovieGenresScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field((_type) => IntWithAggregatesFilter, {
    nullable: true,
  })
  movie_id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => IntWithAggregatesFilter, {
    nullable: true,
  })
  genre_id?: IntWithAggregatesFilter | undefined;
}
