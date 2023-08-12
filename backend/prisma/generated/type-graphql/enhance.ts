import { ClassType } from "type-graphql";
import * as tslib from "tslib";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as argsTypes from "./resolvers/crud/args.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as relationResolvers from "./resolvers/relations/resolvers.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";

export type MethodDecoratorOverrideFn = (
  decorators: MethodDecorator[],
) => MethodDecorator[];

const crudResolversMap = {
  Genres: crudResolvers.GenresCrudResolver,
  Movie_genres: crudResolvers.Movie_genresCrudResolver,
  Movies: crudResolvers.MoviesCrudResolver,
  Ratings: crudResolvers.RatingsCrudResolver,
  Users: crudResolvers.UsersCrudResolver,
};
const actionResolversMap = {
  Genres: {
    aggregateGenres: actionResolvers.AggregateGenresResolver,
    createManyGenres: actionResolvers.CreateManyGenresResolver,
    createOneGenres: actionResolvers.CreateOneGenresResolver,
    deleteManyGenres: actionResolvers.DeleteManyGenresResolver,
    deleteOneGenres: actionResolvers.DeleteOneGenresResolver,
    findFirstGenres: actionResolvers.FindFirstGenresResolver,
    findFirstGenresOrThrow: actionResolvers.FindFirstGenresOrThrowResolver,
    findManyGenres: actionResolvers.FindManyGenresResolver,
    findUniqueGenres: actionResolvers.FindUniqueGenresResolver,
    findUniqueGenresOrThrow: actionResolvers.FindUniqueGenresOrThrowResolver,
    groupByGenres: actionResolvers.GroupByGenresResolver,
    updateManyGenres: actionResolvers.UpdateManyGenresResolver,
    updateOneGenres: actionResolvers.UpdateOneGenresResolver,
    upsertOneGenres: actionResolvers.UpsertOneGenresResolver,
  },
  Movie_genres: {
    aggregateMovie_genres: actionResolvers.AggregateMovie_genresResolver,
    createManyMovie_genres: actionResolvers.CreateManyMovie_genresResolver,
    createOneMovie_genres: actionResolvers.CreateOneMovie_genresResolver,
    deleteManyMovie_genres: actionResolvers.DeleteManyMovie_genresResolver,
    deleteOneMovie_genres: actionResolvers.DeleteOneMovie_genresResolver,
    findFirstMovie_genres: actionResolvers.FindFirstMovie_genresResolver,
    findFirstMovie_genresOrThrow:
      actionResolvers.FindFirstMovie_genresOrThrowResolver,
    findManyMovie_genres: actionResolvers.FindManyMovie_genresResolver,
    findUniqueMovie_genres: actionResolvers.FindUniqueMovie_genresResolver,
    findUniqueMovie_genresOrThrow:
      actionResolvers.FindUniqueMovie_genresOrThrowResolver,
    groupByMovie_genres: actionResolvers.GroupByMovie_genresResolver,
    updateManyMovie_genres: actionResolvers.UpdateManyMovie_genresResolver,
    updateOneMovie_genres: actionResolvers.UpdateOneMovie_genresResolver,
    upsertOneMovie_genres: actionResolvers.UpsertOneMovie_genresResolver,
  },
  Movies: {
    aggregateMovies: actionResolvers.AggregateMoviesResolver,
    createManyMovies: actionResolvers.CreateManyMoviesResolver,
    createOneMovies: actionResolvers.CreateOneMoviesResolver,
    deleteManyMovies: actionResolvers.DeleteManyMoviesResolver,
    deleteOneMovies: actionResolvers.DeleteOneMoviesResolver,
    findFirstMovies: actionResolvers.FindFirstMoviesResolver,
    findFirstMoviesOrThrow: actionResolvers.FindFirstMoviesOrThrowResolver,
    findManyMovies: actionResolvers.FindManyMoviesResolver,
    findUniqueMovies: actionResolvers.FindUniqueMoviesResolver,
    findUniqueMoviesOrThrow: actionResolvers.FindUniqueMoviesOrThrowResolver,
    groupByMovies: actionResolvers.GroupByMoviesResolver,
    updateManyMovies: actionResolvers.UpdateManyMoviesResolver,
    updateOneMovies: actionResolvers.UpdateOneMoviesResolver,
    upsertOneMovies: actionResolvers.UpsertOneMoviesResolver,
  },
  Ratings: {
    aggregateRatings: actionResolvers.AggregateRatingsResolver,
    createManyRatings: actionResolvers.CreateManyRatingsResolver,
    createOneRatings: actionResolvers.CreateOneRatingsResolver,
    deleteManyRatings: actionResolvers.DeleteManyRatingsResolver,
    deleteOneRatings: actionResolvers.DeleteOneRatingsResolver,
    findFirstRatings: actionResolvers.FindFirstRatingsResolver,
    findFirstRatingsOrThrow: actionResolvers.FindFirstRatingsOrThrowResolver,
    findManyRatings: actionResolvers.FindManyRatingsResolver,
    findUniqueRatings: actionResolvers.FindUniqueRatingsResolver,
    findUniqueRatingsOrThrow: actionResolvers.FindUniqueRatingsOrThrowResolver,
    groupByRatings: actionResolvers.GroupByRatingsResolver,
    updateManyRatings: actionResolvers.UpdateManyRatingsResolver,
    updateOneRatings: actionResolvers.UpdateOneRatingsResolver,
    upsertOneRatings: actionResolvers.UpsertOneRatingsResolver,
  },
  Users: {
    aggregateUsers: actionResolvers.AggregateUsersResolver,
    createManyUsers: actionResolvers.CreateManyUsersResolver,
    createOneUsers: actionResolvers.CreateOneUsersResolver,
    deleteManyUsers: actionResolvers.DeleteManyUsersResolver,
    deleteOneUsers: actionResolvers.DeleteOneUsersResolver,
    findFirstUsers: actionResolvers.FindFirstUsersResolver,
    findFirstUsersOrThrow: actionResolvers.FindFirstUsersOrThrowResolver,
    findManyUsers: actionResolvers.FindManyUsersResolver,
    findUniqueUsers: actionResolvers.FindUniqueUsersResolver,
    findUniqueUsersOrThrow: actionResolvers.FindUniqueUsersOrThrowResolver,
    groupByUsers: actionResolvers.GroupByUsersResolver,
    updateManyUsers: actionResolvers.UpdateManyUsersResolver,
    updateOneUsers: actionResolvers.UpdateOneUsersResolver,
    upsertOneUsers: actionResolvers.UpsertOneUsersResolver,
  },
};
const crudResolversInfo = {
  Genres: [
    "aggregateGenres",
    "createManyGenres",
    "createOneGenres",
    "deleteManyGenres",
    "deleteOneGenres",
    "findFirstGenres",
    "findFirstGenresOrThrow",
    "findManyGenres",
    "findUniqueGenres",
    "findUniqueGenresOrThrow",
    "groupByGenres",
    "updateManyGenres",
    "updateOneGenres",
    "upsertOneGenres",
  ],
  Movie_genres: [
    "aggregateMovie_genres",
    "createManyMovie_genres",
    "createOneMovie_genres",
    "deleteManyMovie_genres",
    "deleteOneMovie_genres",
    "findFirstMovie_genres",
    "findFirstMovie_genresOrThrow",
    "findManyMovie_genres",
    "findUniqueMovie_genres",
    "findUniqueMovie_genresOrThrow",
    "groupByMovie_genres",
    "updateManyMovie_genres",
    "updateOneMovie_genres",
    "upsertOneMovie_genres",
  ],
  Movies: [
    "aggregateMovies",
    "createManyMovies",
    "createOneMovies",
    "deleteManyMovies",
    "deleteOneMovies",
    "findFirstMovies",
    "findFirstMoviesOrThrow",
    "findManyMovies",
    "findUniqueMovies",
    "findUniqueMoviesOrThrow",
    "groupByMovies",
    "updateManyMovies",
    "updateOneMovies",
    "upsertOneMovies",
  ],
  Ratings: [
    "aggregateRatings",
    "createManyRatings",
    "createOneRatings",
    "deleteManyRatings",
    "deleteOneRatings",
    "findFirstRatings",
    "findFirstRatingsOrThrow",
    "findManyRatings",
    "findUniqueRatings",
    "findUniqueRatingsOrThrow",
    "groupByRatings",
    "updateManyRatings",
    "updateOneRatings",
    "upsertOneRatings",
  ],
  Users: [
    "aggregateUsers",
    "createManyUsers",
    "createOneUsers",
    "deleteManyUsers",
    "deleteOneUsers",
    "findFirstUsers",
    "findFirstUsersOrThrow",
    "findManyUsers",
    "findUniqueUsers",
    "findUniqueUsersOrThrow",
    "groupByUsers",
    "updateManyUsers",
    "updateOneUsers",
    "upsertOneUsers",
  ],
};
const argsInfo = {
  AggregateGenresArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyGenresArgs: ["data", "skipDuplicates"],
  CreateOneGenresArgs: ["data"],
  DeleteManyGenresArgs: ["where"],
  DeleteOneGenresArgs: ["where"],
  FindFirstGenresArgs: [
    "where",
    "orderBy",
    "cursor",
    "take",
    "skip",
    "distinct",
  ],
  FindFirstGenresOrThrowArgs: [
    "where",
    "orderBy",
    "cursor",
    "take",
    "skip",
    "distinct",
  ],
  FindManyGenresArgs: [
    "where",
    "orderBy",
    "cursor",
    "take",
    "skip",
    "distinct",
  ],
  FindUniqueGenresArgs: ["where"],
  FindUniqueGenresOrThrowArgs: ["where"],
  GroupByGenresArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyGenresArgs: ["data", "where"],
  UpdateOneGenresArgs: ["data", "where"],
  UpsertOneGenresArgs: ["where", "create", "update"],
  AggregateMovie_genresArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyMovie_genresArgs: ["data", "skipDuplicates"],
  CreateOneMovie_genresArgs: ["data"],
  DeleteManyMovie_genresArgs: ["where"],
  DeleteOneMovie_genresArgs: ["where"],
  FindFirstMovie_genresArgs: [
    "where",
    "orderBy",
    "cursor",
    "take",
    "skip",
    "distinct",
  ],
  FindFirstMovie_genresOrThrowArgs: [
    "where",
    "orderBy",
    "cursor",
    "take",
    "skip",
    "distinct",
  ],
  FindManyMovie_genresArgs: [
    "where",
    "orderBy",
    "cursor",
    "take",
    "skip",
    "distinct",
  ],
  FindUniqueMovie_genresArgs: ["where"],
  FindUniqueMovie_genresOrThrowArgs: ["where"],
  GroupByMovie_genresArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyMovie_genresArgs: ["data", "where"],
  UpdateOneMovie_genresArgs: ["data", "where"],
  UpsertOneMovie_genresArgs: ["where", "create", "update"],
  AggregateMoviesArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyMoviesArgs: ["data", "skipDuplicates"],
  CreateOneMoviesArgs: ["data"],
  DeleteManyMoviesArgs: ["where"],
  DeleteOneMoviesArgs: ["where"],
  FindFirstMoviesArgs: [
    "where",
    "orderBy",
    "cursor",
    "take",
    "skip",
    "distinct",
  ],
  FindFirstMoviesOrThrowArgs: [
    "where",
    "orderBy",
    "cursor",
    "take",
    "skip",
    "distinct",
  ],
  FindManyMoviesArgs: [
    "where",
    "orderBy",
    "cursor",
    "take",
    "skip",
    "distinct",
  ],
  FindUniqueMoviesArgs: ["where"],
  FindUniqueMoviesOrThrowArgs: ["where"],
  GroupByMoviesArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyMoviesArgs: ["data", "where"],
  UpdateOneMoviesArgs: ["data", "where"],
  UpsertOneMoviesArgs: ["where", "create", "update"],
  AggregateRatingsArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyRatingsArgs: ["data", "skipDuplicates"],
  CreateOneRatingsArgs: ["data"],
  DeleteManyRatingsArgs: ["where"],
  DeleteOneRatingsArgs: ["where"],
  FindFirstRatingsArgs: [
    "where",
    "orderBy",
    "cursor",
    "take",
    "skip",
    "distinct",
  ],
  FindFirstRatingsOrThrowArgs: [
    "where",
    "orderBy",
    "cursor",
    "take",
    "skip",
    "distinct",
  ],
  FindManyRatingsArgs: [
    "where",
    "orderBy",
    "cursor",
    "take",
    "skip",
    "distinct",
  ],
  FindUniqueRatingsArgs: ["where"],
  FindUniqueRatingsOrThrowArgs: ["where"],
  GroupByRatingsArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyRatingsArgs: ["data", "where"],
  UpdateOneRatingsArgs: ["data", "where"],
  UpsertOneRatingsArgs: ["where", "create", "update"],
  AggregateUsersArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyUsersArgs: ["data", "skipDuplicates"],
  CreateOneUsersArgs: ["data"],
  DeleteManyUsersArgs: ["where"],
  DeleteOneUsersArgs: ["where"],
  FindFirstUsersArgs: [
    "where",
    "orderBy",
    "cursor",
    "take",
    "skip",
    "distinct",
  ],
  FindFirstUsersOrThrowArgs: [
    "where",
    "orderBy",
    "cursor",
    "take",
    "skip",
    "distinct",
  ],
  FindManyUsersArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueUsersArgs: ["where"],
  FindUniqueUsersOrThrowArgs: ["where"],
  GroupByUsersArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyUsersArgs: ["data", "where"],
  UpdateOneUsersArgs: ["data", "where"],
  UpsertOneUsersArgs: ["where", "create", "update"],
};

