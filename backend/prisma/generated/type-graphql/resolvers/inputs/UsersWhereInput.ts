import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { RatingsListRelationFilter } from "../inputs/RatingsListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("UsersWhereInput", {})
export class UsersWhereInput {
  @TypeGraphQL.Field((_type) => [UsersWhereInput], {
    nullable: true,
  })
  AND?: UsersWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [UsersWhereInput], {
    nullable: true,
  })
  OR?: UsersWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [UsersWhereInput], {
    nullable: true,
  })
  NOT?: UsersWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => IntFilter, {
    nullable: true,
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  username?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  password?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => RatingsListRelationFilter, {
    nullable: true,
  })
  ratings?: RatingsListRelationFilter | undefined;
}
