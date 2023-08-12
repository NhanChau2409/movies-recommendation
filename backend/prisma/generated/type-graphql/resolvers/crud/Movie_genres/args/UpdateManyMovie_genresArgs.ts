import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Movie_genresWhereInput } from "../../../inputs/Movie_genresWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyMovie_genresArgs {
  @TypeGraphQL.Field((_type) => Movie_genresWhereInput, {
    nullable: true,
  })
  where?: Movie_genresWhereInput | undefined;
}
