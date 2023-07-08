import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GenresWhereInput } from "../../../inputs/GenresWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyGenresArgs {
  @TypeGraphQL.Field((_type) => GenresWhereInput, {
    nullable: true,
  })
  where?: GenresWhereInput | undefined;
}
