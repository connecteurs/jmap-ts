import * as t from "io-ts";

export const Arguments = t.record(t.string, t.any, "Arguments");
export type Arguments = t.TypeOf<typeof Arguments>;

export * from "./get";
export * from "./query";
