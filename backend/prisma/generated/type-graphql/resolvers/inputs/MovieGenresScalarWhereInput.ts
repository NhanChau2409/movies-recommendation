import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType("MovieGenresScalarWhereInput", {})
export class MovieGenresScalarWhereInput {
  @TypeGraphQL.Field((_type) => [MovieGenresScalarWhereInput], {
    nullable: true,
  })
  AND?: MovieGenresScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MovieGenresScalarWhereInput], {
    nullable: true,
  })
  OR?: MovieGenresScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MovieGenresScalarWhereInput], {
    nullable: true,
  })
  NOT?: MovieGenresScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => IntFilter, {
    nullable: true,
  })
  movie_id?: IntFilter | undefined;

  @TypeGraphQL.Field((_type) => IntFilter, {
    nullable: true,
  })
  genre_id?: IntFilter | undefined;
}
