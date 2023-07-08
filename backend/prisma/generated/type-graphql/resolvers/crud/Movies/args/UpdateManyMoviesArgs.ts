import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoviesUpdateManyMutationInput } from "../../../inputs/MoviesUpdateManyMutationInput";
import { MoviesWhereInput } from "../../../inputs/MoviesWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyMoviesArgs {
  @TypeGraphQL.Field((_type) => MoviesUpdateManyMutationInput, {
    nullable: false,
  })
  data!: MoviesUpdateManyMutationInput;

  @TypeGraphQL.Field((_type) => MoviesWhereInput, {
    nullable: true,
  })
  where?: MoviesWhereInput | undefined;
}
