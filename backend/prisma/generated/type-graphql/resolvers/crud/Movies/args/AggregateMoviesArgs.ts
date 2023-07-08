import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoviesOrderByWithRelationInput } from "../../../inputs/MoviesOrderByWithRelationInput";
import { MoviesWhereInput } from "../../../inputs/MoviesWhereInput";
import { MoviesWhereUniqueInput } from "../../../inputs/MoviesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateMoviesArgs {
  @TypeGraphQL.Field((_type) => MoviesWhereInput, {
    nullable: true,
  })
  where?: MoviesWhereInput | undefined;

  @TypeGraphQL.Field((_type) => [MoviesOrderByWithRelationInput], {
    nullable: true,
  })
  orderBy?: MoviesOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field((_type) => MoviesWhereUniqueInput, {
    nullable: true,
  })
  cursor?: MoviesWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;
}
