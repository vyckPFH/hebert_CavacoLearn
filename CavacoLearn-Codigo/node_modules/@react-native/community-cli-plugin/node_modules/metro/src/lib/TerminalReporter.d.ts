/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @noformat
 * @oncall react_native
 * @generated SignedSource<<14645ae49e4ed5ce74bdd181db9098d4>>
 *
 * This file was translated from Flow by scripts/generateTypeScriptDefinitions.js
 * Original file: packages/metro/src/lib/TerminalReporter.js
 * To regenerate, run:
 *   js1 build metro-ts-defs (internal) OR
 *   yarn run build-ts-defs (OSS) 
 */

import type {ReportableEvent} from './reporting';
import type {Terminal} from 'metro-core';

export type TerminalReportableEvent =
  | ReportableEvent
  | {
      buildID: string;
      type: 'bundle_transform_progressed_throttled';
      transformedFileCount: number;
      totalFileCount: number;
    }
  | {
      type: 'unstable_server_log';
      level: 'info' | 'warn' | 'error';
      data: string | Array<unknown>;
    }
  | {type: 'unstable_server_menu_updated'; message: string}
  | {type: 'unstable_server_menu_cleared'};
/**
 * We try to print useful information to the terminal for interactive builds.
 * This implements the `Reporter` interface from the './reporting' module.
 */
declare class TerminalReporter {
  readonly terminal: Terminal;
  constructor(terminal: Terminal);
  /**
   * Single entry point for reporting events. That allows us to implement the
   * corresponding JSON reporter easily and have a consistent reporting.
   */
  update(event: TerminalReportableEvent): void;
}
export default TerminalReporter;
