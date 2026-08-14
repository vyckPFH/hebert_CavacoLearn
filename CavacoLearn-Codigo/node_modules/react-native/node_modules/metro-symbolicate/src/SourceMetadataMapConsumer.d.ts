/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @noformat
 * @oncall react_native
 * @generated SignedSource<<ca5c64de15e1eb58ec8f523741b89502>>
 *
 * This file was translated from Flow by scripts/generateTypeScriptDefinitions.js
 * Original file: packages/metro-symbolicate/src/SourceMetadataMapConsumer.js
 * To regenerate, run:
 *   js1 build metro-ts-defs (internal) OR
 *   yarn run build-ts-defs (OSS) 
 */

import type {FBSourcesArray, MixedSourceMap} from 'metro-source-map';

type Position = {readonly line: number; readonly column: number};
type SourceNameNormalizer = (
  $$PARAM_0$$: string,
  $$PARAM_1$$: {readonly sourceRoot?: null | undefined | string},
) => string;
/**
 * Consumes the `x_facebook_sources` metadata field from a source map and
 * exposes various queries on it.
 *
 * By default, source names are normalized using the same logic that the
 * `source-map@0.5.6` package uses internally. This is crucial for keeping the
 * sources list in sync with a `SourceMapConsumer` instance.

 * If you're using this with a different source map reader (e.g. one that
 * doesn't normalize source names at all), you can switch out the normalization
 * function in the constructor, e.g.
 *
 *     new SourceMetadataMapConsumer(map, source => source) // Don't normalize
 */
declare class SourceMetadataMapConsumer {
  constructor(map: MixedSourceMap, normalizeSourceFn?: SourceNameNormalizer);
  /**
   * Retrieves a human-readable name for the function enclosing a particular
   * source location.
   *
   * When used with the `source-map` package, you'll first use
   * `SourceMapConsumer#originalPositionFor` to retrieve a source location,
   * then pass that location to `functionNameFor`.
   */
  functionNameFor(
    $$PARAM_0$$: Position & {readonly source: null | undefined | string},
  ): null | undefined | string;
  /**
   * Returns this map's source metadata as a new array with the same order as
   * `sources`.
   *
   * This array can be used as the `x_facebook_sources` field of a map whose
   * `sources` field is the array that was passed into this method.
   */
  toArray(sources: ReadonlyArray<string>): FBSourcesArray;
}
export default SourceMetadataMapConsumer;
