import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UsersCountRatingsArgs } from "./args/UsersCountRatingsArgs";

@TypeGraphQL.ObjectType("UsersCount", {})
export class UsersCount {
  ratings!: number;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    name: "ratings",
    nullable: false,
  })
  getRatings(
    @TypeGraphQL.Root() root: UsersCount,
    @TypeGraphQL.Args() args: UsersCountRatingsArgs,
  ): number {
    return root.ratings;
  }
}
