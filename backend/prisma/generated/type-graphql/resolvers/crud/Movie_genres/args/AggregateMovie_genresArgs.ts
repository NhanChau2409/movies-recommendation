import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Movie_genresOrderByWithRelationInput } from "../../../inputs/Movie_genresOrderByWithRelationInput";
import { Movie_genresWhereInput } from "../../../inputs/Movie_genresWhereInput";
import { Movie_genresWhereUniqueInput } from "../../../inputs/Movie_genresWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateMovie_genresArgs {
  @TypeGraphQL.Field((_type) => Movie_genresWhereInput, {
    nullable: true,
  })
  where?: Movie_genresWhereInput | undefined;

  @TypeGraphQL.Field((_type) => [Movie_genresOrderByWithRelationInput], {
    nullable: true,
  })
  orderBy?: Movie_genresOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field((_type) => Movie_genresWhereUniqueInput, {
    nullable: true,
  })
  cursor?: Movie_genresWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;
}
