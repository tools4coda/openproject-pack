// Auto-generated from OpenAPI spec
// Manual customization: added description, pagination

import * as coda from '@codahq/packs-sdk';
import { ProjectModel, ProjectModelSchema } from '../types';

export const ProjectsSyncTable = coda.makeSyncTable({
  name: 'Projects',
  description: 'List of projects visible to the current user. Supports self-hosted instances.',
  identityName: 'Project',
  schema: ProjectModelSchema,

  formula: {
    name: 'SyncProjects',
    description: 'Syncs projects from OpenProject',
    parameters: [
      coda.makeParameter({
        type: coda.ParameterType.String,
        name: 'baseUrl',
        description: 'Your OpenProject base URL (e.g., https://projects.example.com)',
        optional: true,
      }),
    ],

    execute: async function ([baseUrl], context) {
      const instanceUrl = baseUrl || context.endpoint;
      const url = `${instanceUrl}/api/v3/projects`;

      const response = await context.fetcher.fetch({
        method: 'GET',
        url: url,
      });

      // HAL+JSON format: projects are in _embedded.elements
      const projects: ProjectModel[] = response.body._embedded?.elements || [];

      return {
        result: projects,
      };
    },
  },
});
