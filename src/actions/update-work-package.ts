// Auto-generated from OpenAPI spec

import * as coda from '@codahq/packs-sdk';
import { WorkPackageModel, WorkPackageModelSchema } from '../types';

export const updateWorkPackage = coda.makeActionFormula({
  name: 'UpdateWorkPackage',
  description: 'Update an existing work package.',

  parameters: [
    coda.makeParameter({
      type: coda.ParameterType.Number,
      name: 'workPackageId',
      description: 'The numeric ID of the work package to update.',
    }),
    coda.makeParameter({
      type: coda.ParameterType.String,
      name: 'subject',
      description: 'New subject/title.',
      optional: true,
    }),
    coda.makeParameter({
      type: coda.ParameterType.String,
      name: 'description',
      description: 'New description.',
      optional: true,
    }),
    coda.makeParameter({
      type: coda.ParameterType.String,
      name: 'status',
      description: 'New status (provide status ID or name)',
      optional: true,
    }),
    coda.makeParameter({
      type: coda.ParameterType.String,
      name: 'baseUrl',
      description: 'Your OpenProject base URL',
      optional: true,
    }),
  ],

  execute: async function ([workPackageId, subject, description, status, baseUrl], context) {
    const instanceUrl = baseUrl || context.endpoint;
    const url = `${instanceUrl}/api/v3/work_packages/${workPackageId}`;

    // Build patch body with only provided fields
    const patches: any[] = [];

    if (subject !== undefined) {
      patches.push({
        op: 'add',
        path: '/subject',
        value: subject,
      });
    }

    if (description !== undefined) {
      patches.push({
        op: 'add',
        path: '/description/raw',
        value: description,
      });
    }

    if (patches.length === 0) {
      throw new coda.UserVisibleError('No fields provided to update.');
    }

    const response = await context.fetcher.fetch({
      method: 'PATCH',
      url: url,
      headers: {
        'Content-Type': 'application/json-patch+json',
      },
      body: JSON.stringify(patches),
    });

    return response.body as WorkPackageModel;
  },
});
