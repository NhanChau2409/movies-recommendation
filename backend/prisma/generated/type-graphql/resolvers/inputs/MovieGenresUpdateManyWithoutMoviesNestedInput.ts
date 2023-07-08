import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieGenresCreateManyMoviesInputEnvelope } from "../inputs/MovieGenresCreateManyMoviesInputEnvelope";
import { MovieGenresCreateOrConnectWithoutMoviesInput } from "../inputs/MovieGenresCreateOrConnectWithoutMoviesInput";
import { MovieGenresCreateWithoutMoviesInput } from "../inputs/MovieGenresCreateWithoutMoviesInput";
import { MovieGenresScalarWhereInput } from "../inputs/MovieGenresScalarWhereInput";
import { MovieGenresUpdateManyWithWhereWithoutMoviesInput } from "../inputs/MovieGenresUpdateManyWithWhereWithoutMoviesInput";
import { MovieGenresUpdateWithWhereUniqueWithoutMoviesInput } from "../inputs/MovieGenresUpdateWithWhereUniqueWithoutMoviesInput";
import { MovieGenresUpsertWithWhereUniqueWithoutMoviesInput } from "../inputs/MovieGenresUpsertWithWhereUniqueWithoutMoviesInput";
import { MovieGenresWhereUniqueInput } from "../inputs/MovieGenresWhereUniqueInput";

@TypeGraphQL.InputType("MovieGenresUpdateManyWithoutMoviesNestedInput", {})
export class MovieGenresUpdateManyWithoutMoviesNestedInput {
  @TypeGraphQL.Field((_type) => [MovieGenresCreateWithoutMoviesInput], {
    nullable: true,
  })
  create?: MovieGenresCreateWithoutMoviesInput[] | undefined;

  @TypeGraphQL.Field(
    (_type) => [MovieGenresCreateOrConnectWithoutMoviesInput],
    {
      nullable: true,
    },
  )
  connectOrCreate?: MovieGenresCreateOrConnectWithoutMoviesInput[] | undefined;

  @TypeGraphQL.Field(
    (_type) => [MovieGenresUpsertWithWhereUniqueWithoutMoviesInput],
    {
      nullable: true,
    },
  )
  upsert?: MovieGenresUpsertWithWhereUniqueWithoutMoviesInput[] | undefined;

  @TypeGraphQL.Field((_type) => MovieGenresCreateManyMoviesInputEnvelope, {
    nullable: true,
  })
  createMany?: MovieGenresCreateManyMoviesInputEnvelope | undefined;

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
    (_type) => [MovieGenresUpdateWithWhereUniqueWithoutMoviesInput],
    {
      nullable: true,
    },
  )
  update?: MovieGenresUpdateWithWhereUniqueWithoutMoviesInput[] | undefined;

  @TypeGraphQL.Field(
    (_type) => [MovieGenresUpdateManyWithWhereWithoutMoviesInput],
    {
      nullable: true,
    },
  )
  updateMany?: MovieGenresUpdateManyWithWhereWithoutMoviesInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MovieGenresScalarWhereInput], {
    nullable: true,
  })
  deleteMany?: MovieGenresScalarWhereInput[] | undefined;
}
