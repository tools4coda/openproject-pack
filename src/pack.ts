// ============================================================================
// OPENPROJECT PACK - MAIN ENTRY POINT
// Complete integration for Coda
// ============================================================================

import * as coda from "@codahq/packs-sdk";

export const pack = coda.newPack();

// ============================================================================
// AUTHENTICATION
// ============================================================================

pack.setUserAuthentication({
  type: coda.AuthenticationType.WebBasic,
  requiresEndpointUrl: true,
});

// ============================================================================
// IMPORTS
// ============================================================================

import type * as types from './types';

// Sync Tables
import { projectsSyncTable } from './sync-tables/projects';
import { workPackagesSyncTable } from './sync-tables/work-packages';
import { timeEntriesSyncTable } from './sync-tables/time-entries';
import { usersSyncTable } from './sync-tables/users';
import { statusesSyncTable } from './sync-tables/statuses';
import { prioritiesSyncTable } from './sync-tables/priorities';
import { typesSyncTable } from './sync-tables/types';
import { versionsSyncTable } from './sync-tables/versions';
import { categoriesSyncTable } from './sync-tables/categories';
import { activitiesSyncTable } from './sync-tables/activities';
import { newsSyncTable } from './sync-tables/news';
import { documentsSyncTable } from './sync-tables/documents';
import { queriesSyncTable } from './sync-tables/queries';

// Formulas
import {
  GetProject,
  GetProjectByIdentifier,
  GetWorkPackage,
  GetUser,
  GetCurrentUser,
  GetTimeEntry,
  GetStatus,
  GetPriority,
  GetType,
  GetActivity,
  GetVersion,
  GetWorkPackagesCount,
  GetProjectTimeEntriesSum,
} from './formulas/all-formulas';

// Actions
import {
  createWorkPackage,
  updateWorkPackage,
  deleteWorkPackage,
} from './actions/work-packages';

import {
  createTimeEntry,
  updateTimeEntry,
  deleteTimeEntry,
} from './actions/time-entries';

// ============================================================================
// REGISTER SYNC TABLES
// ============================================================================

pack.addSyncTable(projectsSyncTable);
pack.addSyncTable(workPackagesSyncTable);
pack.addSyncTable(timeEntriesSyncTable);
pack.addSyncTable(usersSyncTable);
pack.addSyncTable(statusesSyncTable);
pack.addSyncTable(prioritiesSyncTable);
pack.addSyncTable(typesSyncTable);
pack.addSyncTable(versionsSyncTable);
pack.addSyncTable(categoriesSyncTable);
pack.addSyncTable(activitiesSyncTable);
pack.addSyncTable(newsSyncTable);
pack.addSyncTable(documentsSyncTable);
pack.addSyncTable(queriesSyncTable);

// ============================================================================
// REGISTER FORMULAS
// ============================================================================

pack.addFormula(GetProject);
pack.addFormula(GetProjectByIdentifier);
pack.addFormula(GetWorkPackage);
pack.addFormula(GetUser);
pack.addFormula(GetCurrentUser);
pack.addFormula(GetTimeEntry);
pack.addFormula(GetStatus);
pack.addFormula(GetPriority);
pack.addFormula(GetType);
pack.addFormula(GetActivity);
pack.addFormula(GetVersion);
pack.addFormula(GetWorkPackagesCount);
pack.addFormula(GetProjectTimeEntriesSum);

// ============================================================================
// REGISTER ACTIONS
// ============================================================================

pack.addFormula(createWorkPackage);
pack.addFormula(updateWorkPackage);
pack.addFormula(deleteWorkPackage);
pack.addFormula(createTimeEntry);
pack.addFormula(updateTimeEntry);
pack.addFormula(deleteTimeEntry);

// Export types for external use
export * from './types';
