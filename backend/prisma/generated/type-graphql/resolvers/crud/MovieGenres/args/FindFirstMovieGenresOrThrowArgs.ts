import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieGenresOrderByWithRelationInput } from "../../../inputs/MovieGenresOrderByWithRelationInput";
import { MovieGenresWhereInput } from "../../../inputs/MovieGenresWhereInput";
import { MovieGenresWhereUniqueInput } from "../../../inputs/MovieGenresWhereUniqueInput";
import { MovieGenresScalarFieldEnum } from "../../../../enums/MovieGenresScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstMovieGenresOrThrowArgs {
  @TypeGraphQL.Field((_type) => MovieGenresWhereInput, {
    nullable: true,
  })
  where?: MovieGenresWhereInput | undefined;

  @TypeGraphQL.Field((_type) => [MovieGenresOrderByWithRelationInput], {
    nullable: true,
  })
  orderBy?: MovieGenresOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field((_type) => MovieGenresWhereUniqueInput, {
    nullable: true,
  })
  cursor?: MovieGenresWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;

  @TypeGraphQL.Field((_type) => [MovieGenresScalarFieldEnum], {
    nullable: true,
  })
  distinct?: Array<"movie_id" | "genre_id"> | undefined;
}
