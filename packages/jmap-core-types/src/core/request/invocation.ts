import * as t from "io-ts";
import { Arguments } from "../arguments";

export const invocation = <Key extends t.Mixed, Args extends t.Mixed>(
  key: Key,
  args: Args
) => t.tuple([key, args, t.string]);

export const Invocation = invocation(t.string, Arguments);
export type Invocation = t.TypeOf<typeof Invocation>;
