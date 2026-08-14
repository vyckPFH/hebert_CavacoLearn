/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @generated SignedSource<<80ba02728e26f878345896f247e607f2>>
 *
 * This file was translated from Flow by scripts/js-api/build-types/index.js.
 * Original file: packages/react-native/Libraries/Components/Button.js
 */

import type { GestureResponderEvent } from "../Types/CoreEventTypes";
import type { AccessibilityActionEvent, AccessibilityActionInfo, AccessibilityState } from "./View/ViewAccessibility";
import { type ColorValue } from "../StyleSheet/StyleSheet";
import TouchableNativeFeedback from "./Touchable/TouchableNativeFeedback";
import TouchableOpacity from "./Touchable/TouchableOpacity";
import * as React from "react";
export interface ButtonProps {
  /**
   * Text to display inside the button. On Android the given title will be
   * converted to the uppercased form.
   */
  readonly title: string;
  /**
   * Handler called when the user taps the button.
   */
  readonly onPress?: ((event?: GestureResponderEvent) => unknown) | undefined;
  /**
   * If `true`, doesn't play system sound on touch.
   *
   * @platform android
   *
   * @default `false`
   */
  readonly touchSoundDisabled?: boolean | undefined;
  /**
   * Color of the text (iOS), or background color of the button (Android).
   *
   * @default {@platform android} `'#2196F3'`
   * @default {@platform ios} `'#007AFF'`
   */
  readonly color?: ColorValue | undefined;
  /**
   * TV preferred focus.
   *
   * @platform tv
   *
   * @default `false`
   * @deprecated Use `focusable` instead
   */
  readonly hasTVPreferredFocus?: boolean | undefined;
  /**
   * Designates the next view to receive focus when the user navigates down. See
   * the [Android documentation][android:nextFocusDown].
   *
   * [android:nextFocusDown]:
   * https://developer.android.com/reference/android/view/View.html#attr_android:nextFocusDown
   *
   * @platform android, tv
   */
  readonly nextFocusDown?: number | undefined;
  /**
   * Designates the next view to receive focus when the user navigates forward.
   * See the [Android documentation][android:nextFocusForward].
   *
   * [android:nextFocusForward]:
   * https://developer.android.com/reference/android/view/View.html#attr_android:nextFocusForward
   *
   * @platform android, tv
   */
  readonly nextFocusForward?: number | undefined;
  /**
   * Designates the next view to receive focus when the user navigates left. See
   * the [Android documentation][android:nextFocusLeft].
   *
   * [android:nextFocusLeft]:
   * https://developer.android.com/reference/android/view/View.html#attr_android:nextFocusLeft
   *
   * @platform android, tv
   */
  readonly nextFocusLeft?: number | undefined;
  /**
   * Designates the next view to receive focus when the user navigates right. See
   * the [Android documentation][android:nextFocusRight].
   *
   * [android:nextFocusRight]:
   * https://developer.android.com/reference/android/view/View.html#attr_android:nextFocusRight
   *
   * @platform android, tv
   */
  readonly nextFocusRight?: number | undefined;
  /**
   * Designates the next view to receive focus when the user navigates up. See
   * the [Android documentation][android:nextFocusUp].
   *
   * [android:nextFocusUp]:
   * https://developer.android.com/reference/android/view/View.html#attr_android:nextFocusUp
   *
   * @platform android, tv
   */
  readonly nextFocusUp?: number | undefined;
  /**
   * Text to display for blindness accessibility features.
   */
  readonly accessibilityLabel?: string | undefined;
  /**
   * Alias for `accessibilityLabel`.
   */
  readonly "aria-label"?: string | undefined;
  /**
   * If `true`, disable all interactions for this component.
   *
   * @default `false`
   */
  readonly disabled?: boolean | undefined;
  readonly testID?: string | undefined;
  readonly accessible?: boolean | undefined;
  readonly accessibilityActions?: ReadonlyArray<AccessibilityActionInfo> | undefined;
  readonly onAccessibilityAction?: ((event: AccessibilityActionEvent) => unknown) | undefined;
  readonly accessibilityState?: AccessibilityState | undefined;
  /**
   * Alias for `accessibilityState`.
   */
  readonly "aria-busy"?: boolean | undefined;
  readonly "aria-checked"?: (boolean | undefined) | "mixed" | undefined;
  readonly "aria-disabled"?: boolean | undefined;
  readonly "aria-expanded"?: boolean | undefined;
  readonly "aria-selected"?: boolean | undefined;
  readonly importantForAccessibility?: ("auto" | "yes" | "no" | "no-hide-descendants") | undefined;
  readonly accessibilityHint?: string | undefined;
  /**
   * A BCP 47 language tag for the screen reader to use when reading text
   * content.
   *
   * @platform ios
   */
  readonly accessibilityLanguage?: string | undefined;
}
declare const NativeTouchable: typeof TouchableNativeFeedback | typeof TouchableOpacity;
export type ButtonInstance = React.ComponentRef<typeof NativeTouchable>;
declare const Button: (props: Omit<ButtonProps, keyof {
  ref?: React.Ref<ButtonInstance> | undefined;
}> & {
  ref?: React.Ref<ButtonInstance> | undefined;
}) => React.ReactNode;
/**
 * A basic button component that should render nicely on any platform. Supports a
 * minimal level of customization.
 *
 * If this button doesn't look right for your app, you can build your own button
 * using `Pressable`.
 *
 * Example:
 *
 * ```tsx
 * <Button
 *   onPress={onPressLearnMore}
 *   title="Learn More"
 *   color="#841584"
 *   accessibilityLabel="Learn more about this purple button"
 * />
 * ```
 *
 * @see https://reactnative.dev/docs/button
 */
declare const $$Button: typeof Button;
declare type $$Button = typeof $$Button;
export default $$Button;
