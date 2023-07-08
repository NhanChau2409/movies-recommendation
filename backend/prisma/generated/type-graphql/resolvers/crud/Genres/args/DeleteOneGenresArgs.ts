import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GenresWhereUniqueInput } from "../../../inputs/GenresWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneGenresArgs {
  @TypeGraphQL.Field((_type) => GenresWhereUniqueInput, {
    nullable: false,
  })
  where!: GenresWhereUniqueInput;
}
