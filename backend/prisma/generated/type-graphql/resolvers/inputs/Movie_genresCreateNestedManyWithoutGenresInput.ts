import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Movie_genresCreateManyGenresInputEnvelope } from "../inputs/Movie_genresCreateManyGenresInputEnvelope";
import { Movie_genresCreateOrConnectWithoutGenresInput } from "../inputs/Movie_genresCreateOrConnectWithoutGenresInput";
import { Movie_genresCreateWithoutGenresInput } from "../inputs/Movie_genresCreateWithoutGenresInput";
import { Movie_genresWhereUniqueInput } from "../inputs/Movie_genresWhereUniqueInput";

@TypeGraphQL.InputType("Movie_genresCreateNestedManyWithoutGenresInput", {})
export class Movie_genresCreateNestedManyWithoutGenresInput {
  @TypeGraphQL.Field((_type) => [Movie_genresCreateWithoutGenresInput], {
    nullable: true,
  })
  create?: Movie_genresCreateWithoutGenresInput[] | undefined;

  @TypeGraphQL.Field(
    (_type) => [Movie_genresCreateOrConnectWithoutGenresInput],
    {
      nullable: true,
    },
  )
  connectOrCreate?: Movie_genresCreateOrConnectWithoutGenresInput[] | undefined;

  @TypeGraphQL.Field((_type) => Movie_genresCreateManyGenresInputEnvelope, {
    nullable: true,
  })
  createMany?: Movie_genresCreateManyGenresInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [Movie_genresWhereUniqueInput], {
    nullable: true,
  })
  connect?: Movie_genresWhereUniqueInput[] | undefined;
}
