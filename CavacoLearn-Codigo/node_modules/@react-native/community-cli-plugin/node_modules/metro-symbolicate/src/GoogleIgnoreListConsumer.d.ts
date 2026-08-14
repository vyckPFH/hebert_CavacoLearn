/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @noformat
 * @oncall react_native
 * @generated SignedSource<<ccc6201d24a5a5a58eb55d27f6e45e86>>
 *
 * This file was translated from Flow by scripts/generateTypeScriptDefinitions.js
 * Original file: packages/metro-symbolicate/src/GoogleIgnoreListConsumer.js
 * To regenerate, run:
 *   js1 build metro-ts-defs (internal) OR
 *   yarn run build-ts-defs (OSS) 
 */

import type {MixedSourceMap} from 'metro-source-map';

type SourceNameNormalizer = (
  $$PARAM_0$$: string,
  $$PARAM_1$$: {readonly sourceRoot?: null | undefined | string},
) => string;
/**
  * Consumes the `x_google_ignoreList` metadata field from a source map and
  * exposes various queries on it.
  *
  * By default, source names are normalized using the same logic that the
  * `source-map@0.5.6` package uses internally. This is crucial for keeping the
  * sources list in sync with a `SourceMapConsumer` instance.

  * If you're using this with a different source map reader (e.g. one that
  * doesn't normalize source names at all), you can switch out the normalization
  * function in the constructor, e.g.
  *
  *     new GoogleIgnoreListConsumer(map, source => source) // Don't normalize
  */
declare class GoogleIgnoreListConsumer {
  constructor(map: MixedSourceMap, normalizeSourceFn?: SourceNameNormalizer);
  /**
   * Returns `true` if the given source is in this map's ignore list, `false`
   * otherwise.
   *
   * When used with the `source-map` package, you'll first use
   * `SourceMapConsumer#originalPositionFor` to retrieve a source location,
   * then pass that location to `isIgnored`.
   */
  isIgnored($$PARAM_0$$: {readonly source: null | undefined | string}): boolean;
  /**
   * Returns this map's ignore list as a new array with indices based on
   * `sources`.
   *
   * This array can be used as the `x_google_ignoreList` field of a map whose
   * `sources` field is the array that was passed into this method.
   */
  toArray(sources: ReadonlyArray<null | undefined | string>): Array<number>;
}
export default GoogleIgnoreListConsumer;
