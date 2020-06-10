import * as t from "io-ts";

// codec can be nullable
export const nullable = <C extends t.Mixed>(codec: C) =>
  t.union([codec, t.null]);

// type having required and optional properties
export const typeWithPartial = <R extends t.Props, O extends t.Props>(
  required: R,
  optional: O,
  name?: string
) => t.intersection([t.type(required), t.partial(optional)], name);

// can be used to create a new type that have non-specified fields
//
// example:
//   ```typescript
//   const NewType = open(ClosedType);
//   type NewType = t.TypeOf<typeof NewType>;
//   ```
export const open = <C extends t.Mixed>(codec: C, name?: string) =>
  t.intersection([codec, t.record(t.string, t.any)], name);
