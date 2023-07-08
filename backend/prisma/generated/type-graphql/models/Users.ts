import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Ratings } from "../models/Ratings";
import { UsersCount } from "../resolvers/outputs/UsersCount";

@TypeGraphQL.ObjectType("Users", {})
export class Users {
  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: false,
  })
  id!: number;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  username!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  password!: string;

  Ratings?: Ratings[];

  @TypeGraphQL.Field((_type) => UsersCount, {
    nullable: true,
  })
  _count?: UsersCount | null;
}
