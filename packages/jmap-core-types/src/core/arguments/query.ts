import * as t from "io-ts";
import { typeWithPartial, nullable } from "@connecteurs/io-ts-utils";
import { FilterOperator, FilterCondition, Comparator } from "../filter";

// Arguments for Foo/query request
export const QueryArgumentsRequest = typeWithPartial(
  {
    accountId: t.string,
  },
  {
    filter: nullable(t.union([FilterOperator, FilterCondition])),
    sort: nullable(t.array(Comparator)),
    position: t.number, // default: 0
    anchor: nullable(t.string),
    anchorOffset: t.number, // default: 0
    limit: nullable(t.number),
    calculateTotal: t.boolean, // default: false
  },
  "QueryArgumentsRequest"
);
export type QueryArgumentsRequest = t.TypeOf<typeof QueryArgumentsRequest>;

// Arguments for Foo/query response
export const QueryArgumentsResponse = typeWithPartial(
  {
    accountId: t.string,
    queryState: t.string,
    canCalculateChanges: t.boolean,
    position: t.number,
    ids: t.array(t.string),
  },
  {
    total: t.number, // only if requested
    limit: t.number, // if set by the server
  },
  "QueryArgumentsResponse"
);
export type QueryArgumentsResponse = t.TypeOf<typeof QueryArgumentsResponse>;
