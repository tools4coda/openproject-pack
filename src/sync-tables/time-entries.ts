// Auto-generated from OpenAPI spec
// Manual customization: added filters

import * as coda from '@codahq/packs-sdk';
import { TimeEntryModel, TimeEntryModelSchema } from '../types';

export const TimeEntriesSyncTable = coda.makeSyncTable({
  name: 'Time Entries',
  description: 'Time tracking entries. Filter by project, work package, or user.',
  identityName: 'TimeEntry',
  schema: TimeEntryModelSchema,

  formula: {
    name: 'SyncTimeEntries',
    description: 'Syncs time entries from OpenProject',
    parameters: [
      coda.makeParameter({
        type: coda.ParameterType.String,
        name: 'projectId',
        description: 'Filter by project ID',
        optional: true,
      }),
      coda.makeParameter({
        type: coda.ParameterType.String,
        name: 'workPackageId',
        description: 'Filter by work package ID',
        optional: true,
      }),
      coda.makeParameter({
        type: coda.ParameterType.String,
        name: 'baseUrl',
        description: 'Your OpenProject base URL',
        optional: true,
      }),
    ],

    execute: async function ([projectId, workPackageId, baseUrl], context) {
      const instanceUrl = baseUrl || context.endpoint;
      let url = `${instanceUrl}/api/v3/time_entries`;

      // Build query params
      const params: Record<string, string> = {};
      if (projectId) params['project_id'] = projectId;
      if (workPackageId) params['work_package_id'] = workPackageId;

      if (Object.keys(params).length > 0) {
        url = coda.withQueryParams(url, params);
      }

      const response = await context.fetcher.fetch({
        method: 'GET',
        url: url,
      });

      const timeEntries: TimeEntryModel[] = response.body._embedded?.elements || [];

      return {
        result: timeEntries,
      };
    },
  },
});
