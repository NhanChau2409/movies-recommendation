import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Movie_genresCreateManyGenresInputEnvelope } from "../inputs/Movie_genresCreateManyGenresInputEnvelope";
import { Movie_genresCreateOrConnectWithoutGenresInput } from "../inputs/Movie_genresCreateOrConnectWithoutGenresInput";
import { Movie_genresCreateWithoutGenresInput } from "../inputs/Movie_genresCreateWithoutGenresInput";
import { Movie_genresScalarWhereInput } from "../inputs/Movie_genresScalarWhereInput";
import { Movie_genresUpdateManyWithWhereWithoutGenresInput } from "../inputs/Movie_genresUpdateManyWithWhereWithoutGenresInput";
import { Movie_genresUpdateWithWhereUniqueWithoutGenresInput } from "../inputs/Movie_genresUpdateWithWhereUniqueWithoutGenresInput";
import { Movie_genresUpsertWithWhereUniqueWithoutGenresInput } from "../inputs/Movie_genresUpsertWithWhereUniqueWithoutGenresInput";
import { Movie_genresWhereUniqueInput } from "../inputs/Movie_genresWhereUniqueInput";

@TypeGraphQL.InputType("Movie_genresUpdateManyWithoutGenresNestedInput", {})
export class Movie_genresUpdateManyWithoutGenresNestedInput {
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

  @TypeGraphQL.Field(
    (_type) => [Movie_genresUpsertWithWhereUniqueWithoutGenresInput],
    {
      nullable: true,
    },
  )
  upsert?: Movie_genresUpsertWithWhereUniqueWithoutGenresInput[] | undefined;

  @TypeGraphQL.Field((_type) => Movie_genresCreateManyGenresInputEnvelope, {
    nullable: true,
  })
  createMany?: Movie_genresCreateManyGenresInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [Movie_genresWhereUniqueInput], {
    nullable: true,
  })
  set?: Movie_genresWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [Movie_genresWhereUniqueInput], {
    nullable: true,
  })
  disconnect?: Movie_genresWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [Movie_genresWhereUniqueInput], {
    nullable: true,
  })
  delete?: Movie_genresWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [Movie_genresWhereUniqueInput], {
    nullable: true,
  })
  connect?: Movie_genresWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(
    (_type) => [Movie_genresUpdateWithWhereUniqueWithoutGenresInput],
    {
      nullable: true,
    },
  )
  update?: Movie_genresUpdateWithWhereUniqueWithoutGenresInput[] | undefined;

  @TypeGraphQL.Field(
    (_type) => [Movie_genresUpdateManyWithWhereWithoutGenresInput],
    {
      nullable: true,
    },
  )
  updateMany?: Movie_genresUpdateManyWithWhereWithoutGenresInput[] | undefined;

  @TypeGraphQL.Field((_type) => [Movie_genresScalarWhereInput], {
    nullable: true,
  })
  deleteMany?: Movie_genresScalarWhereInput[] | undefined;
}
