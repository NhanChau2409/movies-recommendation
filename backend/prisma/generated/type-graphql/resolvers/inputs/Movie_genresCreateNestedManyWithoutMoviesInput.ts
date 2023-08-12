import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Movie_genresCreateManyMoviesInputEnvelope } from "../inputs/Movie_genresCreateManyMoviesInputEnvelope";
import { Movie_genresCreateOrConnectWithoutMoviesInput } from "../inputs/Movie_genresCreateOrConnectWithoutMoviesInput";
import { Movie_genresCreateWithoutMoviesInput } from "../inputs/Movie_genresCreateWithoutMoviesInput";
import { Movie_genresWhereUniqueInput } from "../inputs/Movie_genresWhereUniqueInput";

@TypeGraphQL.InputType("Movie_genresCreateNestedManyWithoutMoviesInput", {})
export class Movie_genresCreateNestedManyWithoutMoviesInput {
  @TypeGraphQL.Field((_type) => [Movie_genresCreateWithoutMoviesInput], {
    nullable: true,
  })
  create?: Movie_genresCreateWithoutMoviesInput[] | undefined;

  @TypeGraphQL.Field(
    (_type) => [Movie_genresCreateOrConnectWithoutMoviesInput],
    {
      nullable: true,
    },
  )
  connectOrCreate?: Movie_genresCreateOrConnectWithoutMoviesInput[] | undefined;

  @TypeGraphQL.Field((_type) => Movie_genresCreateManyMoviesInputEnvelope, {
    nullable: true,
  })
  createMany?: Movie_genresCreateManyMoviesInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [Movie_genresWhereUniqueInput], {
    nullable: true,
  })
  connect?: Movie_genresWhereUniqueInput[] | undefined;
}
