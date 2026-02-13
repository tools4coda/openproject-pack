// Auto-generated from OpenAPI spec
// Manual customization: self-hosted instance support

import * as coda from '@codahq/packs-sdk';
import { ProjectModel, ProjectModelSchema } from '../types';

export const createProject = coda.makeActionFormula({
  name: 'CreateProject',
  description: 'Create a new project in OpenProject.',

  parameters: [
    coda.makeParameter({
      type: coda.ParameterType.String,
      name: 'name',
      description: 'The name of the new project.',
    }),
    coda.makeParameter({
      type: coda.ParameterType.String,
      name: 'description',
      description: 'Optional description for the project.',
      optional: true,
    }),
    coda.makeParameter({
      type: coda.ParameterType.String,
      name: 'baseUrl',
      description: 'Your OpenProject base URL (defaults to configured endpoint)',
      optional: true,
    }),
  ],

  execute: async function ([name, description, baseUrl], context) {
    const instanceUrl = baseUrl || context.endpoint;
    const url = `${instanceUrl}/api/v3/projects`;

    const body: any = {
      name: name,
    };

    if (description) {
      body.description = {
        format: 'plain',
        raw: description,
      };
    }

    const response = await context.fetcher.fetch({
      method: 'POST',
      url: url,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    return response.body as ProjectModel;
  },
});
