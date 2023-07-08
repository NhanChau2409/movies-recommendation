import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GenresCreateInput } from "../../../inputs/GenresCreateInput";
import { GenresUpdateInput } from "../../../inputs/GenresUpdateInput";
import { GenresWhereUniqueInput } from "../../../inputs/GenresWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneGenresArgs {
  @TypeGraphQL.Field((_type) => GenresWhereUniqueInput, {
    nullable: false,
  })
  where!: GenresWhereUniqueInput;

  @TypeGraphQL.Field((_type) => GenresCreateInput, {
    nullable: false,
  })
  create!: GenresCreateInput;

  @TypeGraphQL.Field((_type) => GenresUpdateInput, {
    nullable: false,
  })
  update!: GenresUpdateInput;
}
