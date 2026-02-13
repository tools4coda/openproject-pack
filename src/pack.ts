import * as coda from "@codahq/packs-sdk";

export const pack = coda.newPack();

// OpenProject uses API Key via Basic Auth
// Username: apikey
// Password: <your API key>
pack.setUserAuthentication({
  type: coda.AuthenticationType.WebBasic,
  instructions: "Enter your OpenProject API key. Get it from your account page in OpenProject.",
});

// Network domain must be set for self-hosted instances
// Users will configure their instance URL via the connection
pack.addNetworkDomain("*");

// Core schemas and types
import {
  Project, ProjectSchema,
  WorkPackage, WorkPackageSchema,
  User, UserSchema,
  TimeEntry, TimeEntrySchema,
} from "./types";

// Export types for use in other modules
export { Project, WorkPackage, User, TimeEntry };

// TODO: Import and register sync tables
// import * as syncTables from './sync-tables';
// pack.addSyncTable(syncTables.projectsSyncTable);
// pack.addSyncTable(syncTables.workPackagesSyncTable);

// TODO: Import and register formulas
// import * as formulas from './formulas';
// pack.addFormula(formulas.getProject);
// pack.addFormula(formulas.getWorkPackage);

// TODO: Import and register actions
// import * as actions from './actions';
// pack.addFormula(actions.createWorkPackage);
// pack.addFormula(actions.updateWorkPackage);
