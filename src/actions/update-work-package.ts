import * as coda from '@codahq/packs-sdk';

export const UpdateWorkPackage = coda.makeActionFormula({
  name: 'UpdateWorkPackage',
  description: 'Update an existing work package',
  parameters: [
    coda.makeParameter({
      type: coda.ParameterType.Number,
      name: 'id',
      description: 'Work Package ID',
    }),
    coda.makeParameter({
      type: coda.ParameterType.String,
      name: 'subject',
      description: 'New subject (optional)',
      optional: true,
    }),
    coda.makeParameter({
      type: coda.ParameterType.String,
      name: 'description',
      description: 'New description (optional)',
      optional: true,
    }),
    coda.makeParameter({
      type: coda.ParameterType.Number,
      name: 'percentageDone',
      description: 'Percentage done (0-100)',
      optional: true,
    }),
  ],
  execute: async function ([id, subject, description, percentageDone], context) {
    const body: any = {};

    if (subject) {
      body.subject = subject;
    }

    if (description) {
      body.description = {
        raw: description,
      };
    }

    if (percentageDone !== undefined) {
      body.percentageDone = percentageDone;
    }

    const response = await context.fetcher.fetch({
      method: 'PATCH',
      url: `/api/v3/work_packages/${id}`,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    return response.body;
  },
});