type ResolverModelNames = keyof typeof crudResolversMap;

type ModelResolverActionNames<TModel extends ResolverModelNames> =
  keyof (typeof crudResolversMap)[TModel]["prototype"];

export type ResolverActionsConfig<TModel extends ResolverModelNames> = Partial<
  Record<
    ModelResolverActionNames<TModel>,
    MethodDecorator[] | MethodDecoratorOverrideFn
  >
> & {
  _all?: MethodDecorator[];
  _query?: MethodDecorator[];
  _mutation?: MethodDecorator[];
};

export type ResolversEnhanceMap = {
  [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};

export function applyResolversEnhanceMap(
  resolversEnhanceMap: ResolversEnhanceMap,
) {
  const mutationOperationPrefixes = [
    "createOne",
    "createMany",
    "deleteOne",
    "updateOne",
    "deleteMany",
    "updateMany",
    "upsertOne",
  ];
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName =
      resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
    const crudTarget = crudResolversMap[modelName].prototype;
    const resolverActionsConfig = resolversEnhanceMap[modelName]!;
    const actionResolversConfig = actionResolversMap[modelName];
    const allActionsDecorators = resolverActionsConfig._all;
    const resolverActionNames =
      crudResolversInfo[modelName as keyof typeof crudResolversInfo];
    for (const resolverActionName of resolverActionNames) {
      const maybeDecoratorsOrFn = resolverActionsConfig[
        resolverActionName as keyof typeof resolverActionsConfig
      ] as MethodDecorator[] | MethodDecoratorOverrideFn | undefined;
      const isWriteOperation = mutationOperationPrefixes.some((prefix) =>
        resolverActionName.startsWith(prefix),
      );
      const operationKindDecorators = isWriteOperation
        ? resolverActionsConfig._mutation
        : resolverActionsConfig._query;
      const mainDecorators = [
        ...(allActionsDecorators ?? []),
        ...(operationKindDecorators ?? []),
      ];
      let decorators: MethodDecorator[];
      if (typeof maybeDecoratorsOrFn === "function") {
        decorators = maybeDecoratorsOrFn(mainDecorators);
      } else {
        decorators = [...mainDecorators, ...(maybeDecoratorsOrFn ?? [])];
      }
      const actionTarget = (
        actionResolversConfig[
          resolverActionName as keyof typeof actionResolversConfig
        ] as Function
      ).prototype;
      tslib.__decorate(decorators, crudTarget, resolverActionName, null);
      tslib.__decorate(decorators, actionTarget, resolverActionName, null);
    }
  }
}

