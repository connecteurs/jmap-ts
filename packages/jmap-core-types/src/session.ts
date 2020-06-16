import * as t from "io-ts";
import { typeWithPartial } from "@connecteurs/io-ts-utils";

export const CoreCapabilities = t.type(
  {
    maxSizeUpload: t.number,
    maxConcurrentUpload: t.number,
    maxSizeRequest: t.number,
    maxConcurrentRequests: t.number,
    maxCallsInRequest: t.number,
    maxObjectsInGet: t.number,
    maxObjectsInSet: t.number,
    collationAlgorithms: t.array(t.string),
  },
  "CoreCapabilities"
);
export type CoreCapabilities = t.TypeOf<typeof CoreCapabilities>;

export const URN_CORE = "urn:ietf:params:jmap:core";

export const Capabilities = t.type(
  {
    [URN_CORE]: CoreCapabilities,
  },
  "Capabilities"
);
export type Capabilities = t.TypeOf<typeof Capabilities>;

export const Account = t.type(
  {
    name: t.string,
    isPersonal: t.boolean,
    isReadOnly: t.boolean,
    accountCapabilities: t.record(t.string, t.object),
  },
  "Account"
);
export type Account = t.TypeOf<typeof Account>;

export const Session = typeWithPartial(
  {
    capabilities: Capabilities,
    accounts: t.record(t.string, Account),
    primaryAccounts: t.record(t.string, t.string),
    username: t.string,
    apiUrl: t.string,
    downloadUrl: t.string,
    uploadUrl: t.string,
    state: t.string,
  },
  {
    eventSourceUrl: t.string, // some servers do not send it
  },
  "Session"
);
export type Session = t.TypeOf<typeof Session>;
