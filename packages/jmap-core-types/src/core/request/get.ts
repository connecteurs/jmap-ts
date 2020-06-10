import * as t from "io-ts";
import { invocation } from "./invocation";
import { GetArgumentsRequest, GetArgumentsResponse } from "../arguments";

export const GetRequest = invocation(t.string, GetArgumentsRequest);
export type GetRequest = t.TypeOf<typeof GetRequest>;

export const getRequest = <Args extends GetArgumentsRequest>(
  name: string,
  args: Args,
  tag: string = "0"
): GetRequest => [name, args, tag];

export const GetResponse = invocation(t.string, GetArgumentsResponse);
export type GetResponse = t.TypeOf<typeof GetResponse>;

export const getResponse = <T extends string>(method: T) =>
  invocation(t.literal(method), GetArgumentsResponse);
