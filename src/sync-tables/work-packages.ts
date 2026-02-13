// Auto-generated from OpenAPI spec
// Manual customization: added project filter, pagination

import * as coda from '@codahq/packs-sdk';
import { WorkPackageModel, WorkPackageModelSchema } from '../types';

export const WorkPackagesSyncTable = coda.makeSyncTable({
  name: 'Work Packages',
  description: 'Work packages (tickets/issues) from selected projects.',
  identityName: 'WorkPackage',
  schema: WorkPackageModelSchema,

  formula: {
    name: 'SyncWorkPackages',
    description: 'Syncs work packages from OpenProject',
    parameters: [
      coda.makeParameter({
        type: coda.ParameterType.String,
        name: 'projectId',
        description: 'Project ID to filter work packages. Leave empty for all accessible work packages.',
        optional: true,
      }),
      coda.makeParameter({
        type: coda.ParameterType.String,
        name: 'baseUrl',
        description: 'Your OpenProject base URL',
        optional: true,
      }),
    ],

    execute: async function ([projectId, baseUrl], context) {
      const instanceUrl = baseUrl || context.endpoint;
      let url: string;

      if (projectId) {
        url = `${instanceUrl}/api/v3/projects/${projectId}/work_packages`;
      } else {
        url = `${instanceUrl}/api/v3/work_packages`;
      }

      const response = await context.fetcher.fetch({
        method: 'GET',
        url: url,
      });

      const workPackages: WorkPackageModel[] = response.body._embedded?.elements || [];

      return {
        result: workPackages,
      };
    },
  },
});
