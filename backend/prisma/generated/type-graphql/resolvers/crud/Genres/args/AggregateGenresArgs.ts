import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GenresOrderByWithRelationInput } from "../../../inputs/GenresOrderByWithRelationInput";
import { GenresWhereInput } from "../../../inputs/GenresWhereInput";
import { GenresWhereUniqueInput } from "../../../inputs/GenresWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateGenresArgs {
  @TypeGraphQL.Field((_type) => GenresWhereInput, {
    nullable: true,
  })
  where?: GenresWhereInput | undefined;

  @TypeGraphQL.Field((_type) => [GenresOrderByWithRelationInput], {
    nullable: true,
  })
  orderBy?: GenresOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field((_type) => GenresWhereUniqueInput, {
    nullable: true,
  })
  cursor?: GenresWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;
}
