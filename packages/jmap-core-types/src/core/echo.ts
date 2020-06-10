import * as t from "io-ts";
import { invocation } from "./request";
import { Arguments } from "./arguments";

export const CoreEcho = invocation(
  t.literal("Core/echo", "Core/echo"),
  Arguments
);
export type CoreEcho = t.TypeOf<typeof CoreEcho>;
