import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoviesCreateManyInput } from "../../../inputs/MoviesCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyMoviesArgs {
  @TypeGraphQL.Field((_type) => [MoviesCreateManyInput], {
    nullable: false,
  })
  data!: MoviesCreateManyInput[];

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