type ArgsTypesNames = keyof typeof argsTypes;

type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<
  keyof (typeof argsTypes)[TArgsType]["prototype"],
  number | symbol
>;

type ArgFieldsConfig<TArgsType extends ArgsTypesNames> = FieldsConfig<
  ArgFieldNames<TArgsType>
>;

export type ArgConfig<TArgsType extends ArgsTypesNames> = {
  class?: ClassDecorator[];
  fields?: ArgFieldsConfig<TArgsType>;
};

export type ArgsTypesEnhanceMap = {
  [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>;
};

export function applyArgsTypesEnhanceMap(
  argsTypesEnhanceMap: ArgsTypesEnhanceMap,
) {
  for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
    const argsTypeName =
      argsTypesEnhanceMapKey as keyof typeof argsTypesEnhanceMap;
    const typeConfig = argsTypesEnhanceMap[argsTypeName]!;
    const typeClass = argsTypes[argsTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      argsInfo[argsTypeName as keyof typeof argsInfo],
    );
  }
}

const relationResolversMap = {
  Genres: relationResolvers.GenresRelationsResolver,
  Movie_genres: relationResolvers.Movie_genresRelationsResolver,
  Movies: relationResolvers.MoviesRelationsResolver,
  Ratings: relationResolvers.RatingsRelationsResolver,
  Users: relationResolvers.UsersRelationsResolver,
};
const relationResolversInfo = {
  Genres: ["movie_genres"],
  Movie_genres: ["genres", "movies"],
  Movies: ["movie_genres", "ratings"],
  Ratings: ["movies", "users"],
  Users: ["ratings"],
};

type RelationResolverModelNames = keyof typeof relationResolversMap;

type RelationResolverActionNames<TModel extends RelationResolverModelNames> =
  keyof (typeof relationResolversMap)[TModel]["prototype"];

export type RelationResolverActionsConfig<
  TModel extends RelationResolverModelNames,
> = Partial<
  Record<
    RelationResolverActionNames<TModel>,
    MethodDecorator[] | MethodDecoratorOverrideFn
  >
> & { _all?: MethodDecorator[] };

export type RelationResolversEnhanceMap = {
  [TModel in RelationResolverModelNames]?: RelationResolverActionsConfig<TModel>;
};

export function applyRelationResolversEnhanceMap(
  relationResolversEnhanceMap: RelationResolversEnhanceMap,
) {
  for (const relationResolversEnhanceMapKey of Object.keys(
    relationResolversEnhanceMap,
  )) {
    const modelName =
      relationResolversEnhanceMapKey as keyof typeof relationResolversEnhanceMap;
    const relationResolverTarget = relationResolversMap[modelName].prototype;
    const relationResolverActionsConfig =
      relationResolversEnhanceMap[modelName]!;
    const allActionsDecorators = relationResolverActionsConfig._all ?? [];
    const relationResolverActionNames =
      relationResolversInfo[modelName as keyof typeof relationResolversInfo];
    for (const relationResolverActionName of relationResolverActionNames) {
      const maybeDecoratorsOrFn = relationResolverActionsConfig[
        relationResolverActionName as keyof typeof relationResolverActionsConfig
      ] as MethodDecorator[] | MethodDecoratorOverrideFn | undefined;
      let decorators: MethodDecorator[];
      if (typeof maybeDecoratorsOrFn === "function") {
        decorators = maybeDecoratorsOrFn(allActionsDecorators);
      } else {
        decorators = [...allActionsDecorators, ...(maybeDecoratorsOrFn ?? [])];
      }
      tslib.__decorate(
        decorators,
        relationResolverTarget,
        relationResolverActionName,
        null,
      );
    }
  }
}

