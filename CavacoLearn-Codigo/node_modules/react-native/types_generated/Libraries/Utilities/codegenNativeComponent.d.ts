/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @generated SignedSource<<023ddb01b6f495228db7c116a76e314b>>
 *
 * This file was translated from Flow by scripts/js-api/build-types/index.js.
 * Original file: packages/react-native/Libraries/Utilities/codegenNativeComponent.js
 */

import type { HostComponent } from "../../src/private/types/HostComponent";
type NativeComponentOptions = Readonly<{
  interfaceOnly?: boolean | undefined;
  paperComponentName?: string | undefined;
  paperComponentNameDeprecated?: string | undefined;
  excludedPlatforms?: ReadonlyArray<"iOS" | "android"> | undefined;
}>;
export type NativeComponentType<T extends {}> = HostComponent<T>;
declare function codegenNativeComponent<Props extends {}>(componentName: string, options?: NativeComponentOptions): NativeComponentType<Props>;
declare const $$codegenNativeComponent: typeof codegenNativeComponent;
declare type $$codegenNativeComponent = typeof $$codegenNativeComponent;
export default $$codegenNativeComponent;
