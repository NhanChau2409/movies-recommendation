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
  MovieGenres: crudResolvers.MovieGenresCrudResolver,
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
  MovieGenres: {
    aggregateMovieGenres: actionResolvers.AggregateMovieGenresResolver,
    createManyMovieGenres: actionResolvers.CreateManyMovieGenresResolver,
    createOneMovieGenres: actionResolvers.CreateOneMovieGenresResolver,
    deleteManyMovieGenres: actionResolvers.DeleteManyMovieGenresResolver,
    deleteOneMovieGenres: actionResolvers.DeleteOneMovieGenresResolver,
    findFirstMovieGenres: actionResolvers.FindFirstMovieGenresResolver,
    findFirstMovieGenresOrThrow:
      actionResolvers.FindFirstMovieGenresOrThrowResolver,
    findManyMovieGenres: actionResolvers.FindManyMovieGenresResolver,
    findUniqueMovieGenres: actionResolvers.FindUniqueMovieGenresResolver,
    findUniqueMovieGenresOrThrow:
      actionResolvers.FindUniqueMovieGenresOrThrowResolver,
    groupByMovieGenres: actionResolvers.GroupByMovieGenresResolver,
    updateManyMovieGenres: actionResolvers.UpdateManyMovieGenresResolver,
    updateOneMovieGenres: actionResolvers.UpdateOneMovieGenresResolver,
    upsertOneMovieGenres: actionResolvers.UpsertOneMovieGenresResolver,
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
  MovieGenres: [
    "aggregateMovieGenres",
    "createManyMovieGenres",
    "createOneMovieGenres",
    "deleteManyMovieGenres",
    "deleteOneMovieGenres",
    "findFirstMovieGenres",
    "findFirstMovieGenresOrThrow",
    "findManyMovieGenres",
    "findUniqueMovieGenres",
    "findUniqueMovieGenresOrThrow",
    "groupByMovieGenres",
    "updateManyMovieGenres",
    "updateOneMovieGenres",
    "upsertOneMovieGenres",
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
  CreateManyGenresArgs: ["data"],
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
  AggregateMovieGenresArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyMovieGenresArgs: ["data"],
  CreateOneMovieGenresArgs: ["data"],
  DeleteManyMovieGenresArgs: ["where"],
  DeleteOneMovieGenresArgs: ["where"],
  FindFirstMovieGenresArgs: [
    "where",
    "orderBy",
    "cursor",
    "take",
    "skip",
    "distinct",
  ],
  FindFirstMovieGenresOrThrowArgs: [
    "where",
    "orderBy",
    "cursor",
    "take",
    "skip",
    "distinct",
  ],
  FindManyMovieGenresArgs: [
    "where",
    "orderBy",
    "cursor",
    "take",
    "skip",
    "distinct",
  ],
  FindUniqueMovieGenresArgs: ["where"],
  FindUniqueMovieGenresOrThrowArgs: ["where"],
  GroupByMovieGenresArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyMovieGenresArgs: ["data", "where"],
  UpdateOneMovieGenresArgs: ["data", "where"],
  UpsertOneMovieGenresArgs: ["where", "create", "update"],
  AggregateMoviesArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyMoviesArgs: ["data"],
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
  CreateManyRatingsArgs: ["data"],
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
  CreateManyUsersArgs: ["data"],
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
  MovieGenres: relationResolvers.MovieGenresRelationsResolver,
  Movies: relationResolvers.MoviesRelationsResolver,
  Ratings: relationResolvers.RatingsRelationsResolver,
  Users: relationResolvers.UsersRelationsResolver,
};
const relationResolversInfo = {
  Genres: ["MovieGenres"],
  MovieGenres: ["Genres", "Movies"],
  Movies: ["MovieGenres", "Ratings"],
  Ratings: ["Movies", "Users"],
  Users: ["Ratings"],
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
  Genres: ["id", "name"],
  MovieGenres: ["movie_id", "genre_id"],
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
  GenresGroupBy: ["id", "name", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateMovieGenres: ["_count", "_avg", "_sum", "_min", "_max"],
  MovieGenresGroupBy: [
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
  GenresCount: ["MovieGenres"],
  GenresCountAggregate: ["id", "name", "_all"],
  GenresAvgAggregate: ["id"],
  GenresSumAggregate: ["id"],
  GenresMinAggregate: ["id", "name"],
  GenresMaxAggregate: ["id", "name"],
  MovieGenresCountAggregate: ["movie_id", "genre_id", "_all"],
  MovieGenresAvgAggregate: ["movie_id", "genre_id"],
  MovieGenresSumAggregate: ["movie_id", "genre_id"],
  MovieGenresMinAggregate: ["movie_id", "genre_id"],
  MovieGenresMaxAggregate: ["movie_id", "genre_id"],
  MoviesCount: ["MovieGenres", "Ratings"],
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
  UsersCount: ["Ratings"],
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
  GenresWhereInput: ["AND", "OR", "NOT", "id", "name", "MovieGenres"],
  GenresOrderByWithRelationInput: ["id", "name", "MovieGenres"],
  GenresWhereUniqueInput: ["id"],
  GenresOrderByWithAggregationInput: [
    "id",
    "name",
    "_count",
    "_avg",
    "_max",
    "_min",
    "_sum",
  ],
  GenresScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name"],
  MovieGenresWhereInput: [
    "AND",
    "OR",
    "NOT",
    "movie_id",
    "genre_id",
    "Genres",
    "Movies",
  ],
  MovieGenresOrderByWithRelationInput: [
    "movie_id",
    "genre_id",
    "Genres",
    "Movies",
  ],
  MovieGenresWhereUniqueInput: ["movie_id_genre_id"],
  MovieGenresOrderByWithAggregationInput: [
    "movie_id",
    "genre_id",
    "_count",
    "_avg",
    "_max",
    "_min",
    "_sum",
  ],
  MovieGenresScalarWhereWithAggregatesInput: [
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
    "MovieGenres",
    "Ratings",
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
    "MovieGenres",
    "Ratings",
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
    "Movies",
    "Users",
  ],
  RatingsOrderByWithRelationInput: [
    "user_id",
    "movie_id",
    "rating",
    "Movies",
    "Users",
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
    "Ratings",
  ],
  UsersOrderByWithRelationInput: ["id", "username", "password", "Ratings"],
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
  GenresCreateInput: ["id", "name", "MovieGenres"],
  GenresUpdateInput: ["id", "name", "MovieGenres"],
  GenresCreateManyInput: ["id", "name"],
  GenresUpdateManyMutationInput: ["id", "name"],
  MovieGenresCreateInput: ["Genres", "Movies"],
  MovieGenresUpdateInput: ["Genres", "Movies"],
  MovieGenresCreateManyInput: ["movie_id", "genre_id"],
  MovieGenresUpdateManyMutationInput: [],
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
    "MovieGenres",
    "Ratings",
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
    "MovieGenres",
    "Ratings",
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
  RatingsCreateInput: ["rating", "Movies", "Users"],
  RatingsUpdateInput: ["rating", "Movies", "Users"],
  RatingsCreateManyInput: ["user_id", "movie_id", "rating"],
  RatingsUpdateManyMutationInput: ["rating"],
  UsersCreateInput: ["id", "username", "password", "Ratings"],
  UsersUpdateInput: ["id", "username", "password", "Ratings"],
  UsersCreateManyInput: ["id", "username", "password"],
  UsersUpdateManyMutationInput: ["id", "username", "password"],
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
    "not",
  ],
  MovieGenresListRelationFilter: ["every", "some", "none"],
  MovieGenresOrderByRelationAggregateInput: ["_count"],
  GenresCountOrderByAggregateInput: ["id", "name"],
  GenresAvgOrderByAggregateInput: ["id"],
  GenresMaxOrderByAggregateInput: ["id", "name"],
  GenresMinOrderByAggregateInput: ["id", "name"],
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
    "not",
    "_count",
    "_min",
    "_max",
  ],
  GenresRelationFilter: ["is", "isNot"],
  MoviesRelationFilter: ["is", "isNot"],
  MovieGenresMovie_idGenre_idCompoundUniqueInput: ["movie_id", "genre_id"],
  MovieGenresCountOrderByAggregateInput: ["movie_id", "genre_id"],
  MovieGenresAvgOrderByAggregateInput: ["movie_id", "genre_id"],
  MovieGenresMaxOrderByAggregateInput: ["movie_id", "genre_id"],
  MovieGenresMinOrderByAggregateInput: ["movie_id", "genre_id"],
  MovieGenresSumOrderByAggregateInput: ["movie_id", "genre_id"],
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
  RatingsUser_idMovie_idCompoundUniqueInput: ["user_id", "movie_id"],
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
  MovieGenresCreateNestedManyWithoutGenresInput: [
    "create",
    "connectOrCreate",
    "createMany",
    "connect",
  ],
  IntFieldUpdateOperationsInput: [
    "set",
    "increment",
    "decrement",
    "multiply",
    "divide",
  ],
  StringFieldUpdateOperationsInput: ["set"],
  MovieGenresUpdateManyWithoutGenresNestedInput: [
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
  GenresCreateNestedOneWithoutMovieGenresInput: [
    "create",
    "connectOrCreate",
    "connect",
  ],
  MoviesCreateNestedOneWithoutMovieGenresInput: [
    "create",
    "connectOrCreate",
    "connect",
  ],
  GenresUpdateOneRequiredWithoutMovieGenresNestedInput: [
    "create",
    "connectOrCreate",
    "upsert",
    "connect",
    "update",
  ],
  MoviesUpdateOneRequiredWithoutMovieGenresNestedInput: [
    "create",
    "connectOrCreate",
    "upsert",
    "connect",
    "update",
  ],
  MovieGenresCreateNestedManyWithoutMoviesInput: [
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
  MovieGenresUpdateManyWithoutMoviesNestedInput: [
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
  MovieGenresCreateWithoutGenresInput: ["Movies"],
  MovieGenresCreateOrConnectWithoutGenresInput: ["where", "create"],
  MovieGenresCreateManyGenresInputEnvelope: ["data"],
  MovieGenresUpsertWithWhereUniqueWithoutGenresInput: [
    "where",
    "update",
    "create",
  ],
  MovieGenresUpdateWithWhereUniqueWithoutGenresInput: ["where", "data"],
  MovieGenresUpdateManyWithWhereWithoutGenresInput: ["where", "data"],
  MovieGenresScalarWhereInput: ["AND", "OR", "NOT", "movie_id", "genre_id"],
  GenresCreateWithoutMovieGenresInput: ["id", "name"],
  GenresCreateOrConnectWithoutMovieGenresInput: ["where", "create"],
  MoviesCreateWithoutMovieGenresInput: [
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
    "Ratings",
  ],
  MoviesCreateOrConnectWithoutMovieGenresInput: ["where", "create"],
  GenresUpsertWithoutMovieGenresInput: ["update", "create"],
  GenresUpdateWithoutMovieGenresInput: ["id", "name"],
  MoviesUpsertWithoutMovieGenresInput: ["update", "create"],
  MoviesUpdateWithoutMovieGenresInput: [
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
    "Ratings",
  ],
  MovieGenresCreateWithoutMoviesInput: ["Genres"],
  MovieGenresCreateOrConnectWithoutMoviesInput: ["where", "create"],
  MovieGenresCreateManyMoviesInputEnvelope: ["data"],
  RatingsCreateWithoutMoviesInput: ["rating", "Users"],
  RatingsCreateOrConnectWithoutMoviesInput: ["where", "create"],
  RatingsCreateManyMoviesInputEnvelope: ["data"],
  MovieGenresUpsertWithWhereUniqueWithoutMoviesInput: [
    "where",
    "update",
    "create",
  ],
  MovieGenresUpdateWithWhereUniqueWithoutMoviesInput: ["where", "data"],
  MovieGenresUpdateManyWithWhereWithoutMoviesInput: ["where", "data"],
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
    "MovieGenres",
  ],
  MoviesCreateOrConnectWithoutRatingsInput: ["where", "create"],
  UsersCreateWithoutRatingsInput: ["id", "username", "password"],
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
    "MovieGenres",
  ],
  UsersUpsertWithoutRatingsInput: ["update", "create"],
  UsersUpdateWithoutRatingsInput: ["id", "username", "password"],
  RatingsCreateWithoutUsersInput: ["rating", "Movies"],
  RatingsCreateOrConnectWithoutUsersInput: ["where", "create"],
  RatingsCreateManyUsersInputEnvelope: ["data"],
  RatingsUpsertWithWhereUniqueWithoutUsersInput: ["where", "update", "create"],
  RatingsUpdateWithWhereUniqueWithoutUsersInput: ["where", "data"],
  RatingsUpdateManyWithWhereWithoutUsersInput: ["where", "data"],
  MovieGenresCreateManyGenresInput: ["movie_id"],
  MovieGenresUpdateWithoutGenresInput: ["Movies"],
  MovieGenresCreateManyMoviesInput: ["genre_id"],
  RatingsCreateManyMoviesInput: ["user_id", "rating"],
  MovieGenresUpdateWithoutMoviesInput: ["Genres"],
  RatingsUpdateWithoutMoviesInput: ["rating", "Users"],
  RatingsCreateManyUsersInput: ["movie_id", "rating"],
  RatingsUpdateWithoutUsersInput: ["rating", "Movies"],
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
