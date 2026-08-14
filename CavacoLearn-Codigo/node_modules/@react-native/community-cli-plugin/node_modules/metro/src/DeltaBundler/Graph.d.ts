/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @noformat
 * @oncall react_native
 * @generated SignedSource<<fc329765599e313b7d0cb6b45b7bbbdc>>
 *
 * This file was translated from Flow by scripts/generateTypeScriptDefinitions.js
 * Original file: packages/metro/src/DeltaBundler/Graph.js
 * To regenerate, run:
 *   js1 build metro-ts-defs (internal) OR
 *   yarn run build-ts-defs (OSS) 
 */

import type {
  Dependencies,
  GraphInputOptions,
  MixedOutput,
  Module,
  Options,
  TransformInputOptions,
} from './types';

import CountingSet from '../lib/CountingSet';

export type Result<T> = {
  added: Map<string, Module<T>>;
  modified: Map<string, Module<T>>;
  deleted: Set<string>;
};
export declare class Graph<T = MixedOutput> {
  readonly entryPoints: ReadonlySet<string>;
  readonly transformOptions: TransformInputOptions;
  readonly dependencies: Dependencies<T>;
  constructor(options: GraphInputOptions);
  /**
   * Dependency Traversal logic for the Delta Bundler. This method calculates
   * the modules that should be included in the bundle by traversing the
   * dependency graph.
   * Instead of traversing the whole graph each time, it just calculates the
   * difference between runs by only traversing the added/removed dependencies.
   * To do so, it uses the passed graph dependencies and it mutates it.
   * The paths parameter contains the absolute paths of the root files that the
   * method should traverse. Normally, these paths should be the modified files
   * since the last traversal.
   */
  traverseDependencies(
    paths: ReadonlyArray<string>,
    options: Options<T>,
  ): Promise<Result<T>>;
  initialTraverseDependencies(options: Options<T>): Promise<Result<T>>;
  /**
   * Collect a list of context modules which include a given file.
   */
  markModifiedContextModules(
    filePath: string,
    modifiedPaths: Set<string> | CountingSet<string>,
  ): void;
  /**
   * Gets the list of modules affected by the deletion of a given file. The
   * caller is expected to mark these modules as modified in the next call to
   * traverseDependencies. Note that the list may contain duplicates.
   */
  getModifiedModulesForDeletedPath(filePath: string): Iterable<string>;
  /**
   * Re-traverse the dependency graph in DFS order to reorder the modules and
   * guarantee the same order between runs. This method mutates the passed graph.
   */
  reorderGraph(options: {shallow: boolean}): void;
}
