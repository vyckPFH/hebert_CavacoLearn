/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @generated SignedSource<<7192abadcfe547ec0a5e4bdf83c39ef4>>
 *
 * This file was translated from Flow by scripts/js-api/build-types/index.js.
 * Original file: packages/react-native/Libraries/Components/TextInput/InputAccessoryView.js
 */

import { type ColorValue, type ViewStyleProp } from "../../StyleSheet/StyleSheet";
import * as React from "react";
export interface InputAccessoryViewProps {
  readonly children: React.ReactNode;
  /**
   * An ID used to associate this `InputAccessoryView` to specified `TextInput`(s).
   */
  readonly nativeID?: string | undefined;
  readonly style?: ViewStyleProp | undefined;
  readonly backgroundColor?: ColorValue | undefined;
}
declare const InputAccessoryView: React.ComponentType<InputAccessoryViewProps>;
/**
 * A component which enables customization of the keyboard input accessory view on iOS. The input accessory view is displayed above the keyboard whenever a `TextInput` has focus. This component can be used to create custom toolbars.
 *
 * To use this component, wrap your custom toolbar with `InputAccessoryView` and set a `nativeID`. Then, pass that `nativeID` as the `inputAccessoryViewID` of whatever `TextInput` you desire.
 *
 * This component can also be used to create sticky text inputs (text inputs which are anchored to the top of the keyboard). To do this, wrap a `TextInput` with `InputAccessoryView` and don't set a `nativeID`.
 *
 * @see https://reactnative.dev/docs/inputaccessoryview
 * @platform ios
 */
declare const $$InputAccessoryView: typeof InputAccessoryView;
declare type $$InputAccessoryView = typeof $$InputAccessoryView;
export default $$InputAccessoryView;
