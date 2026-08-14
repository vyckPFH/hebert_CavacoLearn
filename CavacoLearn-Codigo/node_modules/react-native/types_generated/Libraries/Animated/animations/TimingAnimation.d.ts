/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @generated SignedSource<<38370d2065d999c7ba0074e6b74c9f8f>>
 *
 * This file was translated from Flow by scripts/js-api/build-types/index.js.
 * Original file: packages/react-native/Libraries/Animated/animations/TimingAnimation.js
 */

import type { RgbaValue } from "../nodes/AnimatedColor";
import type AnimatedInterpolation from "../nodes/AnimatedInterpolation";
import type AnimatedValue from "../nodes/AnimatedValue";
import type AnimatedValueXY from "../nodes/AnimatedValueXY";
import type { AnimationConfig, EndCallback } from "./Animation";
import AnimatedColor from "../nodes/AnimatedColor";
import Animation from "./Animation";
export type TimingAnimationConfig = Readonly<Omit<AnimationConfig, keyof {
  toValue: number | AnimatedValue | Readonly<{
    x: number;
    y: number;
  }> | AnimatedValueXY | RgbaValue | AnimatedColor | AnimatedInterpolation<number>;
  easing?: ((value: number) => number) | undefined;
  duration?: number | undefined;
  delay?: number | undefined;
}> & {
  toValue: number | AnimatedValue | Readonly<{
    x: number;
    y: number;
  }> | AnimatedValueXY | RgbaValue | AnimatedColor | AnimatedInterpolation<number>;
  easing?: ((value: number) => number) | undefined;
  duration?: number | undefined;
  delay?: number | undefined;
}>;
export type TimingAnimationConfigSingle = Readonly<Omit<AnimationConfig, keyof {
  toValue: number;
  easing?: ((value: number) => number) | undefined;
  duration?: number | undefined;
  delay?: number | undefined;
}> & {
  toValue: number;
  easing?: ((value: number) => number) | undefined;
  duration?: number | undefined;
  delay?: number | undefined;
}>;
declare class TimingAnimation extends Animation {
  constructor(config: TimingAnimationConfigSingle);
  start(fromValue: number, onUpdate: (value: number) => void, onEnd: null | undefined | EndCallback, previousAnimation: null | undefined | Animation, animatedValue: AnimatedValue): void;
  onUpdate(): void;
  stop(): void;
}
export default TimingAnimation;
