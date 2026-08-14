/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @generated SignedSource<<56acaea389704095c6b47f91b7e3b7ae>>
 *
 * This file was translated from Flow by scripts/js-api/build-types/index.js.
 * Original file: packages/react-native/Libraries/Components/Keyboard/KeyboardAvoidingView.js
 */

import type { ViewStyleProp } from "../../StyleSheet/StyleSheet";
import type { ViewProps } from "../View/ViewPropTypes";
import View from "../View/View";
import * as React from "react";
export interface KeyboardAvoidingViewProps extends Readonly<Omit<ViewProps, keyof {
  /**
   * Specify how to react to the presence of the keyboard.
   */
  behavior?: ("height" | "position" | "padding") | undefined;
  /**
   * The style of the content container (View) when `behavior` is 'position'.
   */
  contentContainerStyle?: ViewStyleProp | undefined;
  /**
   * Whether the `KeyboardAvoidingView` is enabled.
   *
   * @default `true`
   */
  enabled?: boolean | undefined;
  /**
   * Distance between the top of the user screen and the React Native view,
   * may be non-zero in some use cases.
   *
   * @default `0`
   */
  keyboardVerticalOffset?: number | undefined;
}>> {
  /**
   * Specify how to react to the presence of the keyboard.
   */
  readonly behavior?: ("height" | "position" | "padding") | undefined;
  /**
   * The style of the content container (View) when `behavior` is 'position'.
   */
  readonly contentContainerStyle?: ViewStyleProp | undefined;
  /**
   * Whether the `KeyboardAvoidingView` is enabled.
   *
   * @default `true`
   */
  readonly enabled?: boolean | undefined;
  /**
   * Distance between the top of the user screen and the React Native view,
   * may be non-zero in some use cases.
   *
   * @default `0`
   */
  readonly keyboardVerticalOffset?: number | undefined;
}
type KeyboardAvoidingViewState = {
  bottom: number;
};
/**
 * Automatically adjusts its height, position, or bottom padding based on the
 * keyboard height to remain visible while the virtual keyboard is displayed.
 *
 * @see https://reactnative.dev/docs/keyboardavoidingview
 */
declare class KeyboardAvoidingView extends React.Component<KeyboardAvoidingViewProps, KeyboardAvoidingViewState> {
  viewRef: {
    current: React.ComponentRef<typeof View> | null;
  };
  constructor(props: KeyboardAvoidingViewProps);
  componentDidUpdate(_: KeyboardAvoidingViewProps, prevState: KeyboardAvoidingViewState): void;
  componentDidMount(): void;
  componentWillUnmount(): void;
  render(): React.ReactNode;
}
export type KeyboardAvoidingViewInstance = KeyboardAvoidingView;
export default KeyboardAvoidingView;
