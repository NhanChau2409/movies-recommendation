import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GenresCreateManyInput } from "../../../inputs/GenresCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyGenresArgs {
  @TypeGraphQL.Field((_type) => [GenresCreateManyInput], {
    nullable: false,
  })
  data!: GenresCreateManyInput[];

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
