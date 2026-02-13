// Auto-generated from OpenAPI spec

import * as coda from '@codahq/packs-sdk';
import { WorkPackageModel, WorkPackageModelSchema } from '../types';

export const createWorkPackage = coda.makeActionFormula({
  name: 'CreateWorkPackage',
  description: 'Create a new work package (ticket/issue) in a project.',

  parameters: [
    coda.makeParameter({
      type: coda.ParameterType.Number,
      name: 'projectId',
      description: 'The numeric ID of the project to create the work package in.',
    }),
    coda.makeParameter({
      type: coda.ParameterType.String,
      name: 'subject',
      description: 'The subject/title of the work package.',
    }),
    coda.makeParameter({
      type: coda.ParameterType.String,
      name: 'description',
      description: 'Optional description of the work package.',
      optional: true,
    }),
    coda.makeParameter({
      type: coda.ParameterType.Number,
      name: 'typeId',
      description: 'Optional type ID (e.g., 1 for Task, 2 for Milestone)',
      optional: true,
    }),
    coda.makeParameter({
      type: coda.ParameterType.String,
      name: 'baseUrl',
      description: 'Your OpenProject base URL',
      optional: true,
    }),
  ],

  execute: async function ([projectId, subject, description, typeId, baseUrl], context) {
    const instanceUrl = baseUrl || context.endpoint;
    const url = `${instanceUrl}/api/v3/projects/${projectId}/work_packages`;

    const body: any = {
      subject: subject,
    };

    if (description) {
      body.description = {
        format: 'plain',
        raw: description,
      };
    }

    if (typeId) {
      body._links = {
        type: {
          href: `/api/v3/types/${typeId}`,
        },
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

    return response.body as WorkPackageModel;
  },
});
