import * as t from "io-ts";
import { invocation } from "./invocation";
import { QueryArgumentsRequest, QueryArgumentsResponse } from "../arguments";

export const QueryRequest = invocation(t.string, QueryArgumentsRequest);
export type QueryRequest = t.TypeOf<typeof QueryRequest>;

export const queryRequest = <Args extends QueryArgumentsRequest>(
  name: string,
  args: Args,
  tag: string = "0"
): QueryRequest => [name, args, tag];

export const QueryResponse = invocation(t.string, QueryArgumentsResponse);
export type QueryResponse = t.TypeOf<typeof QueryResponse>;

export const queryResponse = <T extends string>(method: T) =>
  invocation(t.literal(method), QueryArgumentsResponse);
