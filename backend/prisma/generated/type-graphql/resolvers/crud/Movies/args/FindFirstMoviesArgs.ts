import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoviesOrderByWithRelationInput } from "../../../inputs/MoviesOrderByWithRelationInput";
import { MoviesWhereInput } from "../../../inputs/MoviesWhereInput";
import { MoviesWhereUniqueInput } from "../../../inputs/MoviesWhereUniqueInput";
import { MoviesScalarFieldEnum } from "../../../../enums/MoviesScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstMoviesArgs {
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

  @TypeGraphQL.Field((_type) => [MoviesScalarFieldEnum], {
    nullable: true,
  })
  distinct?:
    | Array<
        | "id"
        | "title"
        | "release_date"
        | "runtime"
        | "overview"
        | "popularity"
        | "vote_average"
        | "vote_count"
        | "poster_path"
        | "backdrop_path"
      >
    | undefined;
}
