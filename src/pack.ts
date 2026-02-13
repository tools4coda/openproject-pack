import * as coda from "@codahq/packs-sdk";

export const pack = coda.newPack();

// Import all generated modules
import * as syncTables from './sync-tables';
import * as formulas from './formulas';
import * as actions from './actions';

// Configure authentication for API Key with self-hosted support
pack.setUserAuthentication({
  type: coda.AuthenticationType.WebBasic,
  // Note: API Key is provided via Basic Auth (username: "apikey", password: <key>)
  instructionsUrl: 'https://www.openproject.org/docs/api/authentication/',
});

// Allow custom endpoints for self-hosted instances
pack.addNetworkDomain("*");

// Register sync tables
pack.addSyncTable(syncTables.ProjectsSyncTable);
pack.addSyncTable(syncTables.WorkPackagesSyncTable);
pack.addSyncTable(syncTables.TimeEntriesSyncTable);

// Register formulas
pack.addFormula(formulas.getProject);
pack.addFormula(formulas.getWorkPackage);
pack.addFormula(formulas.getUser);

// Register actions
pack.addFormula(actions.createProject);
pack.addFormula(actions.createWorkPackage);
pack.addFormula(actions.updateWorkPackage);
