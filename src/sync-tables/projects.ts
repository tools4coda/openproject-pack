import * as coda from '@codahq/packs-sdk';
import { ProjectSchema } from '../types';

export const projectsSyncTable = coda.makeSyncTable({
  name: 'Projects',
  description: 'List all projects accessible to the user',
  identityName: 'Project',
  schema: ProjectSchema,
  formula: {
    name: 'SyncProjects',
    description: 'Sync projects from OpenProject',
    parameters: [
      coda.makeParameter({
        type: coda.ParameterType.String,
        name: 'filters',
        description: 'Optional filters (e.g., active=true)',
        optional: true,
      }),
    ],
    execute: async function ([filters], context) {
      // Get base URL from user credentials context
      const baseUrl = context.invocationToken; // Will be configured in pack.ts
      const url = coda.withQueryParams('/api/v3/projects', {
        filters: filters || undefined,
      });

      const response = await context.fetcher.fetch({
        method: 'GET',
        url: url,
      });

      // OpenProject uses HAL+JSON format
      const items = response.body._embedded?.elements || [];

      return {
        result: items.map((item: any) => ({
          id: item.id,
          identifier: item.identifier,
          name: item.name,
          description: item.description?.raw,
          public: item.public,
          active: item.active,
          status: item.status,
          statusExplanation: item.statusExplanation?.raw,
          createdAt: item.createdAt,
          updatedAt: item.updatedAt,
        })),
      };
    },
  },
});
