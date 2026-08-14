/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @noformat
 * @oncall react_native
 * @generated SignedSource<<4bb214316528dcf37b5f3a2aeef672ff>>
 *
 * This file was translated from Flow by scripts/generateTypeScriptDefinitions.js
 * Original file: packages/metro-symbolicate/src/ChromeHeapSnapshot.js
 * To regenerate, run:
 *   js1 build metro-ts-defs (internal) OR
 *   yarn run build-ts-defs (OSS) 
 */

type RawBuffer = Array<number | RawBuffer>;
export type ChromeHeapSnapshot = {
  snapshot: {
    meta: {
      trace_function_info_fields: Array<string>;
      location_fields: Array<string>;
      edge_fields: Array<string>;
      edge_types: Array<string | Array<string>>;
      node_fields: Array<string>;
      node_types: Array<string | Array<string>>;
      trace_node_fields: Array<string>;
    };
  };
  trace_function_infos: Array<number>;
  locations: Array<number>;
  edges: Array<number>;
  nodes: Array<number>;
  strings: Array<string>;
  trace_tree: RawBuffer;
};
export declare class ChromeHeapSnapshotProcessor {
  constructor(snapshotData: ChromeHeapSnapshot);
  traceFunctionInfos(): ChromeHeapSnapshotRecordIterator;
  locations(): ChromeHeapSnapshotRecordIterator;
  nodes(): ChromeHeapSnapshotRecordIterator;
  edges(): ChromeHeapSnapshotRecordIterator;
  traceTree(): ChromeHeapSnapshotRecordIterator;
}
declare class ChromeHeapSnapshotStringTable {
  constructor(strings: Array<string>);
  add(value: string): number;
  get(index: number): string;
}
type ChromeHeapSnapshotFieldType = Array<string> | string;
type DenormalizedRecordInput = Readonly<{
  [field: string]: string | number | ReadonlyArray<DenormalizedRecordInput>;
}>;
declare class ChromeHeapSnapshotRecordAccessor {
  constructor(
    buffer: RawBuffer,
    recordFields: Array<string>,
    recordTypes:
      | Array<ChromeHeapSnapshotFieldType>
      | Readonly<{[$$Key$$: string]: ChromeHeapSnapshotFieldType}>
      | null,
    globalStringTable: ChromeHeapSnapshotStringTable,
    position: number,
    parent?: ChromeHeapSnapshotRecordAccessor,
  );
  /** Public API */

  getString(field: string): string;
  getNumber(field: string): number;
  getChildren(field: string): ChromeHeapSnapshotRecordIterator;
  setString(field: string, value: string): void;
  setNumber(field: string, value: number): void;
  moveToRecord(recordIndex: number): void;
  append(record: DenormalizedRecordInput): number;
  moveAndInsert(recordIndex: number, record: DenormalizedRecordInput): number;
  /** "Protected" methods (please don't use) */

  protectedHasNext(): boolean;
  protectedTryMoveNext(): void;
}
declare class ChromeHeapSnapshotRecordIterator
  extends ChromeHeapSnapshotRecordAccessor
  implements Iterable<ChromeHeapSnapshotRecordAccessor>
{
  constructor(
    buffer: RawBuffer,
    recordFields: Array<string>,
    recordTypes:
      | Array<ChromeHeapSnapshotFieldType>
      | Readonly<{[$$Key$$: string]: ChromeHeapSnapshotFieldType}>
      | null,
    globalStringTable: ChromeHeapSnapshotStringTable,
    position?: number,
    parent?: ChromeHeapSnapshotRecordAccessor,
  );
  next(): IteratorResult<ChromeHeapSnapshotRecordIterator, void>;
  [Symbol.iterator](): ChromeHeapSnapshotRecordIterator;
}
