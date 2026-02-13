// Auto-generated from OpenAPI spec
// Manual customization: added autocomplete for project selection

import * as coda from '@codahq/packs-sdk';
import { ProjectModel, ProjectModelSchema } from '../types';

export const getProject = coda.makeFormula({
  resultType: coda.ValueType.Object,
  name: 'GetProject',
  description: 'Get detailed information about a specific project by ID.',
  schema: ProjectModelSchema,

  parameters: [
    coda.makeParameter({
      type: coda.ParameterType.Number,
      name: 'projectId',
      description: 'The numeric ID of the project to retrieve.',
    }),
    coda.makeParameter({
      type: coda.ParameterType.String,
      name: 'baseUrl',
      description: 'Your OpenProject base URL (e.g., https://projects.example.com)',
      optional: true,
    }),
  ],

  execute: async function ([projectId, baseUrl], context) {
    const instanceUrl = baseUrl || context.endpoint;
    const url = `${instanceUrl}/api/v3/projects/${projectId}`;

    const response = await context.fetcher.fetch({
      method: 'GET',
      url: url,
    });

    return response.body as ProjectModel;
  },
});
