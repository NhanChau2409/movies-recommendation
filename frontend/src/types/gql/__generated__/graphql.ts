/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: { input: any; output: any; }
  /** GraphQL Scalar representing the Prisma.Decimal type, based on Decimal.js library. */
  Decimal: { input: any; output: any; }
};

export type AffectedRowsOutput = {
  __typename?: 'AffectedRowsOutput';
  count: Scalars['Int']['output'];
};

export type AggregateGenres = {
  __typename?: 'AggregateGenres';
  _avg?: Maybe<GenresAvgAggregate>;
  _count?: Maybe<GenresCountAggregate>;
  _max?: Maybe<GenresMaxAggregate>;
  _min?: Maybe<GenresMinAggregate>;
  _sum?: Maybe<GenresSumAggregate>;
};

export type AggregateMovie_Genres = {
  __typename?: 'AggregateMovie_genres';
  _avg?: Maybe<Movie_GenresAvgAggregate>;
  _count?: Maybe<Movie_GenresCountAggregate>;
  _max?: Maybe<Movie_GenresMaxAggregate>;
  _min?: Maybe<Movie_GenresMinAggregate>;
  _sum?: Maybe<Movie_GenresSumAggregate>;
};

export type AggregateMovies = {
  __typename?: 'AggregateMovies';
  _avg?: Maybe<MoviesAvgAggregate>;
  _count?: Maybe<MoviesCountAggregate>;
  _max?: Maybe<MoviesMaxAggregate>;
  _min?: Maybe<MoviesMinAggregate>;
  _sum?: Maybe<MoviesSumAggregate>;
};

export type AggregateRatings = {
  __typename?: 'AggregateRatings';
  _avg?: Maybe<RatingsAvgAggregate>;
  _count?: Maybe<RatingsCountAggregate>;
  _max?: Maybe<RatingsMaxAggregate>;
  _min?: Maybe<RatingsMinAggregate>;
  _sum?: Maybe<RatingsSumAggregate>;
};

export type AggregateUsers = {
  __typename?: 'AggregateUsers';
  _avg?: Maybe<UsersAvgAggregate>;
  _count?: Maybe<UsersCountAggregate>;
  _max?: Maybe<UsersMaxAggregate>;
  _min?: Maybe<UsersMinAggregate>;
  _sum?: Maybe<UsersSumAggregate>;
};

export type DateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type DateTimeNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedDateTimeNullableFilter>;
  _min?: InputMaybe<NestedDateTimeNullableFilter>;
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type DecimalNullableFilter = {
  equals?: InputMaybe<Scalars['Decimal']['input']>;
  gt?: InputMaybe<Scalars['Decimal']['input']>;
  gte?: InputMaybe<Scalars['Decimal']['input']>;
  in?: InputMaybe<Array<Scalars['Decimal']['input']>>;
  lt?: InputMaybe<Scalars['Decimal']['input']>;
  lte?: InputMaybe<Scalars['Decimal']['input']>;
  not?: InputMaybe<NestedDecimalNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Decimal']['input']>>;
};

export type DecimalNullableWithAggregatesFilter = {
  _avg?: InputMaybe<NestedDecimalNullableFilter>;
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedDecimalNullableFilter>;
  _min?: InputMaybe<NestedDecimalNullableFilter>;
  _sum?: InputMaybe<NestedDecimalNullableFilter>;
  equals?: InputMaybe<Scalars['Decimal']['input']>;
  gt?: InputMaybe<Scalars['Decimal']['input']>;
  gte?: InputMaybe<Scalars['Decimal']['input']>;
  in?: InputMaybe<Array<Scalars['Decimal']['input']>>;
  lt?: InputMaybe<Scalars['Decimal']['input']>;
  lte?: InputMaybe<Scalars['Decimal']['input']>;
  not?: InputMaybe<NestedDecimalNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Decimal']['input']>>;
};

export type FloatFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Float']['input']>;
  divide?: InputMaybe<Scalars['Float']['input']>;
  increment?: InputMaybe<Scalars['Float']['input']>;
  multiply?: InputMaybe<Scalars['Float']['input']>;
  set?: InputMaybe<Scalars['Float']['input']>;
};

export type FloatFilter = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type FloatWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedFloatFilter>;
  _min?: InputMaybe<NestedFloatFilter>;
  _sum?: InputMaybe<NestedFloatFilter>;
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<NestedFloatWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type Genres = {
  __typename?: 'Genres';
  _count?: Maybe<GenresCount>;
  genre: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  movie_genres: Array<Movie_Genres>;
};


export type GenresMovie_GenresArgs = {
  cursor?: InputMaybe<Movie_GenresWhereUniqueInput>;
  distinct?: InputMaybe<Array<Movie_GenresScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<Movie_GenresOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Movie_GenresWhereInput>;
};

export type GenresAvgAggregate = {
  __typename?: 'GenresAvgAggregate';
  id?: Maybe<Scalars['Float']['output']>;
};

export type GenresAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type GenresCount = {
  __typename?: 'GenresCount';
  movie_genres: Scalars['Int']['output'];
};


export type GenresCountMovie_GenresArgs = {
  where?: InputMaybe<Movie_GenresWhereInput>;
};

export type GenresCountAggregate = {
  __typename?: 'GenresCountAggregate';
  _all: Scalars['Int']['output'];
  genre: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
};

