/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @generated SignedSource<<18d7fc778fd55326ee6ff956ad8b361c>>
 *
 * This file was translated from Flow by scripts/js-api/build-types/index.js.
 * Original file: packages/react-native/src/private/types/HostComponent.js
 */

import * as React from "react";
import type { HostInstance } from "./HostInstance";
export type HostComponent<Config extends {}> = (props: Omit<Config, keyof {
  ref?: React.Ref<HostInstance> | undefined;
}> & {
  ref?: React.Ref<HostInstance> | undefined;
}) => React.ReactNode;
