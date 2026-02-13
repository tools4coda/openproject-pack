import * as coda from '@codahq/packs-sdk';
import { ProjectSchema } from '../types';

export const syncProjects = {
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
  execute: async function ([filters]: [string], context: coda.ExecutionContext) {
    const url = coda.withQueryParams('/api/v3/projects', filters ? { filters } : undefined);

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
};

export { ProjectSchema as ProjectsSchema };
