/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @generated SignedSource<<f62ae565256ed2672946efdc0f9e854f>>
 *
 * This file was translated from Flow by scripts/js-api/build-types/index.js.
 * Original file: packages/react-native/Libraries/StyleSheet/PlatformColorValueTypes.js.flow
 */

import type { ProcessedColorValue } from "./processColor";
import type { NativeColorValue } from "./StyleSheet";
/**
 * Select native platform color
 * The color must match the string that exists on the native platform
 *
 * @see https://reactnative.dev/docs/platformcolor#example
 */
export declare function PlatformColor(...names: Array<string>): NativeColorValue;
export declare function normalizeColorObject(color: NativeColorValue): null | undefined | ProcessedColorValue;
export declare function processColorObject(color: NativeColorValue): null | undefined | NativeColorValue;
