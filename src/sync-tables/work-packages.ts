import * as coda from '@codahq/packs-sdk';
import { WorkPackageSchema } from '../types';

export const workPackagesSyncTable = coda.makeSyncTable({
  name: 'Work Packages',
  description: 'List work packages across projects or for a specific project',
  identityName: 'WorkPackage',
  schema: WorkPackageSchema,
  formula: {
    name: 'SyncWorkPackages',
    description: 'Sync work packages from OpenProject',
    parameters: [
      coda.makeParameter({
        type: coda.ParameterType.Number,
        name: 'projectId',
        description: 'Optional project ID to filter work packages',
        optional: true,
      }),
      coda.makeParameter({
        type: coda.ParameterType.String,
        name: 'filters',
        description: 'Optional filters (JSON format)',
        optional: true,
      }),
    ],
    execute: async function ([projectId, filters], context) {
      let url: string;
      if (projectId) {
        url = `/api/v3/projects/${projectId}/work_packages`;
      } else {
        url = '/api/v3/work_packages';
      }

      if (filters) {
        url = coda.withQueryParams(url, { filters });
      }

      const response = await context.fetcher.fetch({
        method: 'GET',
        url: url,
      });

      const items = response.body._embedded?.elements || [];

      return {
        result: items.map((item: any) => ({
          id: item.id,
          subject: item.subject,
          description: item.description?.raw,
          startDate: item.startDate,
          dueDate: item.dueDate,
          estimatedTime: item.estimatedTime,
          spentTime: item.spentTime,
          percentageDone: item.percentageDone,
          status: item._embedded?.status?.name,
          priority: item._embedded?.priority?.name,
          assignee: item._embedded?.assignee?.name,
          author: item._embedded?.author?.name,
          projectId: item._embedded?.project?.id,
          projectName: item._embedded?.project?.name,
          type: item._embedded?.type?.name,
          createdAt: item.createdAt,
          updatedAt: item.updatedAt,
        })),
      };
    },
  },
});
