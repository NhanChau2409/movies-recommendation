import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RatingsCreateManyUsersInput } from "../inputs/RatingsCreateManyUsersInput";

@TypeGraphQL.InputType("RatingsCreateManyUsersInputEnvelope", {})
export class RatingsCreateManyUsersInputEnvelope {
  @TypeGraphQL.Field((_type) => [RatingsCreateManyUsersInput], {
    nullable: false,
  })
  data!: RatingsCreateManyUsersInput[];

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
