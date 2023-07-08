import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GenresUpdateInput } from "../../../inputs/GenresUpdateInput";
import { GenresWhereUniqueInput } from "../../../inputs/GenresWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneGenresArgs {
  @TypeGraphQL.Field((_type) => GenresUpdateInput, {
    nullable: false,
  })
  data!: GenresUpdateInput;

  @TypeGraphQL.Field((_type) => GenresWhereUniqueInput, {
    nullable: false,
  })
  where!: GenresWhereUniqueInput;
}
