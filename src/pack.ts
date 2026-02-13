import * as coda from "@codahq/packs-sdk";

export const pack = coda.newPack();

// ============================================================================
// AUTHENTICATION
// ============================================================================

// OpenProject uses API Key via Basic Auth (WebBasic)
// Username: apikey
// Password: <your API key from OpenProject account page>
pack.setUserAuthentication({
  type: coda.AuthenticationType.WebBasic,
  instructions: "Enter your OpenProject API key as password. Get it from your account page in OpenProject (username is always 'apikey').",
  requiresDomainUrl: true,  // For self-hosted instances
});

// ============================================================================
// SYNC TABLES
// ============================================================================

import * as syncTables from './sync-tables';

// Projects sync table
pack.addSyncTable({
  name: 'Projects',
  description: 'Sync all accessible projects',
  schema: syncTables.ProjectsSchema,
  formula: syncTables.syncProjects,
});

// Work Packages sync table  
pack.addSyncTable({
  name: 'Work Packages',
  description: 'Sync work packages from projects',
  schema: syncTables.WorkPackageSchema,
  formula: syncTables.syncWorkPackages,
});

// ============================================================================
// FORMULAS
// ============================================================================

import * as formulas from './formulas';

pack.addFormula(formulas.GetProject);
pack.addFormula(formulas.GetWorkPackage);

// ============================================================================
// ACTIONS
// ============================================================================

import * as actions from './actions';

pack.addFormula(actions.CreateWorkPackage);
pack.addFormula(actions.UpdateWorkPackage);
pack.addFormula(actions.CreateTimeEntry);

// ============================================================================
// EXPORTS
// ============================================================================

export { Project, WorkPackage, User, TimeEntry } from './types';
