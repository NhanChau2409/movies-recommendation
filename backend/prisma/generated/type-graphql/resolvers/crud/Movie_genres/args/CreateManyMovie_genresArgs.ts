import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Movie_genresCreateManyInput } from "../../../inputs/Movie_genresCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyMovie_genresArgs {
  @TypeGraphQL.Field((_type) => [Movie_genresCreateManyInput], {
    nullable: false,
  })
  data!: Movie_genresCreateManyInput[];

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
