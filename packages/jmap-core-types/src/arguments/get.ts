import * as t from "io-ts";
import { typeWithPartial, nullable } from "@connecteurs/io-ts-utils";

// Arguments for Foo/get request
export const GetArgumentsRequest = typeWithPartial(
  {
    accountId: t.string,
  },
  {
    ids: nullable(t.array(t.string)),
    properties: nullable(t.array(t.string)),
  },
  "GetArgumentsRequest"
);
export type GetArgumentsRequest = t.TypeOf<typeof GetArgumentsRequest>;

// Arguments for Foo/get response
export const GetArgumentsResponse = t.type(
  {
    accountId: t.string,
    state: t.string,
    list: t.array(t.object),
    notFound: t.array(t.string),
  },
  "GetArgumentsResponse"
);
export type GetArgumentsResponse = t.TypeOf<typeof GetArgumentsResponse>;
