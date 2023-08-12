import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Movie_genresCreateNestedManyWithoutGenresInput } from "../inputs/Movie_genresCreateNestedManyWithoutGenresInput";

@TypeGraphQL.InputType("GenresCreateInput", {})
export class GenresCreateInput {
  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  genre!: string;

  @TypeGraphQL.Field(
    (_type) => Movie_genresCreateNestedManyWithoutGenresInput,
    {
      nullable: true,
    },
  )
  movie_genres?: Movie_genresCreateNestedManyWithoutGenresInput | undefined;
}
