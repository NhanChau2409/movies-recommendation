import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenresWhereInput } from "../inputs/GenresWhereInput";

@TypeGraphQL.InputType("GenresRelationFilter", {})
export class GenresRelationFilter {
  @TypeGraphQL.Field((_type) => GenresWhereInput, {
    nullable: true,
  })
  is?: GenresWhereInput | undefined;

  @TypeGraphQL.Field((_type) => GenresWhereInput, {
    nullable: true,
  })
  isNot?: GenresWhereInput | undefined;
}
