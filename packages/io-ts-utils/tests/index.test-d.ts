import { expectType, expectAssignable, expectNotAssignable } from "tsd";
import * as t from "io-ts";
import { open } from "../src";

const ClosedType = t.type({
  foo: t.string,
});
type ClosedType = t.TypeOf<typeof ClosedType>;

const OpenType = open(ClosedType);
type OpenType = t.TypeOf<typeof OpenType>;

// error: cannot declare property 'bar'
expectNotAssignable<ClosedType>({ foo: "foo", bar: "bar" });

// ok
expectType<ClosedType>({
  foo: "foo",
});

// can declare property 'bar'
expectAssignable<OpenType>({ foo: "foo", bar: "bar" });

// error: type of foo should be string
expectNotAssignable<OpenType>({ foo: 42, bar: "bar" });
