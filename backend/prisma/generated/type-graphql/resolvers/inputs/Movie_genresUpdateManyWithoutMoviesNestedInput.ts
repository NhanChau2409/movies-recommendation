import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Movie_genresCreateManyMoviesInputEnvelope } from "../inputs/Movie_genresCreateManyMoviesInputEnvelope";
import { Movie_genresCreateOrConnectWithoutMoviesInput } from "../inputs/Movie_genresCreateOrConnectWithoutMoviesInput";
import { Movie_genresCreateWithoutMoviesInput } from "../inputs/Movie_genresCreateWithoutMoviesInput";
import { Movie_genresScalarWhereInput } from "../inputs/Movie_genresScalarWhereInput";
import { Movie_genresUpdateManyWithWhereWithoutMoviesInput } from "../inputs/Movie_genresUpdateManyWithWhereWithoutMoviesInput";
import { Movie_genresUpdateWithWhereUniqueWithoutMoviesInput } from "../inputs/Movie_genresUpdateWithWhereUniqueWithoutMoviesInput";
import { Movie_genresUpsertWithWhereUniqueWithoutMoviesInput } from "../inputs/Movie_genresUpsertWithWhereUniqueWithoutMoviesInput";
import { Movie_genresWhereUniqueInput } from "../inputs/Movie_genresWhereUniqueInput";

@TypeGraphQL.InputType("Movie_genresUpdateManyWithoutMoviesNestedInput", {})
export class Movie_genresUpdateManyWithoutMoviesNestedInput {
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

  @TypeGraphQL.Field(
    (_type) => [Movie_genresUpsertWithWhereUniqueWithoutMoviesInput],
    {
      nullable: true,
    },
  )
  upsert?: Movie_genresUpsertWithWhereUniqueWithoutMoviesInput[] | undefined;

  @TypeGraphQL.Field((_type) => Movie_genresCreateManyMoviesInputEnvelope, {
    nullable: true,
  })
  createMany?: Movie_genresCreateManyMoviesInputEnvelope | undefined;

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
    (_type) => [Movie_genresUpdateWithWhereUniqueWithoutMoviesInput],
    {
      nullable: true,
    },
  )
  update?: Movie_genresUpdateWithWhereUniqueWithoutMoviesInput[] | undefined;

  @TypeGraphQL.Field(
    (_type) => [Movie_genresUpdateManyWithWhereWithoutMoviesInput],
    {
      nullable: true,
    },
  )
  updateMany?: Movie_genresUpdateManyWithWhereWithoutMoviesInput[] | undefined;

  @TypeGraphQL.Field((_type) => [Movie_genresScalarWhereInput], {
    nullable: true,
  })
  deleteMany?: Movie_genresScalarWhereInput[] | undefined;
}
