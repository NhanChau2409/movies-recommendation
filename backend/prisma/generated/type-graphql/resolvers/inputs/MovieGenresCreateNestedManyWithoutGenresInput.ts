import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieGenresCreateManyGenresInputEnvelope } from "../inputs/MovieGenresCreateManyGenresInputEnvelope";
import { MovieGenresCreateOrConnectWithoutGenresInput } from "../inputs/MovieGenresCreateOrConnectWithoutGenresInput";
import { MovieGenresCreateWithoutGenresInput } from "../inputs/MovieGenresCreateWithoutGenresInput";
import { MovieGenresWhereUniqueInput } from "../inputs/MovieGenresWhereUniqueInput";

@TypeGraphQL.InputType("MovieGenresCreateNestedManyWithoutGenresInput", {})
export class MovieGenresCreateNestedManyWithoutGenresInput {
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

  @TypeGraphQL.Field((_type) => MovieGenresCreateManyGenresInputEnvelope, {
    nullable: true,
  })
  createMany?: MovieGenresCreateManyGenresInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [MovieGenresWhereUniqueInput], {
    nullable: true,
  })
  connect?: MovieGenresWhereUniqueInput[] | undefined;
}
