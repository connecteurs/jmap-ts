import * as t from "io-ts";
import { Invocation } from "./invocation";
import { typeWithPartial } from "@connecteurs/io-ts-utils";

export const Request = typeWithPartial(
  {
    using: t.array(t.string),
    methodCalls: t.array(Invocation),
  },
  {
    createdIds: t.record(t.string, t.string),
  }
);
export type Request = t.TypeOf<typeof Request>;

export const Response = typeWithPartial(
  {
    methodResponses: t.array(Invocation),
    sessionState: t.string,
  },
  {
    createdIds: t.record(t.string, t.string),
  }
);
export type Response = t.TypeOf<typeof Response>;

export * from "./invocation";
export * from "./get";
export * from "./query";
