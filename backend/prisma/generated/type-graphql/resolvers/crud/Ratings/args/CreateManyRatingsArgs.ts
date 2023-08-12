import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RatingsCreateManyInput } from "../../../inputs/RatingsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyRatingsArgs {
  @TypeGraphQL.Field((_type) => [RatingsCreateManyInput], {
    nullable: false,
  })
  data!: RatingsCreateManyInput[];

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
