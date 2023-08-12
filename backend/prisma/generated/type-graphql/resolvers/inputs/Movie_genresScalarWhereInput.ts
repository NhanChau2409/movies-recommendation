import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType("Movie_genresScalarWhereInput", {})
export class Movie_genresScalarWhereInput {
  @TypeGraphQL.Field((_type) => [Movie_genresScalarWhereInput], {
    nullable: true,
  })
  AND?: Movie_genresScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [Movie_genresScalarWhereInput], {
    nullable: true,
  })
  OR?: Movie_genresScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [Movie_genresScalarWhereInput], {
    nullable: true,
  })
  NOT?: Movie_genresScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => IntFilter, {
    nullable: true,
  })
  movie_id?: IntFilter | undefined;

  @TypeGraphQL.Field((_type) => IntFilter, {
    nullable: true,
  })
  genre_id?: IntFilter | undefined;
}
