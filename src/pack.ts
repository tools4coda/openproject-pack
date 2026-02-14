import * as coda from "@codahq/packs-sdk";
import { setAuthentication } from "./auth";
import { registerSyncTables } from "./sync-tables";
import { registerFormulas } from "./formulas";
import { registerActions } from "./actions";

export const pack = coda.newPack();

// Version
pack.setVersion("1.0.0");

// Authentication
setAuthentication(pack);

// Register components
registerSyncTables(pack);
registerFormulas(pack);
registerActions(pack);
