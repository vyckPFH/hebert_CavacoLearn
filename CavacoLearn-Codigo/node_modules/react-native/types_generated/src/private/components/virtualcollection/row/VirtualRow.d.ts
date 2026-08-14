/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @generated SignedSource<<394be4a100baf3398f3479eeb1b8d778>>
 *
 * This file was translated from Flow by scripts/js-api/build-types/index.js.
 * Original file: packages/react-native/src/private/components/virtualcollection/row/VirtualRow.js
 */

import type { Item, VirtualCollection } from "../Virtual";
import * as React from "react";
declare const $$VirtualRow: <TItem extends Item>(props: {
  children: (item: TItem, key: string) => React.ReactNode;
  items: VirtualCollection<TItem>;
  itemToKey?: (($$PARAM_0$$: TItem) => string) | undefined;
  removeClippedSubviews?: boolean | undefined;
  testID?: null | undefined | string;
}) => React.ReactNode;
declare type $$VirtualRow = typeof $$VirtualRow;
export default $$VirtualRow;
