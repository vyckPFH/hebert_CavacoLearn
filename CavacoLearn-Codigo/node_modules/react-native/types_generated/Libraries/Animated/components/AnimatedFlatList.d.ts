/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @generated SignedSource<<b991f718f6691ce93e9df150a6ace36c>>
 *
 * This file was translated from Flow by scripts/js-api/build-types/index.js.
 * Original file: packages/react-native/Libraries/Animated/components/AnimatedFlatList.js
 */

import type { AnimatedProps } from "../createAnimatedComponent";
import FlatList, { type FlatListProps } from "../../Lists/FlatList";
import * as React from "react";
declare const $$AnimatedFlatList: <ItemT = any>(props: Omit<AnimatedProps<FlatListProps<ItemT>>, keyof {
  ref?: React.Ref<FlatList<ItemT>> | undefined;
}> & {
  ref?: React.Ref<FlatList<ItemT>> | undefined;
}) => React.ReactNode;
declare type $$AnimatedFlatList = typeof $$AnimatedFlatList;
export default $$AnimatedFlatList;