export type GenresCountOrderByAggregateInput = {
  genre?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type GenresCreateInput = {
  genre: Scalars['String']['input'];
  movie_genres?: InputMaybe<Movie_GenresCreateNestedManyWithoutGenresInput>;
};

export type GenresCreateManyInput = {
  genre: Scalars['String']['input'];
  id?: InputMaybe<Scalars['Int']['input']>;
};

export type GenresCreateNestedOneWithoutMovie_GenresInput = {
  connect?: InputMaybe<GenresWhereUniqueInput>;
  connectOrCreate?: InputMaybe<GenresCreateOrConnectWithoutMovie_GenresInput>;
  create?: InputMaybe<GenresCreateWithoutMovie_GenresInput>;
};

export type GenresCreateOrConnectWithoutMovie_GenresInput = {
  create: GenresCreateWithoutMovie_GenresInput;
  where: GenresWhereUniqueInput;
};

export type GenresCreateWithoutMovie_GenresInput = {
  genre: Scalars['String']['input'];
};

export type GenresGroupBy = {
  __typename?: 'GenresGroupBy';
  _avg?: Maybe<GenresAvgAggregate>;
  _count?: Maybe<GenresCountAggregate>;
  _max?: Maybe<GenresMaxAggregate>;
  _min?: Maybe<GenresMinAggregate>;
  _sum?: Maybe<GenresSumAggregate>;
  genre: Scalars['String']['output'];
  id: Scalars['Int']['output'];
};

export type GenresMaxAggregate = {
  __typename?: 'GenresMaxAggregate';
  genre?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
};

export type GenresMaxOrderByAggregateInput = {
  genre?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type GenresMinAggregate = {
  __typename?: 'GenresMinAggregate';
  genre?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
};

export type GenresMinOrderByAggregateInput = {
  genre?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type GenresOrderByWithAggregationInput = {
  _avg?: InputMaybe<GenresAvgOrderByAggregateInput>;
  _count?: InputMaybe<GenresCountOrderByAggregateInput>;
  _max?: InputMaybe<GenresMaxOrderByAggregateInput>;
  _min?: InputMaybe<GenresMinOrderByAggregateInput>;
  _sum?: InputMaybe<GenresSumOrderByAggregateInput>;
  genre?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type GenresOrderByWithRelationInput = {
  genre?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  movie_genres?: InputMaybe<Movie_GenresOrderByRelationAggregateInput>;
};

export type GenresRelationFilter = {
  is?: InputMaybe<GenresWhereInput>;
  isNot?: InputMaybe<GenresWhereInput>;
};

export enum GenresScalarFieldEnum {
  Genre = 'genre',
  Id = 'id'
}

export type GenresScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<GenresScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<GenresScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<GenresScalarWhereWithAggregatesInput>>;
  genre?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
};

export type GenresSumAggregate = {
  __typename?: 'GenresSumAggregate';
  id?: Maybe<Scalars['Int']['output']>;
};

export type GenresSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type GenresUpdateInput = {
  genre?: InputMaybe<StringFieldUpdateOperationsInput>;
  movie_genres?: InputMaybe<Movie_GenresUpdateManyWithoutGenresNestedInput>;
};

export type GenresUpdateManyMutationInput = {
  genre?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type GenresUpdateOneRequiredWithoutMovie_GenresNestedInput = {
  connect?: InputMaybe<GenresWhereUniqueInput>;
  connectOrCreate?: InputMaybe<GenresCreateOrConnectWithoutMovie_GenresInput>;
  create?: InputMaybe<GenresCreateWithoutMovie_GenresInput>;
  update?: InputMaybe<GenresUpdateWithoutMovie_GenresInput>;
  upsert?: InputMaybe<GenresUpsertWithoutMovie_GenresInput>;
};

export type GenresUpdateWithoutMovie_GenresInput = {
  genre?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type GenresUpsertWithoutMovie_GenresInput = {
  create: GenresCreateWithoutMovie_GenresInput;
  update: GenresUpdateWithoutMovie_GenresInput;
};

export type GenresWhereInput = {
  AND?: InputMaybe<Array<GenresWhereInput>>;
  NOT?: InputMaybe<Array<GenresWhereInput>>;
  OR?: InputMaybe<Array<GenresWhereInput>>;
  genre?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  movie_genres?: InputMaybe<Movie_GenresListRelationFilter>;
};

export type GenresWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

export type IntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']['input']>;
  divide?: InputMaybe<Scalars['Int']['input']>;
  increment?: InputMaybe<Scalars['Int']['input']>;
  multiply?: InputMaybe<Scalars['Int']['input']>;
  set?: InputMaybe<Scalars['Int']['input']>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type IntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type IntNullableWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatNullableFilter>;
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedIntNullableFilter>;
  _min?: InputMaybe<NestedIntNullableFilter>;
  _sum?: InputMaybe<NestedIntNullableFilter>;
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type IntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type Movie_Genres = {
  __typename?: 'Movie_genres';
  genre_id: Scalars['Int']['output'];
  genres: Genres;
  movie_id: Scalars['Int']['output'];
  movies: Movies;
};

export type Movie_GenresAvgAggregate = {
  __typename?: 'Movie_genresAvgAggregate';
  genre_id?: Maybe<Scalars['Float']['output']>;
  movie_id?: Maybe<Scalars['Float']['output']>;
};

export type Movie_GenresAvgOrderByAggregateInput = {
  genre_id?: InputMaybe<SortOrder>;
  movie_id?: InputMaybe<SortOrder>;
};

export type Movie_GenresCountAggregate = {
  __typename?: 'Movie_genresCountAggregate';
  _all: Scalars['Int']['output'];
  genre_id: Scalars['Int']['output'];
  movie_id: Scalars['Int']['output'];
};

export type Movie_GenresCountOrderByAggregateInput = {
  genre_id?: InputMaybe<SortOrder>;
  movie_id?: InputMaybe<SortOrder>;
};

export type Movie_GenresCreateInput = {
  genres: GenresCreateNestedOneWithoutMovie_GenresInput;
  movies: MoviesCreateNestedOneWithoutMovie_GenresInput;
};

export type Movie_GenresCreateManyGenresInput = {
  movie_id: Scalars['Int']['input'];
};

export type Movie_GenresCreateManyGenresInputEnvelope = {
  data: Array<Movie_GenresCreateManyGenresInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Movie_GenresCreateManyInput = {
  genre_id: Scalars['Int']['input'];
  movie_id: Scalars['Int']['input'];
};

export type Movie_GenresCreateManyMoviesInput = {
  genre_id: Scalars['Int']['input'];
};

export type Movie_GenresCreateManyMoviesInputEnvelope = {
  data: Array<Movie_GenresCreateManyMoviesInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Movie_GenresCreateNestedManyWithoutGenresInput = {
  connect?: InputMaybe<Array<Movie_GenresWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<Movie_GenresCreateOrConnectWithoutGenresInput>>;
  create?: InputMaybe<Array<Movie_GenresCreateWithoutGenresInput>>;
  createMany?: InputMaybe<Movie_GenresCreateManyGenresInputEnvelope>;
};

export type Movie_GenresCreateNestedManyWithoutMoviesInput = {
  connect?: InputMaybe<Array<Movie_GenresWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<Movie_GenresCreateOrConnectWithoutMoviesInput>>;
  create?: InputMaybe<Array<Movie_GenresCreateWithoutMoviesInput>>;
  createMany?: InputMaybe<Movie_GenresCreateManyMoviesInputEnvelope>;
};

export type Movie_GenresCreateOrConnectWithoutGenresInput = {
  create: Movie_GenresCreateWithoutGenresInput;
  where: Movie_GenresWhereUniqueInput;
};

export type Movie_GenresCreateOrConnectWithoutMoviesInput = {
  create: Movie_GenresCreateWithoutMoviesInput;
  where: Movie_GenresWhereUniqueInput;
};

export type Movie_GenresCreateWithoutGenresInput = {
  movies: MoviesCreateNestedOneWithoutMovie_GenresInput;
};

export type Movie_GenresCreateWithoutMoviesInput = {
  genres: GenresCreateNestedOneWithoutMovie_GenresInput;
};

export type Movie_GenresGroupBy = {
  __typename?: 'Movie_genresGroupBy';
  _avg?: Maybe<Movie_GenresAvgAggregate>;
  _count?: Maybe<Movie_GenresCountAggregate>;
  _max?: Maybe<Movie_GenresMaxAggregate>;
  _min?: Maybe<Movie_GenresMinAggregate>;
  _sum?: Maybe<Movie_GenresSumAggregate>;
  genre_id: Scalars['Int']['output'];
  movie_id: Scalars['Int']['output'];
};

export type Movie_GenresListRelationFilter = {
  every?: InputMaybe<Movie_GenresWhereInput>;
  none?: InputMaybe<Movie_GenresWhereInput>;
  some?: InputMaybe<Movie_GenresWhereInput>;
};

export type Movie_GenresMaxAggregate = {
  __typename?: 'Movie_genresMaxAggregate';
  genre_id?: Maybe<Scalars['Int']['output']>;
  movie_id?: Maybe<Scalars['Int']['output']>;
};

export type Movie_GenresMaxOrderByAggregateInput = {
  genre_id?: InputMaybe<SortOrder>;
  movie_id?: InputMaybe<SortOrder>;
};

export type Movie_GenresMinAggregate = {
  __typename?: 'Movie_genresMinAggregate';
  genre_id?: Maybe<Scalars['Int']['output']>;
  movie_id?: Maybe<Scalars['Int']['output']>;
};

export type Movie_GenresMinOrderByAggregateInput = {
  genre_id?: InputMaybe<SortOrder>;
  movie_id?: InputMaybe<SortOrder>;
};

export type Movie_GenresOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type Movie_GenresOrderByWithAggregationInput = {
  _avg?: InputMaybe<Movie_GenresAvgOrderByAggregateInput>;
  _count?: InputMaybe<Movie_GenresCountOrderByAggregateInput>;
  _max?: InputMaybe<Movie_GenresMaxOrderByAggregateInput>;
  _min?: InputMaybe<Movie_GenresMinOrderByAggregateInput>;
  _sum?: InputMaybe<Movie_GenresSumOrderByAggregateInput>;
  genre_id?: InputMaybe<SortOrder>;
  movie_id?: InputMaybe<SortOrder>;
};

export type Movie_GenresOrderByWithRelationInput = {
  genre_id?: InputMaybe<SortOrder>;
  genres?: InputMaybe<GenresOrderByWithRelationInput>;
  movie_id?: InputMaybe<SortOrder>;
  movies?: InputMaybe<MoviesOrderByWithRelationInput>;
};

export enum Movie_GenresScalarFieldEnum {
  GenreId = 'genre_id',
  MovieId = 'movie_id'
}

export type Movie_GenresScalarWhereInput = {
  AND?: InputMaybe<Array<Movie_GenresScalarWhereInput>>;
  NOT?: InputMaybe<Array<Movie_GenresScalarWhereInput>>;
  OR?: InputMaybe<Array<Movie_GenresScalarWhereInput>>;
  genre_id?: InputMaybe<IntFilter>;
  movie_id?: InputMaybe<IntFilter>;
};

export type Movie_GenresScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<Movie_GenresScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<Movie_GenresScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<Movie_GenresScalarWhereWithAggregatesInput>>;
  genre_id?: InputMaybe<IntWithAggregatesFilter>;
  movie_id?: InputMaybe<IntWithAggregatesFilter>;
};

export type Movie_GenresSumAggregate = {
  __typename?: 'Movie_genresSumAggregate';
  genre_id?: Maybe<Scalars['Int']['output']>;
  movie_id?: Maybe<Scalars['Int']['output']>;
};

export type Movie_GenresSumOrderByAggregateInput = {
  genre_id?: InputMaybe<SortOrder>;
  movie_id?: InputMaybe<SortOrder>;
};

export type Movie_GenresUpdateInput = {
  genres?: InputMaybe<GenresUpdateOneRequiredWithoutMovie_GenresNestedInput>;
  movies?: InputMaybe<MoviesUpdateOneRequiredWithoutMovie_GenresNestedInput>;
};

export type Movie_GenresUpdateManyWithWhereWithoutGenresInput = {
  where: Movie_GenresScalarWhereInput;
};

export type Movie_GenresUpdateManyWithWhereWithoutMoviesInput = {
  where: Movie_GenresScalarWhereInput;
};

export type Movie_GenresUpdateManyWithoutGenresNestedInput = {
  connect?: InputMaybe<Array<Movie_GenresWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<Movie_GenresCreateOrConnectWithoutGenresInput>>;
  create?: InputMaybe<Array<Movie_GenresCreateWithoutGenresInput>>;
  createMany?: InputMaybe<Movie_GenresCreateManyGenresInputEnvelope>;
  delete?: InputMaybe<Array<Movie_GenresWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<Movie_GenresScalarWhereInput>>;
  disconnect?: InputMaybe<Array<Movie_GenresWhereUniqueInput>>;
  set?: InputMaybe<Array<Movie_GenresWhereUniqueInput>>;
  update?: InputMaybe<Array<Movie_GenresUpdateWithWhereUniqueWithoutGenresInput>>;
  updateMany?: InputMaybe<Array<Movie_GenresUpdateManyWithWhereWithoutGenresInput>>;
  upsert?: InputMaybe<Array<Movie_GenresUpsertWithWhereUniqueWithoutGenresInput>>;
};

export type Movie_GenresUpdateManyWithoutMoviesNestedInput = {
  connect?: InputMaybe<Array<Movie_GenresWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<Movie_GenresCreateOrConnectWithoutMoviesInput>>;
  create?: InputMaybe<Array<Movie_GenresCreateWithoutMoviesInput>>;
  createMany?: InputMaybe<Movie_GenresCreateManyMoviesInputEnvelope>;
  delete?: InputMaybe<Array<Movie_GenresWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<Movie_GenresScalarWhereInput>>;
  disconnect?: InputMaybe<Array<Movie_GenresWhereUniqueInput>>;
  set?: InputMaybe<Array<Movie_GenresWhereUniqueInput>>;
  update?: InputMaybe<Array<Movie_GenresUpdateWithWhereUniqueWithoutMoviesInput>>;
  updateMany?: InputMaybe<Array<Movie_GenresUpdateManyWithWhereWithoutMoviesInput>>;
  upsert?: InputMaybe<Array<Movie_GenresUpsertWithWhereUniqueWithoutMoviesInput>>;
};

export type Movie_GenresUpdateWithWhereUniqueWithoutGenresInput = {
  data: Movie_GenresUpdateWithoutGenresInput;
  where: Movie_GenresWhereUniqueInput;
};

export type Movie_GenresUpdateWithWhereUniqueWithoutMoviesInput = {
  data: Movie_GenresUpdateWithoutMoviesInput;
  where: Movie_GenresWhereUniqueInput;
};

export type Movie_GenresUpdateWithoutGenresInput = {
  movies?: InputMaybe<MoviesUpdateOneRequiredWithoutMovie_GenresNestedInput>;
};

export type Movie_GenresUpdateWithoutMoviesInput = {
  genres?: InputMaybe<GenresUpdateOneRequiredWithoutMovie_GenresNestedInput>;
};

export type Movie_GenresUpsertWithWhereUniqueWithoutGenresInput = {
  create: Movie_GenresCreateWithoutGenresInput;
  update: Movie_GenresUpdateWithoutGenresInput;
  where: Movie_GenresWhereUniqueInput;
};

export type Movie_GenresUpsertWithWhereUniqueWithoutMoviesInput = {
  create: Movie_GenresCreateWithoutMoviesInput;
  update: Movie_GenresUpdateWithoutMoviesInput;
  where: Movie_GenresWhereUniqueInput;
};

export type Movie_GenresWhereInput = {
  AND?: InputMaybe<Array<Movie_GenresWhereInput>>;
  NOT?: InputMaybe<Array<Movie_GenresWhereInput>>;
  OR?: InputMaybe<Array<Movie_GenresWhereInput>>;
  genre_id?: InputMaybe<IntFilter>;
  genres?: InputMaybe<GenresRelationFilter>;
  movie_id?: InputMaybe<IntFilter>;
  movies?: InputMaybe<MoviesRelationFilter>;
};

export type Movie_GenresWhereUniqueInput = {
  movie_id_genre_id?: InputMaybe<Movie_GenresMovie_IdGenre_IdCompoundUniqueInput>;
};

export type Movies = {
  __typename?: 'Movies';
  _count?: Maybe<MoviesCount>;
  backdrop_path?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  movie_genres: Array<Movie_Genres>;
  overview?: Maybe<Scalars['String']['output']>;
  popularity?: Maybe<Scalars['Decimal']['output']>;
  poster_path?: Maybe<Scalars['String']['output']>;
  ratings: Array<Ratings>;
  release_date?: Maybe<Scalars['DateTime']['output']>;
  runtime?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  vote_average?: Maybe<Scalars['Decimal']['output']>;
  vote_count?: Maybe<Scalars['Int']['output']>;
};


export type MoviesMovie_GenresArgs = {
  cursor?: InputMaybe<Movie_GenresWhereUniqueInput>;
  distinct?: InputMaybe<Array<Movie_GenresScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<Movie_GenresOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Movie_GenresWhereInput>;
};


export type MoviesRatingsArgs = {
  cursor?: InputMaybe<RatingsWhereUniqueInput>;
  distinct?: InputMaybe<Array<RatingsScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<RatingsOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<RatingsWhereInput>;
};

export type MoviesAvgAggregate = {
  __typename?: 'MoviesAvgAggregate';
  id?: Maybe<Scalars['Float']['output']>;
  popularity?: Maybe<Scalars['Decimal']['output']>;
  runtime?: Maybe<Scalars['Float']['output']>;
  vote_average?: Maybe<Scalars['Decimal']['output']>;
  vote_count?: Maybe<Scalars['Float']['output']>;
};

export type MoviesAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  popularity?: InputMaybe<SortOrder>;
  runtime?: InputMaybe<SortOrder>;
  vote_average?: InputMaybe<SortOrder>;
  vote_count?: InputMaybe<SortOrder>;
};

export type MoviesCount = {
  __typename?: 'MoviesCount';
  movie_genres: Scalars['Int']['output'];
  ratings: Scalars['Int']['output'];
};


export type MoviesCountMovie_GenresArgs = {
  where?: InputMaybe<Movie_GenresWhereInput>;
};


export type MoviesCountRatingsArgs = {
  where?: InputMaybe<RatingsWhereInput>;
};

export type MoviesCountAggregate = {
  __typename?: 'MoviesCountAggregate';
  _all: Scalars['Int']['output'];
  backdrop_path: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  overview: Scalars['Int']['output'];
  popularity: Scalars['Int']['output'];
  poster_path: Scalars['Int']['output'];
  release_date: Scalars['Int']['output'];
  runtime: Scalars['Int']['output'];
  title: Scalars['Int']['output'];
  vote_average: Scalars['Int']['output'];
  vote_count: Scalars['Int']['output'];
};

export type MoviesCountOrderByAggregateInput = {
  backdrop_path?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  overview?: InputMaybe<SortOrder>;
  popularity?: InputMaybe<SortOrder>;
  poster_path?: InputMaybe<SortOrder>;
  release_date?: InputMaybe<SortOrder>;
  runtime?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  vote_average?: InputMaybe<SortOrder>;
  vote_count?: InputMaybe<SortOrder>;
};

export type MoviesCreateInput = {
  backdrop_path?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  movie_genres?: InputMaybe<Movie_GenresCreateNestedManyWithoutMoviesInput>;
  overview?: InputMaybe<Scalars['String']['input']>;
  popularity?: InputMaybe<Scalars['Decimal']['input']>;
  poster_path?: InputMaybe<Scalars['String']['input']>;
  ratings?: InputMaybe<RatingsCreateNestedManyWithoutMoviesInput>;
  release_date?: InputMaybe<Scalars['DateTime']['input']>;
  runtime?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  vote_average?: InputMaybe<Scalars['Decimal']['input']>;
  vote_count?: InputMaybe<Scalars['Int']['input']>;
};

export type MoviesCreateManyInput = {
  backdrop_path?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  overview?: InputMaybe<Scalars['String']['input']>;
  popularity?: InputMaybe<Scalars['Decimal']['input']>;
  poster_path?: InputMaybe<Scalars['String']['input']>;
  release_date?: InputMaybe<Scalars['DateTime']['input']>;
  runtime?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  vote_average?: InputMaybe<Scalars['Decimal']['input']>;
  vote_count?: InputMaybe<Scalars['Int']['input']>;
};

export type MoviesCreateNestedOneWithoutMovie_GenresInput = {
  connect?: InputMaybe<MoviesWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MoviesCreateOrConnectWithoutMovie_GenresInput>;
  create?: InputMaybe<MoviesCreateWithoutMovie_GenresInput>;
};

export type MoviesCreateNestedOneWithoutRatingsInput = {
  connect?: InputMaybe<MoviesWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MoviesCreateOrConnectWithoutRatingsInput>;
  create?: InputMaybe<MoviesCreateWithoutRatingsInput>;
};

export type MoviesCreateOrConnectWithoutMovie_GenresInput = {
  create: MoviesCreateWithoutMovie_GenresInput;
  where: MoviesWhereUniqueInput;
};

export type MoviesCreateOrConnectWithoutRatingsInput = {
  create: MoviesCreateWithoutRatingsInput;
  where: MoviesWhereUniqueInput;
};

export type MoviesCreateWithoutMovie_GenresInput = {
  backdrop_path?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  overview?: InputMaybe<Scalars['String']['input']>;
  popularity?: InputMaybe<Scalars['Decimal']['input']>;
  poster_path?: InputMaybe<Scalars['String']['input']>;
  ratings?: InputMaybe<RatingsCreateNestedManyWithoutMoviesInput>;
  release_date?: InputMaybe<Scalars['DateTime']['input']>;
  runtime?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  vote_average?: InputMaybe<Scalars['Decimal']['input']>;
  vote_count?: InputMaybe<Scalars['Int']['input']>;
};

export type MoviesCreateWithoutRatingsInput = {
  backdrop_path?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  movie_genres?: InputMaybe<Movie_GenresCreateNestedManyWithoutMoviesInput>;
  overview?: InputMaybe<Scalars['String']['input']>;
  popularity?: InputMaybe<Scalars['Decimal']['input']>;
  poster_path?: InputMaybe<Scalars['String']['input']>;
  release_date?: InputMaybe<Scalars['DateTime']['input']>;
  runtime?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  vote_average?: InputMaybe<Scalars['Decimal']['input']>;
  vote_count?: InputMaybe<Scalars['Int']['input']>;
};

export type MoviesGroupBy = {
  __typename?: 'MoviesGroupBy';
  _avg?: Maybe<MoviesAvgAggregate>;
  _count?: Maybe<MoviesCountAggregate>;
  _max?: Maybe<MoviesMaxAggregate>;
  _min?: Maybe<MoviesMinAggregate>;
  _sum?: Maybe<MoviesSumAggregate>;
  backdrop_path?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  overview?: Maybe<Scalars['String']['output']>;
  popularity?: Maybe<Scalars['Decimal']['output']>;
  poster_path?: Maybe<Scalars['String']['output']>;
  release_date?: Maybe<Scalars['DateTime']['output']>;
  runtime?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  vote_average?: Maybe<Scalars['Decimal']['output']>;
  vote_count?: Maybe<Scalars['Int']['output']>;
};

export type MoviesMaxAggregate = {
  __typename?: 'MoviesMaxAggregate';
  backdrop_path?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  overview?: Maybe<Scalars['String']['output']>;
  popularity?: Maybe<Scalars['Decimal']['output']>;
  poster_path?: Maybe<Scalars['String']['output']>;
  release_date?: Maybe<Scalars['DateTime']['output']>;
  runtime?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  vote_average?: Maybe<Scalars['Decimal']['output']>;
  vote_count?: Maybe<Scalars['Int']['output']>;
};

export type MoviesMaxOrderByAggregateInput = {
  backdrop_path?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  overview?: InputMaybe<SortOrder>;
  popularity?: InputMaybe<SortOrder>;
  poster_path?: InputMaybe<SortOrder>;
  release_date?: InputMaybe<SortOrder>;
  runtime?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  vote_average?: InputMaybe<SortOrder>;
  vote_count?: InputMaybe<SortOrder>;
};

export type MoviesMinAggregate = {
  __typename?: 'MoviesMinAggregate';
  backdrop_path?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  overview?: Maybe<Scalars['String']['output']>;
  popularity?: Maybe<Scalars['Decimal']['output']>;
  poster_path?: Maybe<Scalars['String']['output']>;
  release_date?: Maybe<Scalars['DateTime']['output']>;
  runtime?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  vote_average?: Maybe<Scalars['Decimal']['output']>;
  vote_count?: Maybe<Scalars['Int']['output']>;
};

export type MoviesMinOrderByAggregateInput = {
  backdrop_path?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  overview?: InputMaybe<SortOrder>;
  popularity?: InputMaybe<SortOrder>;
  poster_path?: InputMaybe<SortOrder>;
  release_date?: InputMaybe<SortOrder>;
  runtime?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  vote_average?: InputMaybe<SortOrder>;
  vote_count?: InputMaybe<SortOrder>;
};

export type MoviesOrderByWithAggregationInput = {
  _avg?: InputMaybe<MoviesAvgOrderByAggregateInput>;
  _count?: InputMaybe<MoviesCountOrderByAggregateInput>;
  _max?: InputMaybe<MoviesMaxOrderByAggregateInput>;
  _min?: InputMaybe<MoviesMinOrderByAggregateInput>;
  _sum?: InputMaybe<MoviesSumOrderByAggregateInput>;
  backdrop_path?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  overview?: InputMaybe<SortOrderInput>;
  popularity?: InputMaybe<SortOrderInput>;
  poster_path?: InputMaybe<SortOrderInput>;
  release_date?: InputMaybe<SortOrderInput>;
  runtime?: InputMaybe<SortOrderInput>;
  title?: InputMaybe<SortOrderInput>;
  vote_average?: InputMaybe<SortOrderInput>;
  vote_count?: InputMaybe<SortOrderInput>;
};

export type MoviesOrderByWithRelationInput = {
  backdrop_path?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  movie_genres?: InputMaybe<Movie_GenresOrderByRelationAggregateInput>;
  overview?: InputMaybe<SortOrderInput>;
  popularity?: InputMaybe<SortOrderInput>;
  poster_path?: InputMaybe<SortOrderInput>;
  ratings?: InputMaybe<RatingsOrderByRelationAggregateInput>;
  release_date?: InputMaybe<SortOrderInput>;
  runtime?: InputMaybe<SortOrderInput>;
  title?: InputMaybe<SortOrderInput>;
  vote_average?: InputMaybe<SortOrderInput>;
  vote_count?: InputMaybe<SortOrderInput>;
};

export type MoviesRelationFilter = {
  is?: InputMaybe<MoviesWhereInput>;
  isNot?: InputMaybe<MoviesWhereInput>;
};

export enum MoviesScalarFieldEnum {
  BackdropPath = 'backdrop_path',
  Id = 'id',
  Overview = 'overview',
  Popularity = 'popularity',
  PosterPath = 'poster_path',
  ReleaseDate = 'release_date',
  Runtime = 'runtime',
  Title = 'title',
  VoteAverage = 'vote_average',
  VoteCount = 'vote_count'
}

export type MoviesScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<MoviesScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<MoviesScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<MoviesScalarWhereWithAggregatesInput>>;
  backdrop_path?: InputMaybe<StringNullableWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  overview?: InputMaybe<StringNullableWithAggregatesFilter>;
  popularity?: InputMaybe<DecimalNullableWithAggregatesFilter>;
  poster_path?: InputMaybe<StringNullableWithAggregatesFilter>;
  release_date?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  runtime?: InputMaybe<IntNullableWithAggregatesFilter>;
  title?: InputMaybe<StringNullableWithAggregatesFilter>;
  vote_average?: InputMaybe<DecimalNullableWithAggregatesFilter>;
  vote_count?: InputMaybe<IntNullableWithAggregatesFilter>;
};

export type MoviesSumAggregate = {
  __typename?: 'MoviesSumAggregate';
  id?: Maybe<Scalars['Int']['output']>;
  popularity?: Maybe<Scalars['Decimal']['output']>;
  runtime?: Maybe<Scalars['Int']['output']>;
  vote_average?: Maybe<Scalars['Decimal']['output']>;
  vote_count?: Maybe<Scalars['Int']['output']>;
};

export type MoviesSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  popularity?: InputMaybe<SortOrder>;
  runtime?: InputMaybe<SortOrder>;
  vote_average?: InputMaybe<SortOrder>;
  vote_count?: InputMaybe<SortOrder>;
};

export type MoviesUpdateInput = {
  backdrop_path?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  movie_genres?: InputMaybe<Movie_GenresUpdateManyWithoutMoviesNestedInput>;
  overview?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  popularity?: InputMaybe<NullableDecimalFieldUpdateOperationsInput>;
  poster_path?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  ratings?: InputMaybe<RatingsUpdateManyWithoutMoviesNestedInput>;
  release_date?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  runtime?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  title?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  vote_average?: InputMaybe<NullableDecimalFieldUpdateOperationsInput>;
  vote_count?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
};

export type MoviesUpdateManyMutationInput = {
  backdrop_path?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  overview?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  popularity?: InputMaybe<NullableDecimalFieldUpdateOperationsInput>;
  poster_path?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  release_date?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  runtime?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  title?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  vote_average?: InputMaybe<NullableDecimalFieldUpdateOperationsInput>;
  vote_count?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
};

export type MoviesUpdateOneRequiredWithoutMovie_GenresNestedInput = {
  connect?: InputMaybe<MoviesWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MoviesCreateOrConnectWithoutMovie_GenresInput>;
  create?: InputMaybe<MoviesCreateWithoutMovie_GenresInput>;
  update?: InputMaybe<MoviesUpdateWithoutMovie_GenresInput>;
  upsert?: InputMaybe<MoviesUpsertWithoutMovie_GenresInput>;
};

export type MoviesUpdateOneRequiredWithoutRatingsNestedInput = {
  connect?: InputMaybe<MoviesWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MoviesCreateOrConnectWithoutRatingsInput>;
  create?: InputMaybe<MoviesCreateWithoutRatingsInput>;
  update?: InputMaybe<MoviesUpdateWithoutRatingsInput>;
  upsert?: InputMaybe<MoviesUpsertWithoutRatingsInput>;
};

export type MoviesUpdateWithoutMovie_GenresInput = {
  backdrop_path?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  overview?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  popularity?: InputMaybe<NullableDecimalFieldUpdateOperationsInput>;
  poster_path?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  ratings?: InputMaybe<RatingsUpdateManyWithoutMoviesNestedInput>;
  release_date?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  runtime?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  title?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  vote_average?: InputMaybe<NullableDecimalFieldUpdateOperationsInput>;
  vote_count?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
};

export type MoviesUpdateWithoutRatingsInput = {
  backdrop_path?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  movie_genres?: InputMaybe<Movie_GenresUpdateManyWithoutMoviesNestedInput>;
  overview?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  popularity?: InputMaybe<NullableDecimalFieldUpdateOperationsInput>;
  poster_path?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  release_date?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  runtime?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  title?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  vote_average?: InputMaybe<NullableDecimalFieldUpdateOperationsInput>;
  vote_count?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
};

export type MoviesUpsertWithoutMovie_GenresInput = {
  create: MoviesCreateWithoutMovie_GenresInput;
  update: MoviesUpdateWithoutMovie_GenresInput;
};

export type MoviesUpsertWithoutRatingsInput = {
  create: MoviesCreateWithoutRatingsInput;
  update: MoviesUpdateWithoutRatingsInput;
};

export type MoviesWhereInput = {
  AND?: InputMaybe<Array<MoviesWhereInput>>;
  NOT?: InputMaybe<Array<MoviesWhereInput>>;
  OR?: InputMaybe<Array<MoviesWhereInput>>;
  backdrop_path?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<IntFilter>;
  movie_genres?: InputMaybe<Movie_GenresListRelationFilter>;
  overview?: InputMaybe<StringNullableFilter>;
  popularity?: InputMaybe<DecimalNullableFilter>;
  poster_path?: InputMaybe<StringNullableFilter>;
  ratings?: InputMaybe<RatingsListRelationFilter>;
  release_date?: InputMaybe<DateTimeNullableFilter>;
  runtime?: InputMaybe<IntNullableFilter>;
  title?: InputMaybe<StringNullableFilter>;
  vote_average?: InputMaybe<DecimalNullableFilter>;
  vote_count?: InputMaybe<IntNullableFilter>;
};

export type MoviesWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createManyGenres: AffectedRowsOutput;
  createManyMovie_genres: AffectedRowsOutput;
  createManyMovies: AffectedRowsOutput;
  createManyRatings: AffectedRowsOutput;
  createManyUsers: AffectedRowsOutput;
  createOneGenres: Genres;
  createOneMovie_genres: Movie_Genres;
  createOneMovies: Movies;
  createOneRatings: Ratings;
  createOneUsers: Users;
  deleteManyGenres: AffectedRowsOutput;
  deleteManyMovie_genres: AffectedRowsOutput;
  deleteManyMovies: AffectedRowsOutput;
  deleteManyRatings: AffectedRowsOutput;
  deleteManyUsers: AffectedRowsOutput;
  deleteOneGenres?: Maybe<Genres>;
  deleteOneMovie_genres?: Maybe<Movie_Genres>;
  deleteOneMovies?: Maybe<Movies>;
  deleteOneRatings?: Maybe<Ratings>;
  deleteOneUsers?: Maybe<Users>;
  updateManyGenres: AffectedRowsOutput;
  updateManyMovie_genres: AffectedRowsOutput;
  updateManyMovies: AffectedRowsOutput;
  updateManyRatings: AffectedRowsOutput;
  updateManyUsers: AffectedRowsOutput;
  updateOneGenres?: Maybe<Genres>;
  updateOneMovie_genres?: Maybe<Movie_Genres>;
  updateOneMovies?: Maybe<Movies>;
  updateOneRatings?: Maybe<Ratings>;
  updateOneUsers?: Maybe<Users>;
  upsertOneGenres: Genres;
  upsertOneMovie_genres: Movie_Genres;
  upsertOneMovies: Movies;
  upsertOneRatings: Ratings;
  upsertOneUsers: Users;
};


export type MutationCreateManyGenresArgs = {
  data: Array<GenresCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyMovie_GenresArgs = {
  data: Array<Movie_GenresCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyMoviesArgs = {
  data: Array<MoviesCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyRatingsArgs = {
  data: Array<RatingsCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyUsersArgs = {
  data: Array<UsersCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateOneGenresArgs = {
  data: GenresCreateInput;
};


export type MutationCreateOneMovie_GenresArgs = {
  data: Movie_GenresCreateInput;
};


export type MutationCreateOneMoviesArgs = {
  data: MoviesCreateInput;
};


export type MutationCreateOneRatingsArgs = {
  data: RatingsCreateInput;
};


export type MutationCreateOneUsersArgs = {
  data: UsersCreateInput;
};


export type MutationDeleteManyGenresArgs = {
  where?: InputMaybe<GenresWhereInput>;
};


export type MutationDeleteManyMovie_GenresArgs = {
  where?: InputMaybe<Movie_GenresWhereInput>;
};


export type MutationDeleteManyMoviesArgs = {
  where?: InputMaybe<MoviesWhereInput>;
};


export type MutationDeleteManyRatingsArgs = {
  where?: InputMaybe<RatingsWhereInput>;
};


export type MutationDeleteManyUsersArgs = {
  where?: InputMaybe<UsersWhereInput>;
};


export type MutationDeleteOneGenresArgs = {
  where: GenresWhereUniqueInput;
};


export type MutationDeleteOneMovie_GenresArgs = {
  where: Movie_GenresWhereUniqueInput;
};


export type MutationDeleteOneMoviesArgs = {
  where: MoviesWhereUniqueInput;
};


export type MutationDeleteOneRatingsArgs = {
  where: RatingsWhereUniqueInput;
};


export type MutationDeleteOneUsersArgs = {
  where: UsersWhereUniqueInput;
};


export type MutationUpdateManyGenresArgs = {
  data: GenresUpdateManyMutationInput;
  where?: InputMaybe<GenresWhereInput>;
};


export type MutationUpdateManyMovie_GenresArgs = {
  where?: InputMaybe<Movie_GenresWhereInput>;
};


export type MutationUpdateManyMoviesArgs = {
  data: MoviesUpdateManyMutationInput;
  where?: InputMaybe<MoviesWhereInput>;
};


export type MutationUpdateManyRatingsArgs = {
  data: RatingsUpdateManyMutationInput;
  where?: InputMaybe<RatingsWhereInput>;
};


export type MutationUpdateManyUsersArgs = {
  data: UsersUpdateManyMutationInput;
  where?: InputMaybe<UsersWhereInput>;
};


export type MutationUpdateOneGenresArgs = {
  data: GenresUpdateInput;
  where: GenresWhereUniqueInput;
};


export type MutationUpdateOneMovie_GenresArgs = {
  data: Movie_GenresUpdateInput;
  where: Movie_GenresWhereUniqueInput;
};


export type MutationUpdateOneMoviesArgs = {
  data: MoviesUpdateInput;
  where: MoviesWhereUniqueInput;
};


export type MutationUpdateOneRatingsArgs = {
  data: RatingsUpdateInput;
  where: RatingsWhereUniqueInput;
};


export type MutationUpdateOneUsersArgs = {
  data: UsersUpdateInput;
  where: UsersWhereUniqueInput;
};


export type MutationUpsertOneGenresArgs = {
  create: GenresCreateInput;
  update: GenresUpdateInput;
  where: GenresWhereUniqueInput;
};


export type MutationUpsertOneMovie_GenresArgs = {
  create: Movie_GenresCreateInput;
  update: Movie_GenresUpdateInput;
  where: Movie_GenresWhereUniqueInput;
};


export type MutationUpsertOneMoviesArgs = {
  create: MoviesCreateInput;
  update: MoviesUpdateInput;
  where: MoviesWhereUniqueInput;
};


export type MutationUpsertOneRatingsArgs = {
  create: RatingsCreateInput;
  update: RatingsUpdateInput;
  where: RatingsWhereUniqueInput;
};


export type MutationUpsertOneUsersArgs = {
  create: UsersCreateInput;
  update: UsersUpdateInput;
  where: UsersWhereUniqueInput;
};

export type NestedDateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type NestedDateTimeNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedDateTimeNullableFilter>;
  _min?: InputMaybe<NestedDateTimeNullableFilter>;
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type NestedDecimalNullableFilter = {
  equals?: InputMaybe<Scalars['Decimal']['input']>;
  gt?: InputMaybe<Scalars['Decimal']['input']>;
  gte?: InputMaybe<Scalars['Decimal']['input']>;
  in?: InputMaybe<Array<Scalars['Decimal']['input']>>;
  lt?: InputMaybe<Scalars['Decimal']['input']>;
  lte?: InputMaybe<Scalars['Decimal']['input']>;
  not?: InputMaybe<NestedDecimalNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Decimal']['input']>>;
};

export type NestedDecimalNullableWithAggregatesFilter = {
  _avg?: InputMaybe<NestedDecimalNullableFilter>;
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedDecimalNullableFilter>;
  _min?: InputMaybe<NestedDecimalNullableFilter>;
  _sum?: InputMaybe<NestedDecimalNullableFilter>;
  equals?: InputMaybe<Scalars['Decimal']['input']>;
  gt?: InputMaybe<Scalars['Decimal']['input']>;
  gte?: InputMaybe<Scalars['Decimal']['input']>;
  in?: InputMaybe<Array<Scalars['Decimal']['input']>>;
  lt?: InputMaybe<Scalars['Decimal']['input']>;
  lte?: InputMaybe<Scalars['Decimal']['input']>;
  not?: InputMaybe<NestedDecimalNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Decimal']['input']>>;
};

export type NestedFloatFilter = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type NestedFloatNullableFilter = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<NestedFloatNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type NestedFloatWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedFloatFilter>;
  _min?: InputMaybe<NestedFloatFilter>;
  _sum?: InputMaybe<NestedFloatFilter>;
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<NestedFloatWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedIntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedIntNullableWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatNullableFilter>;
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedIntNullableFilter>;
  _min?: InputMaybe<NestedIntNullableFilter>;
  _sum?: InputMaybe<NestedIntNullableFilter>;
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedIntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NullableDateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']['input']>;
};

export type NullableDecimalFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Decimal']['input']>;
  divide?: InputMaybe<Scalars['Decimal']['input']>;
  increment?: InputMaybe<Scalars['Decimal']['input']>;
  multiply?: InputMaybe<Scalars['Decimal']['input']>;
  set?: InputMaybe<Scalars['Decimal']['input']>;
};

export type NullableIntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']['input']>;
  divide?: InputMaybe<Scalars['Int']['input']>;
  increment?: InputMaybe<Scalars['Int']['input']>;
  multiply?: InputMaybe<Scalars['Int']['input']>;
  set?: InputMaybe<Scalars['Int']['input']>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']['input']>;
};

export enum NullsOrder {
  First = 'first',
  Last = 'last'
}

export type Query = {
  __typename?: 'Query';
  aggregateGenres: AggregateGenres;
  aggregateMovie_genres: AggregateMovie_Genres;
  aggregateMovies: AggregateMovies;
  aggregateRatings: AggregateRatings;
  aggregateUsers: AggregateUsers;
  findFirstGenres?: Maybe<Genres>;
  findFirstGenresOrThrow?: Maybe<Genres>;
  findFirstMovie_genres?: Maybe<Movie_Genres>;
  findFirstMovie_genresOrThrow?: Maybe<Movie_Genres>;
  findFirstMovies?: Maybe<Movies>;
  findFirstMoviesOrThrow?: Maybe<Movies>;
  findFirstRatings?: Maybe<Ratings>;
  findFirstRatingsOrThrow?: Maybe<Ratings>;
  findFirstUsers?: Maybe<Users>;
  findFirstUsersOrThrow?: Maybe<Users>;
  findManyGenres: Array<Genres>;
  findManyMovie_genres: Array<Movie_Genres>;
  findManyMovies: Array<Movies>;
  findManyRatings: Array<Ratings>;
  findManyUsers: Array<Users>;
  findUniqueGenres?: Maybe<Genres>;
  findUniqueGenresOrThrow?: Maybe<Genres>;
  findUniqueMovie_genres?: Maybe<Movie_Genres>;
  findUniqueMovie_genresOrThrow?: Maybe<Movie_Genres>;
  findUniqueMovies?: Maybe<Movies>;
  findUniqueMoviesOrThrow?: Maybe<Movies>;
  findUniqueRatings?: Maybe<Ratings>;
  findUniqueRatingsOrThrow?: Maybe<Ratings>;
  findUniqueUsers?: Maybe<Users>;
  findUniqueUsersOrThrow?: Maybe<Users>;
  groupByGenres: Array<GenresGroupBy>;
  groupByMovie_genres: Array<Movie_GenresGroupBy>;
  groupByMovies: Array<MoviesGroupBy>;
  groupByRatings: Array<RatingsGroupBy>;
  groupByUsers: Array<UsersGroupBy>;
};


export type QueryAggregateGenresArgs = {
  cursor?: InputMaybe<GenresWhereUniqueInput>;
  orderBy?: InputMaybe<Array<GenresOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<GenresWhereInput>;
};


export type QueryAggregateMovie_GenresArgs = {
  cursor?: InputMaybe<Movie_GenresWhereUniqueInput>;
  orderBy?: InputMaybe<Array<Movie_GenresOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Movie_GenresWhereInput>;
};


export type QueryAggregateMoviesArgs = {
  cursor?: InputMaybe<MoviesWhereUniqueInput>;
  orderBy?: InputMaybe<Array<MoviesOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MoviesWhereInput>;
};


export type QueryAggregateRatingsArgs = {
  cursor?: InputMaybe<RatingsWhereUniqueInput>;
  orderBy?: InputMaybe<Array<RatingsOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<RatingsWhereInput>;
};


export type QueryAggregateUsersArgs = {
  cursor?: InputMaybe<UsersWhereUniqueInput>;
  orderBy?: InputMaybe<Array<UsersOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UsersWhereInput>;
};


export type QueryFindFirstGenresArgs = {
  cursor?: InputMaybe<GenresWhereUniqueInput>;
  distinct?: InputMaybe<Array<GenresScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<GenresOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<GenresWhereInput>;
};


export type QueryFindFirstGenresOrThrowArgs = {
  cursor?: InputMaybe<GenresWhereUniqueInput>;
  distinct?: InputMaybe<Array<GenresScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<GenresOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<GenresWhereInput>;
};


export type QueryFindFirstMovie_GenresArgs = {
  cursor?: InputMaybe<Movie_GenresWhereUniqueInput>;
  distinct?: InputMaybe<Array<Movie_GenresScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<Movie_GenresOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Movie_GenresWhereInput>;
};


export type QueryFindFirstMovie_GenresOrThrowArgs = {
  cursor?: InputMaybe<Movie_GenresWhereUniqueInput>;
  distinct?: InputMaybe<Array<Movie_GenresScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<Movie_GenresOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Movie_GenresWhereInput>;
};


export type QueryFindFirstMoviesArgs = {
  cursor?: InputMaybe<MoviesWhereUniqueInput>;
  distinct?: InputMaybe<Array<MoviesScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MoviesOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MoviesWhereInput>;
};


export type QueryFindFirstMoviesOrThrowArgs = {
  cursor?: InputMaybe<MoviesWhereUniqueInput>;
  distinct?: InputMaybe<Array<MoviesScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MoviesOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MoviesWhereInput>;
};


export type QueryFindFirstRatingsArgs = {
  cursor?: InputMaybe<RatingsWhereUniqueInput>;
  distinct?: InputMaybe<Array<RatingsScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<RatingsOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<RatingsWhereInput>;
};


export type QueryFindFirstRatingsOrThrowArgs = {
  cursor?: InputMaybe<RatingsWhereUniqueInput>;
  distinct?: InputMaybe<Array<RatingsScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<RatingsOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<RatingsWhereInput>;
};


export type QueryFindFirstUsersArgs = {
  cursor?: InputMaybe<UsersWhereUniqueInput>;
  distinct?: InputMaybe<Array<UsersScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UsersOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UsersWhereInput>;
};


export type QueryFindFirstUsersOrThrowArgs = {
  cursor?: InputMaybe<UsersWhereUniqueInput>;
  distinct?: InputMaybe<Array<UsersScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UsersOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UsersWhereInput>;
};


export type QueryFindManyGenresArgs = {
  cursor?: InputMaybe<GenresWhereUniqueInput>;
  distinct?: InputMaybe<Array<GenresScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<GenresOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<GenresWhereInput>;
};


export type QueryFindManyMovie_GenresArgs = {
  cursor?: InputMaybe<Movie_GenresWhereUniqueInput>;
  distinct?: InputMaybe<Array<Movie_GenresScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<Movie_GenresOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Movie_GenresWhereInput>;
};


export type QueryFindManyMoviesArgs = {
  cursor?: InputMaybe<MoviesWhereUniqueInput>;
  distinct?: InputMaybe<Array<MoviesScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MoviesOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MoviesWhereInput>;
};


export type QueryFindManyRatingsArgs = {
  cursor?: InputMaybe<RatingsWhereUniqueInput>;
  distinct?: InputMaybe<Array<RatingsScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<RatingsOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<RatingsWhereInput>;
};


export type QueryFindManyUsersArgs = {
  cursor?: InputMaybe<UsersWhereUniqueInput>;
  distinct?: InputMaybe<Array<UsersScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UsersOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UsersWhereInput>;
};


export type QueryFindUniqueGenresArgs = {
  where: GenresWhereUniqueInput;
};


export type QueryFindUniqueGenresOrThrowArgs = {
  where: GenresWhereUniqueInput;
};


export type QueryFindUniqueMovie_GenresArgs = {
  where: Movie_GenresWhereUniqueInput;
};


export type QueryFindUniqueMovie_GenresOrThrowArgs = {
  where: Movie_GenresWhereUniqueInput;
};


export type QueryFindUniqueMoviesArgs = {
  where: MoviesWhereUniqueInput;
};


export type QueryFindUniqueMoviesOrThrowArgs = {
  where: MoviesWhereUniqueInput;
};


export type QueryFindUniqueRatingsArgs = {
  where: RatingsWhereUniqueInput;
};


export type QueryFindUniqueRatingsOrThrowArgs = {
  where: RatingsWhereUniqueInput;
};


export type QueryFindUniqueUsersArgs = {
  where: UsersWhereUniqueInput;
};


export type QueryFindUniqueUsersOrThrowArgs = {
  where: UsersWhereUniqueInput;
};


export type QueryGroupByGenresArgs = {
  by: Array<GenresScalarFieldEnum>;
  having?: InputMaybe<GenresScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<GenresOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<GenresWhereInput>;
};


export type QueryGroupByMovie_GenresArgs = {
  by: Array<Movie_GenresScalarFieldEnum>;
  having?: InputMaybe<Movie_GenresScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<Movie_GenresOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Movie_GenresWhereInput>;
};


export type QueryGroupByMoviesArgs = {
  by: Array<MoviesScalarFieldEnum>;
  having?: InputMaybe<MoviesScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<MoviesOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MoviesWhereInput>;
};


export type QueryGroupByRatingsArgs = {
  by: Array<RatingsScalarFieldEnum>;
  having?: InputMaybe<RatingsScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<RatingsOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<RatingsWhereInput>;
};


export type QueryGroupByUsersArgs = {
  by: Array<UsersScalarFieldEnum>;
  having?: InputMaybe<UsersScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<UsersOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UsersWhereInput>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type Ratings = {
  __typename?: 'Ratings';
  movie_id: Scalars['Int']['output'];
  movies: Movies;
  rating: Scalars['Float']['output'];
  user_id: Scalars['Int']['output'];
  users: Users;
};

export type RatingsAvgAggregate = {
  __typename?: 'RatingsAvgAggregate';
  movie_id?: Maybe<Scalars['Float']['output']>;
  rating?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

export type RatingsAvgOrderByAggregateInput = {
  movie_id?: InputMaybe<SortOrder>;
  rating?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
};

export type RatingsCountAggregate = {
  __typename?: 'RatingsCountAggregate';
  _all: Scalars['Int']['output'];
  movie_id: Scalars['Int']['output'];
  rating: Scalars['Int']['output'];
  user_id: Scalars['Int']['output'];
};

export type RatingsCountOrderByAggregateInput = {
  movie_id?: InputMaybe<SortOrder>;
  rating?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
};

export type RatingsCreateInput = {
  movies: MoviesCreateNestedOneWithoutRatingsInput;
  rating: Scalars['Float']['input'];
  users: UsersCreateNestedOneWithoutRatingsInput;
};

export type RatingsCreateManyInput = {
  movie_id: Scalars['Int']['input'];
  rating: Scalars['Float']['input'];
  user_id: Scalars['Int']['input'];
};

export type RatingsCreateManyMoviesInput = {
  rating: Scalars['Float']['input'];
  user_id: Scalars['Int']['input'];
};

export type RatingsCreateManyMoviesInputEnvelope = {
  data: Array<RatingsCreateManyMoviesInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type RatingsCreateManyUsersInput = {
  movie_id: Scalars['Int']['input'];
  rating: Scalars['Float']['input'];
};

export type RatingsCreateManyUsersInputEnvelope = {
  data: Array<RatingsCreateManyUsersInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type RatingsCreateNestedManyWithoutMoviesInput = {
  connect?: InputMaybe<Array<RatingsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<RatingsCreateOrConnectWithoutMoviesInput>>;
  create?: InputMaybe<Array<RatingsCreateWithoutMoviesInput>>;
  createMany?: InputMaybe<RatingsCreateManyMoviesInputEnvelope>;
};

export type RatingsCreateNestedManyWithoutUsersInput = {
  connect?: InputMaybe<Array<RatingsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<RatingsCreateOrConnectWithoutUsersInput>>;
  create?: InputMaybe<Array<RatingsCreateWithoutUsersInput>>;
  createMany?: InputMaybe<RatingsCreateManyUsersInputEnvelope>;
};

export type RatingsCreateOrConnectWithoutMoviesInput = {
  create: RatingsCreateWithoutMoviesInput;
  where: RatingsWhereUniqueInput;
};

export type RatingsCreateOrConnectWithoutUsersInput = {
  create: RatingsCreateWithoutUsersInput;
  where: RatingsWhereUniqueInput;
};

export type RatingsCreateWithoutMoviesInput = {
  rating: Scalars['Float']['input'];
  users: UsersCreateNestedOneWithoutRatingsInput;
};

export type RatingsCreateWithoutUsersInput = {
  movies: MoviesCreateNestedOneWithoutRatingsInput;
  rating: Scalars['Float']['input'];
};

export type RatingsGroupBy = {
  __typename?: 'RatingsGroupBy';
  _avg?: Maybe<RatingsAvgAggregate>;
  _count?: Maybe<RatingsCountAggregate>;
  _max?: Maybe<RatingsMaxAggregate>;
  _min?: Maybe<RatingsMinAggregate>;
  _sum?: Maybe<RatingsSumAggregate>;
  movie_id: Scalars['Int']['output'];
  rating: Scalars['Float']['output'];
  user_id: Scalars['Int']['output'];
};

export type RatingsListRelationFilter = {
  every?: InputMaybe<RatingsWhereInput>;
  none?: InputMaybe<RatingsWhereInput>;
  some?: InputMaybe<RatingsWhereInput>;
};

export type RatingsMaxAggregate = {
  __typename?: 'RatingsMaxAggregate';
  movie_id?: Maybe<Scalars['Int']['output']>;
  rating?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Int']['output']>;
};

export type RatingsMaxOrderByAggregateInput = {
  movie_id?: InputMaybe<SortOrder>;
  rating?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
};

export type RatingsMinAggregate = {
  __typename?: 'RatingsMinAggregate';
  movie_id?: Maybe<Scalars['Int']['output']>;
  rating?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Int']['output']>;
};

export type RatingsMinOrderByAggregateInput = {
  movie_id?: InputMaybe<SortOrder>;
  rating?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
};

export type RatingsOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type RatingsOrderByWithAggregationInput = {
  _avg?: InputMaybe<RatingsAvgOrderByAggregateInput>;
  _count?: InputMaybe<RatingsCountOrderByAggregateInput>;
  _max?: InputMaybe<RatingsMaxOrderByAggregateInput>;
  _min?: InputMaybe<RatingsMinOrderByAggregateInput>;
  _sum?: InputMaybe<RatingsSumOrderByAggregateInput>;
  movie_id?: InputMaybe<SortOrder>;
  rating?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
};

export type RatingsOrderByWithRelationInput = {
  movie_id?: InputMaybe<SortOrder>;
  movies?: InputMaybe<MoviesOrderByWithRelationInput>;
  rating?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
  users?: InputMaybe<UsersOrderByWithRelationInput>;
};

export enum RatingsScalarFieldEnum {
  MovieId = 'movie_id',
  Rating = 'rating',
  UserId = 'user_id'
}

export type RatingsScalarWhereInput = {
  AND?: InputMaybe<Array<RatingsScalarWhereInput>>;
  NOT?: InputMaybe<Array<RatingsScalarWhereInput>>;
  OR?: InputMaybe<Array<RatingsScalarWhereInput>>;
  movie_id?: InputMaybe<IntFilter>;
  rating?: InputMaybe<FloatFilter>;
  user_id?: InputMaybe<IntFilter>;
};

export type RatingsScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<RatingsScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<RatingsScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<RatingsScalarWhereWithAggregatesInput>>;
  movie_id?: InputMaybe<IntWithAggregatesFilter>;
  rating?: InputMaybe<FloatWithAggregatesFilter>;
  user_id?: InputMaybe<IntWithAggregatesFilter>;
};

export type RatingsSumAggregate = {
  __typename?: 'RatingsSumAggregate';
  movie_id?: Maybe<Scalars['Int']['output']>;
  rating?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Int']['output']>;
};

export type RatingsSumOrderByAggregateInput = {
  movie_id?: InputMaybe<SortOrder>;
  rating?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
};

export type RatingsUpdateInput = {
  movies?: InputMaybe<MoviesUpdateOneRequiredWithoutRatingsNestedInput>;
  rating?: InputMaybe<FloatFieldUpdateOperationsInput>;
  users?: InputMaybe<UsersUpdateOneRequiredWithoutRatingsNestedInput>;
};

export type RatingsUpdateManyMutationInput = {
  rating?: InputMaybe<FloatFieldUpdateOperationsInput>;
};

export type RatingsUpdateManyWithWhereWithoutMoviesInput = {
  data: RatingsUpdateManyMutationInput;
  where: RatingsScalarWhereInput;
};

export type RatingsUpdateManyWithWhereWithoutUsersInput = {
  data: RatingsUpdateManyMutationInput;
  where: RatingsScalarWhereInput;
};

export type RatingsUpdateManyWithoutMoviesNestedInput = {
  connect?: InputMaybe<Array<RatingsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<RatingsCreateOrConnectWithoutMoviesInput>>;
  create?: InputMaybe<Array<RatingsCreateWithoutMoviesInput>>;
  createMany?: InputMaybe<RatingsCreateManyMoviesInputEnvelope>;
  delete?: InputMaybe<Array<RatingsWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<RatingsScalarWhereInput>>;
  disconnect?: InputMaybe<Array<RatingsWhereUniqueInput>>;
  set?: InputMaybe<Array<RatingsWhereUniqueInput>>;
  update?: InputMaybe<Array<RatingsUpdateWithWhereUniqueWithoutMoviesInput>>;
  updateMany?: InputMaybe<Array<RatingsUpdateManyWithWhereWithoutMoviesInput>>;
  upsert?: InputMaybe<Array<RatingsUpsertWithWhereUniqueWithoutMoviesInput>>;
};

export type RatingsUpdateManyWithoutUsersNestedInput = {
  connect?: InputMaybe<Array<RatingsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<RatingsCreateOrConnectWithoutUsersInput>>;
  create?: InputMaybe<Array<RatingsCreateWithoutUsersInput>>;
  createMany?: InputMaybe<RatingsCreateManyUsersInputEnvelope>;
  delete?: InputMaybe<Array<RatingsWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<RatingsScalarWhereInput>>;
  disconnect?: InputMaybe<Array<RatingsWhereUniqueInput>>;
  set?: InputMaybe<Array<RatingsWhereUniqueInput>>;
  update?: InputMaybe<Array<RatingsUpdateWithWhereUniqueWithoutUsersInput>>;
  updateMany?: InputMaybe<Array<RatingsUpdateManyWithWhereWithoutUsersInput>>;
  upsert?: InputMaybe<Array<RatingsUpsertWithWhereUniqueWithoutUsersInput>>;
};

export type RatingsUpdateWithWhereUniqueWithoutMoviesInput = {
  data: RatingsUpdateWithoutMoviesInput;
  where: RatingsWhereUniqueInput;
};

export type RatingsUpdateWithWhereUniqueWithoutUsersInput = {
  data: RatingsUpdateWithoutUsersInput;
  where: RatingsWhereUniqueInput;
};

export type RatingsUpdateWithoutMoviesInput = {
  rating?: InputMaybe<FloatFieldUpdateOperationsInput>;
  users?: InputMaybe<UsersUpdateOneRequiredWithoutRatingsNestedInput>;
};

export type RatingsUpdateWithoutUsersInput = {
  movies?: InputMaybe<MoviesUpdateOneRequiredWithoutRatingsNestedInput>;
  rating?: InputMaybe<FloatFieldUpdateOperationsInput>;
};

export type RatingsUpsertWithWhereUniqueWithoutMoviesInput = {
  create: RatingsCreateWithoutMoviesInput;
  update: RatingsUpdateWithoutMoviesInput;
  where: RatingsWhereUniqueInput;
};

export type RatingsUpsertWithWhereUniqueWithoutUsersInput = {
  create: RatingsCreateWithoutUsersInput;
  update: RatingsUpdateWithoutUsersInput;
  where: RatingsWhereUniqueInput;
};

export type RatingsWhereInput = {
  AND?: InputMaybe<Array<RatingsWhereInput>>;
  NOT?: InputMaybe<Array<RatingsWhereInput>>;
  OR?: InputMaybe<Array<RatingsWhereInput>>;
  movie_id?: InputMaybe<IntFilter>;
  movies?: InputMaybe<MoviesRelationFilter>;
  rating?: InputMaybe<FloatFilter>;
  user_id?: InputMaybe<IntFilter>;
  users?: InputMaybe<UsersRelationFilter>;
};

export type RatingsWhereUniqueInput = {
  user_id_movie_id?: InputMaybe<RatingsUser_IdMovie_IdCompoundUniqueInput>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type SortOrderInput = {
  nulls?: InputMaybe<NullsOrder>;
  sort: SortOrder;
};

export type StringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']['input']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type Users = {
  __typename?: 'Users';
  _count?: Maybe<UsersCount>;
  id: Scalars['Int']['output'];
  password: Scalars['String']['output'];
  ratings: Array<Ratings>;
  username: Scalars['String']['output'];
};


export type UsersRatingsArgs = {
  cursor?: InputMaybe<RatingsWhereUniqueInput>;
  distinct?: InputMaybe<Array<RatingsScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<RatingsOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<RatingsWhereInput>;
};

export type UsersAvgAggregate = {
  __typename?: 'UsersAvgAggregate';
  id?: Maybe<Scalars['Float']['output']>;
};

export type UsersAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type UsersCount = {
  __typename?: 'UsersCount';
  ratings: Scalars['Int']['output'];
};


export type UsersCountRatingsArgs = {
  where?: InputMaybe<RatingsWhereInput>;
};

export type UsersCountAggregate = {
  __typename?: 'UsersCountAggregate';
  _all: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  password: Scalars['Int']['output'];
  username: Scalars['Int']['output'];
};

export type UsersCountOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
};

export type UsersCreateInput = {
  password: Scalars['String']['input'];
  ratings?: InputMaybe<RatingsCreateNestedManyWithoutUsersInput>;
  username: Scalars['String']['input'];
};

export type UsersCreateManyInput = {
  id?: InputMaybe<Scalars['Int']['input']>;
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type UsersCreateNestedOneWithoutRatingsInput = {
  connect?: InputMaybe<UsersWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UsersCreateOrConnectWithoutRatingsInput>;
  create?: InputMaybe<UsersCreateWithoutRatingsInput>;
};

export type UsersCreateOrConnectWithoutRatingsInput = {
  create: UsersCreateWithoutRatingsInput;
  where: UsersWhereUniqueInput;
};

export type UsersCreateWithoutRatingsInput = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type UsersGroupBy = {
  __typename?: 'UsersGroupBy';
  _avg?: Maybe<UsersAvgAggregate>;
  _count?: Maybe<UsersCountAggregate>;
  _max?: Maybe<UsersMaxAggregate>;
  _min?: Maybe<UsersMinAggregate>;
  _sum?: Maybe<UsersSumAggregate>;
  id: Scalars['Int']['output'];
  password: Scalars['String']['output'];
  username: Scalars['String']['output'];
};

export type UsersMaxAggregate = {
  __typename?: 'UsersMaxAggregate';
  id?: Maybe<Scalars['Int']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};

export type UsersMaxOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
};

export type UsersMinAggregate = {
  __typename?: 'UsersMinAggregate';
  id?: Maybe<Scalars['Int']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};

export type UsersMinOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
};

export type UsersOrderByWithAggregationInput = {
  _avg?: InputMaybe<UsersAvgOrderByAggregateInput>;
  _count?: InputMaybe<UsersCountOrderByAggregateInput>;
  _max?: InputMaybe<UsersMaxOrderByAggregateInput>;
  _min?: InputMaybe<UsersMinOrderByAggregateInput>;
  _sum?: InputMaybe<UsersSumOrderByAggregateInput>;
  id?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
};

export type UsersOrderByWithRelationInput = {
  id?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  ratings?: InputMaybe<RatingsOrderByRelationAggregateInput>;
  username?: InputMaybe<SortOrder>;
};

export type UsersRelationFilter = {
  is?: InputMaybe<UsersWhereInput>;
  isNot?: InputMaybe<UsersWhereInput>;
};

export enum UsersScalarFieldEnum {
  Id = 'id',
  Password = 'password',
  Username = 'username'
}

export type UsersScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<UsersScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<UsersScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<UsersScalarWhereWithAggregatesInput>>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  password?: InputMaybe<StringWithAggregatesFilter>;
  username?: InputMaybe<StringWithAggregatesFilter>;
};

export type UsersSumAggregate = {
  __typename?: 'UsersSumAggregate';
  id?: Maybe<Scalars['Int']['output']>;
};

export type UsersSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type UsersUpdateInput = {
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  ratings?: InputMaybe<RatingsUpdateManyWithoutUsersNestedInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UsersUpdateManyMutationInput = {
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UsersUpdateOneRequiredWithoutRatingsNestedInput = {
  connect?: InputMaybe<UsersWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UsersCreateOrConnectWithoutRatingsInput>;
  create?: InputMaybe<UsersCreateWithoutRatingsInput>;
  update?: InputMaybe<UsersUpdateWithoutRatingsInput>;
  upsert?: InputMaybe<UsersUpsertWithoutRatingsInput>;
};

export type UsersUpdateWithoutRatingsInput = {
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UsersUpsertWithoutRatingsInput = {
  create: UsersCreateWithoutRatingsInput;
  update: UsersUpdateWithoutRatingsInput;
};

export type UsersWhereInput = {
  AND?: InputMaybe<Array<UsersWhereInput>>;
  NOT?: InputMaybe<Array<UsersWhereInput>>;
  OR?: InputMaybe<Array<UsersWhereInput>>;
  id?: InputMaybe<IntFilter>;
  password?: InputMaybe<StringFilter>;
  ratings?: InputMaybe<RatingsListRelationFilter>;
  username?: InputMaybe<StringFilter>;
};

export type UsersWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

export type Movie_GenresMovie_IdGenre_IdCompoundUniqueInput = {
  genre_id: Scalars['Int']['input'];
  movie_id: Scalars['Int']['input'];
};

export type RatingsUser_IdMovie_IdCompoundUniqueInput = {
  movie_id: Scalars['Int']['input'];
  user_id: Scalars['Int']['input'];
};

export type FindManyMoviesQueryVariables = Exact<{
  take?: InputMaybe<Scalars['Int']['input']>;
}>;


export type FindManyMoviesQuery = { __typename?: 'Query', findManyMovies: Array<{ __typename?: 'Movies', id: number, poster_path?: string | null, runtime?: number | null, vote_average?: any | null, release_date?: any | null }> };


export const FindManyMoviesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FindManyMovies"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"take"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findManyMovies"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"take"},"value":{"kind":"Variable","name":{"kind":"Name","value":"take"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"poster_path"}},{"kind":"Field","name":{"kind":"Name","value":"runtime"}},{"kind":"Field","name":{"kind":"Name","value":"vote_average"}},{"kind":"Field","name":{"kind":"Name","value":"release_date"}}]}}]}}]} as unknown as DocumentNode<FindManyMoviesQuery, FindManyMoviesQueryVariables>;