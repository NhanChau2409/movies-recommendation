import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieGenresCreateManyGenresInputEnvelope } from "../inputs/MovieGenresCreateManyGenresInputEnvelope";
import { MovieGenresCreateOrConnectWithoutGenresInput } from "../inputs/MovieGenresCreateOrConnectWithoutGenresInput";
import { MovieGenresCreateWithoutGenresInput } from "../inputs/MovieGenresCreateWithoutGenresInput";
import { MovieGenresScalarWhereInput } from "../inputs/MovieGenresScalarWhereInput";
import { MovieGenresUpdateManyWithWhereWithoutGenresInput } from "../inputs/MovieGenresUpdateManyWithWhereWithoutGenresInput";
import { MovieGenresUpdateWithWhereUniqueWithoutGenresInput } from "../inputs/MovieGenresUpdateWithWhereUniqueWithoutGenresInput";
import { MovieGenresUpsertWithWhereUniqueWithoutGenresInput } from "../inputs/MovieGenresUpsertWithWhereUniqueWithoutGenresInput";
import { MovieGenresWhereUniqueInput } from "../inputs/MovieGenresWhereUniqueInput";

@TypeGraphQL.InputType("MovieGenresUpdateManyWithoutGenresNestedInput", {})
export class MovieGenresUpdateManyWithoutGenresNestedInput {
  @TypeGraphQL.Field((_type) => [MovieGenresCreateWithoutGenresInput], {
    nullable: true,
  })
  create?: MovieGenresCreateWithoutGenresInput[] | undefined;

  @TypeGraphQL.Field(
    (_type) => [MovieGenresCreateOrConnectWithoutGenresInput],
    {
      nullable: true,
    },
  )
  connectOrCreate?: MovieGenresCreateOrConnectWithoutGenresInput[] | undefined;

  @TypeGraphQL.Field(
    (_type) => [MovieGenresUpsertWithWhereUniqueWithoutGenresInput],
    {
      nullable: true,
    },
  )
  upsert?: MovieGenresUpsertWithWhereUniqueWithoutGenresInput[] | undefined;

  @TypeGraphQL.Field((_type) => MovieGenresCreateManyGenresInputEnvelope, {
    nullable: true,
  })
  createMany?: MovieGenresCreateManyGenresInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [MovieGenresWhereUniqueInput], {
    nullable: true,
  })
  set?: MovieGenresWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MovieGenresWhereUniqueInput], {
    nullable: true,
  })
  disconnect?: MovieGenresWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MovieGenresWhereUniqueInput], {
    nullable: true,
  })
  delete?: MovieGenresWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MovieGenresWhereUniqueInput], {
    nullable: true,
  })
  connect?: MovieGenresWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(
    (_type) => [MovieGenresUpdateWithWhereUniqueWithoutGenresInput],
    {
      nullable: true,
    },
  )
  update?: MovieGenresUpdateWithWhereUniqueWithoutGenresInput[] | undefined;

  @TypeGraphQL.Field(
    (_type) => [MovieGenresUpdateManyWithWhereWithoutGenresInput],
    {
      nullable: true,
    },
  )
  updateMany?: MovieGenresUpdateManyWithWhereWithoutGenresInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MovieGenresScalarWhereInput], {
    nullable: true,
  })
  deleteMany?: MovieGenresScalarWhereInput[] | undefined;
}
