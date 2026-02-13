// Auto-generated from OpenAPI spec

import * as coda from '@codahq/packs-sdk';
import { UserModel, UserModelSchema } from '../types';

export const getUser = coda.makeFormula({
  resultType: coda.ValueType.Object,
  name: 'GetUser',
  description: 'Get information about a user by ID.',
  schema: UserModelSchema,

  parameters: [
    coda.makeParameter({
      type: coda.ParameterType.Number,
      name: 'userId',
      description: 'The numeric ID of the user.',
    }),
    coda.makeParameter({
      type: coda.ParameterType.String,
      name: 'baseUrl',
      description: 'Your OpenProject base URL',
      optional: true,
    }),
  ],

  execute: async function ([userId, baseUrl], context) {
    const instanceUrl = baseUrl || context.endpoint;
    const url = `${instanceUrl}/api/v3/users/${userId}`;

    const response = await context.fetcher.fetch({
      method: 'GET',
      url: url,
    });

    return response.body as UserModel;
  },
});
