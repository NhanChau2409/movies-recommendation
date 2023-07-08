import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RatingsCreateManyMoviesInputEnvelope } from "../inputs/RatingsCreateManyMoviesInputEnvelope";
import { RatingsCreateOrConnectWithoutMoviesInput } from "../inputs/RatingsCreateOrConnectWithoutMoviesInput";
import { RatingsCreateWithoutMoviesInput } from "../inputs/RatingsCreateWithoutMoviesInput";
import { RatingsWhereUniqueInput } from "../inputs/RatingsWhereUniqueInput";

@TypeGraphQL.InputType("RatingsCreateNestedManyWithoutMoviesInput", {})
export class RatingsCreateNestedManyWithoutMoviesInput {
  @TypeGraphQL.Field((_type) => [RatingsCreateWithoutMoviesInput], {
    nullable: true,
  })
  create?: RatingsCreateWithoutMoviesInput[] | undefined;

  @TypeGraphQL.Field((_type) => [RatingsCreateOrConnectWithoutMoviesInput], {
    nullable: true,
  })
  connectOrCreate?: RatingsCreateOrConnectWithoutMoviesInput[] | undefined;

  @TypeGraphQL.Field((_type) => RatingsCreateManyMoviesInputEnvelope, {
    nullable: true,
  })
  createMany?: RatingsCreateManyMoviesInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [RatingsWhereUniqueInput], {
    nullable: true,
  })
  connect?: RatingsWhereUniqueInput[] | undefined;
}
