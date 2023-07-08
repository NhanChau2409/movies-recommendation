import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RatingsUser_idMovie_idCompoundUniqueInput } from "../inputs/RatingsUser_idMovie_idCompoundUniqueInput";

@TypeGraphQL.InputType("RatingsWhereUniqueInput", {})
export class RatingsWhereUniqueInput {
  @TypeGraphQL.Field((_type) => RatingsUser_idMovie_idCompoundUniqueInput, {
    nullable: true,
  })
  user_id_movie_id?: RatingsUser_idMovie_idCompoundUniqueInput | undefined;
}
