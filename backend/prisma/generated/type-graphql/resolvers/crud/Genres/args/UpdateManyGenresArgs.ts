import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GenresUpdateManyMutationInput } from "../../../inputs/GenresUpdateManyMutationInput";
import { GenresWhereInput } from "../../../inputs/GenresWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyGenresArgs {
  @TypeGraphQL.Field((_type) => GenresUpdateManyMutationInput, {
    nullable: false,
  })
  data!: GenresUpdateManyMutationInput;

  @TypeGraphQL.Field((_type) => GenresWhereInput, {
    nullable: true,
  })
  where?: GenresWhereInput | undefined;
}
