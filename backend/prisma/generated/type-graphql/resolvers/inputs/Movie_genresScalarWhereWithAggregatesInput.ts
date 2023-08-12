import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("Movie_genresScalarWhereWithAggregatesInput", {})
export class Movie_genresScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field((_type) => [Movie_genresScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  AND?: Movie_genresScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field((_type) => [Movie_genresScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  OR?: Movie_genresScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field((_type) => [Movie_genresScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  NOT?: Movie_genresScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field((_type) => IntWithAggregatesFilter, {
    nullable: true,
  })
  movie_id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => IntWithAggregatesFilter, {
    nullable: true,
  })
  genre_id?: IntWithAggregatesFilter | undefined;
}