type TypeConfig = {
  class?: ClassDecorator[];
  fields?: FieldsConfig;
};

export type PropertyDecoratorOverrideFn = (
  decorators: PropertyDecorator[],
) => PropertyDecorator[];

type FieldsConfig<TTypeKeys extends string = string> = Partial<
  Record<TTypeKeys, PropertyDecorator[] | PropertyDecoratorOverrideFn>
> & { _all?: PropertyDecorator[] };

function applyTypeClassEnhanceConfig<
  TEnhanceConfig extends TypeConfig,
  TType extends object,
>(
  enhanceConfig: TEnhanceConfig,
  typeClass: ClassType<TType>,
  typePrototype: TType,
  typeFieldNames: string[],
) {
  if (enhanceConfig.class) {
    tslib.__decorate(enhanceConfig.class, typeClass);
  }
  if (enhanceConfig.fields) {
    const allFieldsDecorators = enhanceConfig.fields._all ?? [];
    for (const typeFieldName of typeFieldNames) {
      const maybeDecoratorsOrFn = enhanceConfig.fields[typeFieldName] as
        | PropertyDecorator[]
        | PropertyDecoratorOverrideFn
        | undefined;
      let decorators: PropertyDecorator[];
      if (typeof maybeDecoratorsOrFn === "function") {
        decorators = maybeDecoratorsOrFn(allFieldsDecorators);
      } else {
        decorators = [...allFieldsDecorators, ...(maybeDecoratorsOrFn ?? [])];
      }
      tslib.__decorate(decorators, typePrototype, typeFieldName, void 0);
    }
  }
}

const modelsInfo = {
  Genres: ["id", "genre"],
  Movie_genres: ["movie_id", "genre_id"],
  Movies: [
    "id",
    "title",
    "release_date",
    "runtime",
    "overview",
    "popularity",
    "vote_average",
    "vote_count",
    "poster_path",
    "backdrop_path",
  ],
  Ratings: ["user_id", "movie_id", "rating"],
  Users: ["id", "username", "password"],
};

type ModelNames = keyof typeof models;

type ModelFieldNames<TModel extends ModelNames> = Exclude<
  keyof (typeof models)[TModel]["prototype"],
  number | symbol
>;

type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<
  ModelFieldNames<TModel>
>;

export type ModelConfig<TModel extends ModelNames> = {
  class?: ClassDecorator[];
  fields?: ModelFieldsConfig<TModel>;
};

export type ModelsEnhanceMap = {
  [TModel in ModelNames]?: ModelConfig<TModel>;
};

export function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap) {
  for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
    const modelName = modelsEnhanceMapKey as keyof typeof modelsEnhanceMap;
    const modelConfig = modelsEnhanceMap[modelName]!;
    const modelClass = models[modelName];
    const modelTarget = modelClass.prototype;
    applyTypeClassEnhanceConfig(
      modelConfig,
      modelClass,
      modelTarget,
      modelsInfo[modelName as keyof typeof modelsInfo],
    );
  }
}

