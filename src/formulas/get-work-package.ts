// Auto-generated from OpenAPI spec
// Manual customization: added schema and error handling

import * as coda from '@codahq/packs-sdk';
import { WorkPackageModel, WorkPackageModelSchema } from '../types';

export const getWorkPackage = coda.makeFormula({
  resultType: coda.ValueType.Object,
  name: 'GetWorkPackage',
  description: 'Get detailed information about a specific work package (ticket/issue).',
  schema: WorkPackageModelSchema,

  parameters: [
    coda.makeParameter({
      type: coda.ParameterType.Number,
      name: 'workPackageId',
      description: 'The numeric ID of the work package to retrieve.',
    }),
    coda.makeParameter({
      type: coda.ParameterType.String,
      name: 'baseUrl',
      description: 'Your OpenProject base URL',
      optional: true,
    }),
  ],

  execute: async function ([workPackageId, baseUrl], context) {
    const instanceUrl = baseUrl || context.endpoint;
    const url = `${instanceUrl}/api/v3/work_packages/${workPackageId}`;

    try {
      const response = await context.fetcher.fetch({
        method: 'GET',
        url: url,
      });

      return response.body as WorkPackageModel;
    } catch (error) {
      if (error.statusCode === 404) {
        throw new coda.UserVisibleError(`Work package ${workPackageId} not found.`);
      }
      throw error;
    }
  },
});
