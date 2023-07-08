import * as TypeGraphQL from 'type-graphql'
import * as GraphQLScalars from 'graphql-scalars'
import { Prisma } from '@prisma/client'
import { DecimalJSScalar } from '../../scalars'
import { MovieGenresScalarWhereInput } from '../inputs/MovieGenresScalarWhereInput'

@TypeGraphQL.InputType(
	'MovieGenresUpdateManyWithWhereWithoutMoviesInput',
	{}
)
export class MovieGenresUpdateManyWithWhereWithoutMoviesInput {
	@TypeGraphQL.Field(_type => MovieGenresScalarWhereInput, {
		nullable: false,
	})
	where!: MovieGenresScalarWhereInput
}
