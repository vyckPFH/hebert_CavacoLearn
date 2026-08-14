/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @noformat
 * @generated SignedSource<<48bfe42125bd22a8329f95a30fa90b64>>
 *
 * This file was translated from Flow by scripts/generateTypeScriptDefinitions.js
 * Original file: packages/metro/src/HmrServer.js
 * To regenerate, run:
 *   js1 build metro-ts-defs (internal) OR
 *   yarn run build-ts-defs (OSS) 
 */

import type {
  RevisionId,
  default as IncrementalBundler,
} from './IncrementalBundler';
import type {ConfigT} from 'metro-config';

export type Client = {
  optedIntoHMR: boolean;
  revisionIds: Array<RevisionId>;
  readonly sendFn: ($$PARAM_0$$: string) => void;
};
/**
 * The HmrServer (Hot Module Reloading) implements a lightweight interface
 * to communicate easily to the logic in the React Native repository (which
 * is the one that handles the Web Socket connections).
 *
 * This interface allows the HmrServer to hook its own logic to WS clients
 * getting connected, disconnected or having errors (through the
 * `onClientConnect`, `onClientDisconnect` and `onClientError` methods).
 */
declare class HmrServer<TClient extends Client> {
  constructor(
    bundler: IncrementalBundler,
    createModuleId: (path: string) => number,
    config: ConfigT,
  );
  onClientConnect: (
    requestUrl: string,
    sendFn: (data: string) => void,
  ) => Promise<Client>;
  onClientMessage: (
    client: TClient,
    message: string | Buffer | ArrayBuffer | Array<Buffer>,
    sendFn: (data: string) => void,
  ) => Promise<void>;
  onClientError: (client: TClient, e: Error) => void;
  onClientDisconnect: (client: TClient) => void;
}
export default HmrServer;
