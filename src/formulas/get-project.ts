import * as coda from '@codahq/packs-sdk';
import { ProjectSchema } from '../types';

export const getProject = coda.makeFormula({
  resultType: coda.ValueType.Object,
  name: 'GetProject',
  description: 'Get a project by ID',
  schema: ProjectSchema,
  parameters: [
    coda.makeParameter({
      type: coda.ParameterType.Number,
      name: 'id',
      description: 'Project ID',
    }),
  ],
  execute: async function ([id], context) {
    const response = await context.fetcher.fetch({
      method: 'GET',
      url: `/api/v3/projects/${id}`,
    });

    const item = response.body;
    return {
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
    };
  },
});
