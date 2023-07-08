import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GenresCreateInput } from "../../../inputs/GenresCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneGenresArgs {
  @TypeGraphQL.Field((_type) => GenresCreateInput, {
    nullable: false,
  })
  data!: GenresCreateInput;
}