const outputsInfo = {
  AggregateGenres: ["_count", "_avg", "_sum", "_min", "_max"],
  GenresGroupBy: ["id", "genre", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateMovie_genres: ["_count", "_avg", "_sum", "_min", "_max"],
  Movie_genresGroupBy: [
    "movie_id",
    "genre_id",
    "_count",
    "_avg",
    "_sum",
    "_min",
    "_max",
  ],
  AggregateMovies: ["_count", "_avg", "_sum", "_min", "_max"],
  MoviesGroupBy: [
    "id",
    "title",
    "release_date",
    "runtime",
    "overview",
    "popularity",
    "vote_average",
    "vote_count",
    "poster_path",
    "backdrop_path",
    "_count",
    "_avg",
    "_sum",
    "_min",
    "_max",
  ],
  AggregateRatings: ["_count", "_avg", "_sum", "_min", "_max"],
  RatingsGroupBy: [
    "user_id",
    "movie_id",
    "rating",
    "_count",
    "_avg",
    "_sum",
    "_min",
    "_max",
  ],
  AggregateUsers: ["_count", "_avg", "_sum", "_min", "_max"],
  UsersGroupBy: [
    "id",
    "username",
    "password",
    "_count",
    "_avg",
    "_sum",
    "_min",
    "_max",
  ],
  AffectedRowsOutput: ["count"],
  GenresCount: ["movie_genres"],
  GenresCountAggregate: ["id", "genre", "_all"],
  GenresAvgAggregate: ["id"],
  GenresSumAggregate: ["id"],
  GenresMinAggregate: ["id", "genre"],
  GenresMaxAggregate: ["id", "genre"],
  Movie_genresCountAggregate: ["movie_id", "genre_id", "_all"],
  Movie_genresAvgAggregate: ["movie_id", "genre_id"],
  Movie_genresSumAggregate: ["movie_id", "genre_id"],
  Movie_genresMinAggregate: ["movie_id", "genre_id"],
  Movie_genresMaxAggregate: ["movie_id", "genre_id"],
  MoviesCount: ["movie_genres", "ratings"],
  MoviesCountAggregate: [
    "id",
    "title",
    "release_date",
    "runtime",
    "overview",
    "popularity",
    "vote_average",
    "vote_count",
    "poster_path",
    "backdrop_path",
    "_all",
  ],
  MoviesAvgAggregate: [
    "id",
    "runtime",
    "popularity",
    "vote_average",
    "vote_count",
  ],
  MoviesSumAggregate: [
    "id",
    "runtime",
    "popularity",
    "vote_average",
    "vote_count",
  ],
  MoviesMinAggregate: [
    "id",
    "title",
    "release_date",
    "runtime",
    "overview",
    "popularity",
    "vote_average",
    "vote_count",
    "poster_path",
    "backdrop_path",
  ],
  MoviesMaxAggregate: [
    "id",
    "title",
    "release_date",
    "runtime",
    "overview",
    "popularity",
    "vote_average",
    "vote_count",
    "poster_path",
    "backdrop_path",
  ],
  RatingsCountAggregate: ["user_id", "movie_id", "rating", "_all"],
  RatingsAvgAggregate: ["user_id", "movie_id", "rating"],
  RatingsSumAggregate: ["user_id", "movie_id", "rating"],
  RatingsMinAggregate: ["user_id", "movie_id", "rating"],
  RatingsMaxAggregate: ["user_id", "movie_id", "rating"],
  UsersCount: ["ratings"],
  UsersCountAggregate: ["id", "username", "password", "_all"],
  UsersAvgAggregate: ["id"],
  UsersSumAggregate: ["id"],
  UsersMinAggregate: ["id", "username", "password"],
  UsersMaxAggregate: ["id", "username", "password"],
};

type OutputTypesNames = keyof typeof outputTypes;

type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<
  keyof (typeof outputTypes)[TOutput]["prototype"],
  number | symbol
>;

type OutputTypeFieldsConfig<TOutput extends OutputTypesNames> = FieldsConfig<
  OutputTypeFieldNames<TOutput>
>;

export type OutputTypeConfig<TOutput extends OutputTypesNames> = {
  class?: ClassDecorator[];
  fields?: OutputTypeFieldsConfig<TOutput>;
};

export type OutputTypesEnhanceMap = {
  [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>;
};

export function applyOutputTypesEnhanceMap(
  outputTypesEnhanceMap: OutputTypesEnhanceMap,
) {
  for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
    const outputTypeName =
      outputTypeEnhanceMapKey as keyof typeof outputTypesEnhanceMap;
    const typeConfig = outputTypesEnhanceMap[outputTypeName]!;
    const typeClass = outputTypes[outputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      outputsInfo[outputTypeName as keyof typeof outputsInfo],
    );
  }
}

const inputsInfo = {
  GenresWhereInput: ["AND", "OR", "NOT", "id", "genre", "movie_genres"],
  GenresOrderByWithRelationInput: ["id", "genre", "movie_genres"],
  GenresWhereUniqueInput: ["id"],
  GenresOrderByWithAggregationInput: [
    "id",
    "genre",
    "_count",
    "_avg",
    "_max",
    "_min",
    "_sum",
  ],
  GenresScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "genre"],
  Movie_genresWhereInput: [
    "AND",
    "OR",
    "NOT",
    "movie_id",
    "genre_id",
    "genres",
    "movies",
  ],
  Movie_genresOrderByWithRelationInput: [
    "movie_id",
    "genre_id",
    "genres",
    "movies",
  ],
  Movie_genresWhereUniqueInput: ["movie_id_genre_id"],
  Movie_genresOrderByWithAggregationInput: [
    "movie_id",
    "genre_id",
    "_count",
    "_avg",
    "_max",
    "_min",
    "_sum",
  ],
  Movie_genresScalarWhereWithAggregatesInput: [
    "AND",
    "OR",
    "NOT",
    "movie_id",
    "genre_id",
  ],
  MoviesWhereInput: [
    "AND",
    "OR",
    "NOT",
    "id",
    "title",
    "release_date",
    "runtime",
    "overview",
    "popularity",
    "vote_average",
    "vote_count",
    "poster_path",
    "backdrop_path",
    "movie_genres",
    "ratings",
  ],
  MoviesOrderByWithRelationInput: [
    "id",
    "title",
    "release_date",
    "runtime",
    "overview",
    "popularity",
    "vote_average",
    "vote_count",
    "poster_path",
    "backdrop_path",
    "movie_genres",
    "ratings",
  ],
  MoviesWhereUniqueInput: ["id"],
  MoviesOrderByWithAggregationInput: [
    "id",
    "title",
    "release_date",
    "runtime",
    "overview",
    "popularity",
    "vote_average",
    "vote_count",
    "poster_path",
    "backdrop_path",
    "_count",
    "_avg",
    "_max",
    "_min",
    "_sum",
  ],
  MoviesScalarWhereWithAggregatesInput: [
    "AND",
    "OR",
    "NOT",
    "id",
    "title",
    "release_date",
    "runtime",
    "overview",
    "popularity",
    "vote_average",
    "vote_count",
    "poster_path",
    "backdrop_path",
  ],
  RatingsWhereInput: [
    "AND",
    "OR",
    "NOT",
    "user_id",
    "movie_id",
    "rating",
    "movies",
    "users",
  ],
  RatingsOrderByWithRelationInput: [
    "user_id",
    "movie_id",
    "rating",
    "movies",
    "users",
  ],
  RatingsWhereUniqueInput: ["user_id_movie_id"],
  RatingsOrderByWithAggregationInput: [
    "user_id",
    "movie_id",
    "rating",
    "_count",
    "_avg",
    "_max",
    "_min",
    "_sum",
  ],
  RatingsScalarWhereWithAggregatesInput: [
    "AND",
    "OR",
    "NOT",
    "user_id",
    "movie_id",
    "rating",
  ],
  UsersWhereInput: [
    "AND",
    "OR",
    "NOT",
    "id",
    "username",
    "password",
    "ratings",
  ],
  UsersOrderByWithRelationInput: ["id", "username", "password", "ratings"],
  UsersWhereUniqueInput: ["id"],
  UsersOrderByWithAggregationInput: [
    "id",
    "username",
    "password",
    "_count",
    "_avg",
    "_max",
    "_min",
    "_sum",
  ],
  UsersScalarWhereWithAggregatesInput: [
    "AND",
    "OR",
    "NOT",
    "id",
    "username",
    "password",
  ],
  GenresCreateInput: ["genre", "movie_genres"],
  GenresUpdateInput: ["genre", "movie_genres"],
  GenresCreateManyInput: ["id", "genre"],
  GenresUpdateManyMutationInput: ["genre"],
  Movie_genresCreateInput: ["genres", "movies"],
  Movie_genresUpdateInput: ["genres", "movies"],
  Movie_genresCreateManyInput: ["movie_id", "genre_id"],
  MoviesCreateInput: [
    "id",
    "title",
    "release_date",
    "runtime",
    "overview",
    "popularity",
    "vote_average",
    "vote_count",
    "poster_path",
    "backdrop_path",
    "movie_genres",
    "ratings",
  ],
  MoviesUpdateInput: [
    "id",
    "title",
    "release_date",
    "runtime",
    "overview",
    "popularity",
    "vote_average",
    "vote_count",
    "poster_path",
    "backdrop_path",
    "movie_genres",
    "ratings",
  ],
  MoviesCreateManyInput: [
    "id",
    "title",
    "release_date",
    "runtime",
    "overview",
    "popularity",
    "vote_average",
    "vote_count",
    "poster_path",
    "backdrop_path",
  ],
  MoviesUpdateManyMutationInput: [
    "id",
    "title",
    "release_date",
    "runtime",
    "overview",
    "popularity",
    "vote_average",
    "vote_count",
    "poster_path",
    "backdrop_path",
  ],
  RatingsCreateInput: ["rating", "movies", "users"],
  RatingsUpdateInput: ["rating", "movies", "users"],
  RatingsCreateManyInput: ["user_id", "movie_id", "rating"],
  RatingsUpdateManyMutationInput: ["rating"],
  UsersCreateInput: ["username", "password", "ratings"],
  UsersUpdateInput: ["username", "password", "ratings"],
  UsersCreateManyInput: ["id", "username", "password"],
  UsersUpdateManyMutationInput: ["username", "password"],
  IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  StringFilter: [
    "equals",
    "in",
    "notIn",
    "lt",
    "lte",
    "gt",
    "gte",
    "contains",
    "startsWith",
    "endsWith",
    "mode",
    "not",
  ],
  Movie_genresListRelationFilter: ["every", "some", "none"],
  Movie_genresOrderByRelationAggregateInput: ["_count"],
  GenresCountOrderByAggregateInput: ["id", "genre"],
  GenresAvgOrderByAggregateInput: ["id"],
  GenresMaxOrderByAggregateInput: ["id", "genre"],
  GenresMinOrderByAggregateInput: ["id", "genre"],
  GenresSumOrderByAggregateInput: ["id"],
  IntWithAggregatesFilter: [
    "equals",
    "in",
    "notIn",
    "lt",
    "lte",
    "gt",
    "gte",
    "not",
    "_count",
    "_avg",
    "_sum",
    "_min",
    "_max",
  ],
  StringWithAggregatesFilter: [
    "equals",
    "in",
    "notIn",
    "lt",
    "lte",
    "gt",
    "gte",
    "contains",
    "startsWith",
    "endsWith",
    "mode",
    "not",
    "_count",
    "_min",
    "_max",
  ],
  GenresRelationFilter: ["is", "isNot"],
  MoviesRelationFilter: ["is", "isNot"],
  movie_genresMovie_idGenre_idCompoundUniqueInput: ["movie_id", "genre_id"],
  Movie_genresCountOrderByAggregateInput: ["movie_id", "genre_id"],
  Movie_genresAvgOrderByAggregateInput: ["movie_id", "genre_id"],
  Movie_genresMaxOrderByAggregateInput: ["movie_id", "genre_id"],
  Movie_genresMinOrderByAggregateInput: ["movie_id", "genre_id"],
  Movie_genresSumOrderByAggregateInput: ["movie_id", "genre_id"],
  StringNullableFilter: [
    "equals",
    "in",
    "notIn",
    "lt",
    "lte",
    "gt",
    "gte",
    "contains",
    "startsWith",
    "endsWith",
    "mode",
    "not",
  ],
  DateTimeNullableFilter: [
    "equals",
    "in",
    "notIn",
    "lt",
    "lte",
    "gt",
    "gte",
    "not",
  ],
  IntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  DecimalNullableFilter: [
    "equals",
    "in",
    "notIn",
    "lt",
    "lte",
    "gt",
    "gte",
    "not",
  ],
  RatingsListRelationFilter: ["every", "some", "none"],
  SortOrderInput: ["sort", "nulls"],
  RatingsOrderByRelationAggregateInput: ["_count"],
  MoviesCountOrderByAggregateInput: [
    "id",
    "title",
    "release_date",
    "runtime",
    "overview",
    "popularity",
    "vote_average",
    "vote_count",
    "poster_path",
    "backdrop_path",
  ],
  MoviesAvgOrderByAggregateInput: [
    "id",
    "runtime",
    "popularity",
    "vote_average",
    "vote_count",
  ],
  MoviesMaxOrderByAggregateInput: [
    "id",
    "title",
    "release_date",
    "runtime",
    "overview",
    "popularity",
    "vote_average",
    "vote_count",
    "poster_path",
    "backdrop_path",
  ],
  MoviesMinOrderByAggregateInput: [
    "id",
    "title",
    "release_date",
    "runtime",
    "overview",
    "popularity",
    "vote_average",
    "vote_count",
    "poster_path",
    "backdrop_path",
  ],
  MoviesSumOrderByAggregateInput: [
    "id",
    "runtime",
    "popularity",
    "vote_average",
    "vote_count",
  ],
  StringNullableWithAggregatesFilter: [
    "equals",
    "in",
    "notIn",
    "lt",
    "lte",
    "gt",
    "gte",
    "contains",
    "startsWith",
    "endsWith",
    "mode",
    "not",
    "_count",
    "_min",
    "_max",
  ],
  DateTimeNullableWithAggregatesFilter: [
    "equals",
    "in",
    "notIn",
    "lt",
    "lte",
    "gt",
    "gte",
    "not",
    "_count",
    "_min",
    "_max",
  ],
  IntNullableWithAggregatesFilter: [
    "equals",
    "in",
    "notIn",
    "lt",
    "lte",
    "gt",
    "gte",
    "not",
    "_count",
    "_avg",
    "_sum",
    "_min",
    "_max",
  ],
  DecimalNullableWithAggregatesFilter: [
    "equals",
    "in",
    "notIn",
    "lt",
    "lte",
    "gt",
    "gte",
    "not",
    "_count",
    "_avg",
    "_sum",
    "_min",
    "_max",
  ],
  FloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  UsersRelationFilter: ["is", "isNot"],
  ratingsUser_idMovie_idCompoundUniqueInput: ["user_id", "movie_id"],
  RatingsCountOrderByAggregateInput: ["user_id", "movie_id", "rating"],
  RatingsAvgOrderByAggregateInput: ["user_id", "movie_id", "rating"],
  RatingsMaxOrderByAggregateInput: ["user_id", "movie_id", "rating"],
  RatingsMinOrderByAggregateInput: ["user_id", "movie_id", "rating"],
  RatingsSumOrderByAggregateInput: ["user_id", "movie_id", "rating"],
  FloatWithAggregatesFilter: [
    "equals",
    "in",
    "notIn",
    "lt",
    "lte",
    "gt",
    "gte",
    "not",
    "_count",
    "_avg",
    "_sum",
    "_min",
    "_max",
  ],
  UsersCountOrderByAggregateInput: ["id", "username", "password"],
  UsersAvgOrderByAggregateInput: ["id"],
  UsersMaxOrderByAggregateInput: ["id", "username", "password"],
  UsersMinOrderByAggregateInput: ["id", "username", "password"],
  UsersSumOrderByAggregateInput: ["id"],
  Movie_genresCreateNestedManyWithoutGenresInput: [
    "create",
    "connectOrCreate",
    "createMany",
    "connect",
  ],
  StringFieldUpdateOperationsInput: ["set"],
  Movie_genresUpdateManyWithoutGenresNestedInput: [
    "create",
    "connectOrCreate",
    "upsert",
    "createMany",
    "set",
    "disconnect",
    "delete",
    "connect",
    "update",
    "updateMany",
    "deleteMany",
  ],
  IntFieldUpdateOperationsInput: [
    "set",
    "increment",
    "decrement",
    "multiply",
    "divide",
  ],
  GenresCreateNestedOneWithoutMovie_genresInput: [
    "create",
    "connectOrCreate",
    "connect",
  ],
  MoviesCreateNestedOneWithoutMovie_genresInput: [
    "create",
    "connectOrCreate",
    "connect",
  ],
  GenresUpdateOneRequiredWithoutMovie_genresNestedInput: [
    "create",
    "connectOrCreate",
    "upsert",
    "connect",
    "update",
  ],
  MoviesUpdateOneRequiredWithoutMovie_genresNestedInput: [
    "create",
    "connectOrCreate",
    "upsert",
    "connect",
    "update",
  ],
  Movie_genresCreateNestedManyWithoutMoviesInput: [
    "create",
    "connectOrCreate",
    "createMany",
    "connect",
  ],
  RatingsCreateNestedManyWithoutMoviesInput: [
    "create",
    "connectOrCreate",
    "createMany",
    "connect",
  ],
  NullableStringFieldUpdateOperationsInput: ["set"],
  NullableDateTimeFieldUpdateOperationsInput: ["set"],
  NullableIntFieldUpdateOperationsInput: [
    "set",
    "increment",
    "decrement",
    "multiply",
    "divide",
  ],
  NullableDecimalFieldUpdateOperationsInput: [
    "set",
    "increment",
    "decrement",
    "multiply",
    "divide",
  ],
  Movie_genresUpdateManyWithoutMoviesNestedInput: [
    "create",
    "connectOrCreate",
    "upsert",
    "createMany",
    "set",
    "disconnect",
    "delete",
    "connect",
    "update",
    "updateMany",
    "deleteMany",
  ],
  RatingsUpdateManyWithoutMoviesNestedInput: [
    "create",
    "connectOrCreate",
    "upsert",
    "createMany",
    "set",
    "disconnect",
    "delete",
    "connect",
    "update",
    "updateMany",
    "deleteMany",
  ],
  MoviesCreateNestedOneWithoutRatingsInput: [
    "create",
    "connectOrCreate",
    "connect",
  ],
  UsersCreateNestedOneWithoutRatingsInput: [
    "create",
    "connectOrCreate",
    "connect",
  ],
  FloatFieldUpdateOperationsInput: [
    "set",
    "increment",
    "decrement",
    "multiply",
    "divide",
  ],
  MoviesUpdateOneRequiredWithoutRatingsNestedInput: [
    "create",
    "connectOrCreate",
    "upsert",
    "connect",
    "update",
  ],
  UsersUpdateOneRequiredWithoutRatingsNestedInput: [
    "create",
    "connectOrCreate",
    "upsert",
    "connect",
    "update",
  ],
  RatingsCreateNestedManyWithoutUsersInput: [
    "create",
    "connectOrCreate",
    "createMany",
    "connect",
  ],
  RatingsUpdateManyWithoutUsersNestedInput: [
    "create",
    "connectOrCreate",
    "upsert",
    "createMany",
    "set",
    "disconnect",
    "delete",
    "connect",
    "update",
    "updateMany",
    "deleteMany",
  ],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringFilter: [
    "equals",
    "in",
    "notIn",
    "lt",
    "lte",
    "gt",
    "gte",
    "contains",
    "startsWith",
    "endsWith",
    "not",
  ],
  NestedIntWithAggregatesFilter: [
    "equals",
    "in",
    "notIn",
    "lt",
    "lte",
    "gt",
    "gte",
    "not",
    "_count",
    "_avg",
    "_sum",
    "_min",
    "_max",
  ],
  NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringWithAggregatesFilter: [
    "equals",
    "in",
    "notIn",
    "lt",
    "lte",
    "gt",
    "gte",
    "contains",
    "startsWith",
    "endsWith",
    "not",
    "_count",
    "_min",
    "_max",
  ],
  NestedStringNullableFilter: [
    "equals",
    "in",
    "notIn",
    "lt",
    "lte",
    "gt",
    "gte",
    "contains",
    "startsWith",
    "endsWith",
    "not",
  ],
  NestedDateTimeNullableFilter: [
    "equals",
    "in",
    "notIn",
    "lt",
    "lte",
    "gt",
    "gte",
    "not",
  ],
  NestedIntNullableFilter: [
    "equals",
    "in",
    "notIn",
    "lt",
    "lte",
    "gt",
    "gte",
    "not",
  ],
  NestedDecimalNullableFilter: [
    "equals",
    "in",
    "notIn",
    "lt",
    "lte",
    "gt",
    "gte",
    "not",
  ],
  NestedStringNullableWithAggregatesFilter: [
    "equals",
    "in",
    "notIn",
    "lt",
    "lte",
    "gt",
    "gte",
    "contains",
    "startsWith",
    "endsWith",
    "not",
    "_count",
    "_min",
    "_max",
  ],
  NestedDateTimeNullableWithAggregatesFilter: [
    "equals",
    "in",
    "notIn",
    "lt",
    "lte",
    "gt",
    "gte",
    "not",
    "_count",
    "_min",
    "_max",
  ],
  NestedIntNullableWithAggregatesFilter: [
    "equals",
    "in",
    "notIn",
    "lt",
    "lte",
    "gt",
    "gte",
    "not",
    "_count",
    "_avg",
    "_sum",
    "_min",
    "_max",
  ],
  NestedFloatNullableFilter: [
    "equals",
    "in",
    "notIn",
    "lt",
    "lte",
    "gt",
    "gte",
    "not",
  ],
  NestedDecimalNullableWithAggregatesFilter: [
    "equals",
    "in",
    "notIn",
    "lt",
    "lte",
    "gt",
    "gte",
    "not",
    "_count",
    "_avg",
    "_sum",
    "_min",
    "_max",
  ],
  NestedFloatWithAggregatesFilter: [
    "equals",
    "in",
    "notIn",
    "lt",
    "lte",
    "gt",
    "gte",
    "not",
    "_count",
    "_avg",
    "_sum",
    "_min",
    "_max",
  ],
  Movie_genresCreateWithoutGenresInput: ["movies"],
  Movie_genresCreateOrConnectWithoutGenresInput: ["where", "create"],
  Movie_genresCreateManyGenresInputEnvelope: ["data", "skipDuplicates"],
  Movie_genresUpsertWithWhereUniqueWithoutGenresInput: [
    "where",
    "update",
    "create",
  ],
  Movie_genresUpdateWithWhereUniqueWithoutGenresInput: ["where", "data"],
  Movie_genresUpdateManyWithWhereWithoutGenresInput: ["where", "data"],
  Movie_genresScalarWhereInput: ["AND", "OR", "NOT", "movie_id", "genre_id"],
  GenresCreateWithoutMovie_genresInput: ["genre"],
  GenresCreateOrConnectWithoutMovie_genresInput: ["where", "create"],
  MoviesCreateWithoutMovie_genresInput: [
    "id",
    "title",
    "release_date",
    "runtime",
    "overview",
    "popularity",
    "vote_average",
    "vote_count",
    "poster_path",
    "backdrop_path",
    "ratings",
  ],
  MoviesCreateOrConnectWithoutMovie_genresInput: ["where", "create"],
  GenresUpsertWithoutMovie_genresInput: ["update", "create"],
  GenresUpdateWithoutMovie_genresInput: ["genre"],
  MoviesUpsertWithoutMovie_genresInput: ["update", "create"],
  MoviesUpdateWithoutMovie_genresInput: [
    "id",
    "title",
    "release_date",
    "runtime",
    "overview",
    "popularity",
    "vote_average",
    "vote_count",
    "poster_path",
    "backdrop_path",
    "ratings",
  ],
  Movie_genresCreateWithoutMoviesInput: ["genres"],
  Movie_genresCreateOrConnectWithoutMoviesInput: ["where", "create"],
  Movie_genresCreateManyMoviesInputEnvelope: ["data", "skipDuplicates"],
  RatingsCreateWithoutMoviesInput: ["rating", "users"],
  RatingsCreateOrConnectWithoutMoviesInput: ["where", "create"],
  RatingsCreateManyMoviesInputEnvelope: ["data", "skipDuplicates"],
  Movie_genresUpsertWithWhereUniqueWithoutMoviesInput: [
    "where",
    "update",
    "create",
  ],
  Movie_genresUpdateWithWhereUniqueWithoutMoviesInput: ["where", "data"],
  Movie_genresUpdateManyWithWhereWithoutMoviesInput: ["where", "data"],
  RatingsUpsertWithWhereUniqueWithoutMoviesInput: ["where", "update", "create"],
  RatingsUpdateWithWhereUniqueWithoutMoviesInput: ["where", "data"],
  RatingsUpdateManyWithWhereWithoutMoviesInput: ["where", "data"],
  RatingsScalarWhereInput: [
    "AND",
    "OR",
    "NOT",
    "user_id",
    "movie_id",
    "rating",
  ],
  MoviesCreateWithoutRatingsInput: [
    "id",
    "title",
    "release_date",
    "runtime",
    "overview",
    "popularity",
    "vote_average",
    "vote_count",
    "poster_path",
    "backdrop_path",
    "movie_genres",
  ],
  MoviesCreateOrConnectWithoutRatingsInput: ["where", "create"],
  UsersCreateWithoutRatingsInput: ["username", "password"],
  UsersCreateOrConnectWithoutRatingsInput: ["where", "create"],
  MoviesUpsertWithoutRatingsInput: ["update", "create"],
  MoviesUpdateWithoutRatingsInput: [
    "id",
    "title",
    "release_date",
    "runtime",
    "overview",
    "popularity",
    "vote_average",
    "vote_count",
    "poster_path",
    "backdrop_path",
    "movie_genres",
  ],
  UsersUpsertWithoutRatingsInput: ["update", "create"],
  UsersUpdateWithoutRatingsInput: ["username", "password"],
  RatingsCreateWithoutUsersInput: ["rating", "movies"],
  RatingsCreateOrConnectWithoutUsersInput: ["where", "create"],
  RatingsCreateManyUsersInputEnvelope: ["data", "skipDuplicates"],
  RatingsUpsertWithWhereUniqueWithoutUsersInput: ["where", "update", "create"],
  RatingsUpdateWithWhereUniqueWithoutUsersInput: ["where", "data"],
  RatingsUpdateManyWithWhereWithoutUsersInput: ["where", "data"],
  Movie_genresCreateManyGenresInput: ["movie_id"],
  Movie_genresUpdateWithoutGenresInput: ["movies"],
  Movie_genresCreateManyMoviesInput: ["genre_id"],
  RatingsCreateManyMoviesInput: ["user_id", "rating"],
  Movie_genresUpdateWithoutMoviesInput: ["genres"],
  RatingsUpdateWithoutMoviesInput: ["rating", "users"],
  RatingsCreateManyUsersInput: ["movie_id", "rating"],
  RatingsUpdateWithoutUsersInput: ["rating", "movies"],
};

type InputTypesNames = keyof typeof inputTypes;

type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<
  keyof (typeof inputTypes)[TInput]["prototype"],
  number | symbol
>;

type InputTypeFieldsConfig<TInput extends InputTypesNames> = FieldsConfig<
  InputTypeFieldNames<TInput>
>;

export type InputTypeConfig<TInput extends InputTypesNames> = {
  class?: ClassDecorator[];
  fields?: InputTypeFieldsConfig<TInput>;
};

export type InputTypesEnhanceMap = {
  [TInput in InputTypesNames]?: InputTypeConfig<TInput>;
};

export function applyInputTypesEnhanceMap(
  inputTypesEnhanceMap: InputTypesEnhanceMap,
) {
  for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
    const inputTypeName =
      inputTypeEnhanceMapKey as keyof typeof inputTypesEnhanceMap;
    const typeConfig = inputTypesEnhanceMap[inputTypeName]!;
    const typeClass = inputTypes[inputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      inputsInfo[inputTypeName as keyof typeof inputsInfo],
    );
  }
}
