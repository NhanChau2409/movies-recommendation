import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RatingsCreateManyMoviesInput } from "../inputs/RatingsCreateManyMoviesInput";

@TypeGraphQL.InputType("RatingsCreateManyMoviesInputEnvelope", {})
export class RatingsCreateManyMoviesInputEnvelope {
  @TypeGraphQL.Field((_type) => [RatingsCreateManyMoviesInput], {
    nullable: false,
  })
  data!: RatingsCreateManyMoviesInput[];

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
