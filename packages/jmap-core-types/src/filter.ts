import * as t from "io-ts";
import { typeWithPartial } from "@connecteurs/io-ts-utils";

export type FilterCondition = { [key: string]: any; operator?: never };
export const FilterCondition = t.object as t.Type<FilterCondition>;

export interface FilterOperator {
  operator: "AND" | "OR" | "NOT";
  conditions: Array<FilterOperator | FilterCondition>;
}

export const FilterOperator: t.Type<FilterOperator> = t.recursion(
  "FilterOperator",
  () =>
    t.type({
      operator: t.union([t.literal("AND"), t.literal("OR"), t.literal("NOT")]),
      conditions: t.array(t.union([FilterOperator, FilterCondition])),
    })
);

export const Comparator = typeWithPartial(
  {
    property: t.string,
  },
  {
    isAscending: t.boolean, // default: true
    collation: t.string,
  },
  "Comparator"
);
export type Comparator = t.TypeOf<typeof Comparator>;
