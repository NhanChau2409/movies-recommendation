import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieGenresCreateManyMoviesInputEnvelope } from "../inputs/MovieGenresCreateManyMoviesInputEnvelope";
import { MovieGenresCreateOrConnectWithoutMoviesInput } from "../inputs/MovieGenresCreateOrConnectWithoutMoviesInput";
import { MovieGenresCreateWithoutMoviesInput } from "../inputs/MovieGenresCreateWithoutMoviesInput";
import { MovieGenresWhereUniqueInput } from "../inputs/MovieGenresWhereUniqueInput";

@TypeGraphQL.InputType("MovieGenresCreateNestedManyWithoutMoviesInput", {})
export class MovieGenresCreateNestedManyWithoutMoviesInput {
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

  @TypeGraphQL.Field((_type) => MovieGenresCreateManyMoviesInputEnvelope, {
    nullable: true,
  })
  createMany?: MovieGenresCreateManyMoviesInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [MovieGenresWhereUniqueInput], {
    nullable: true,
  })
  connect?: MovieGenresWhereUniqueInput[] | undefined;
}
