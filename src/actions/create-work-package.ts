import * as coda from '@codahq/packs-sdk';

export const CreateWorkPackage = coda.makeActionFormula({
  name: 'CreateWorkPackage',
  description: 'Create a new work package',
  parameters: [
    coda.makeParameter({
      type: coda.ParameterType.Number,
      name: 'projectId',
      description: 'Project ID',
    }),
    coda.makeParameter({
      type: coda.ParameterType.String,
      name: 'subject',
      description: 'Work package subject (title)',
    }),
    coda.makeParameter({
      type: coda.ParameterType.String,
      name: 'description',
      description: 'Work package description',
      optional: true,
    }),
    coda.makeParameter({
      type: coda.ParameterType.String,
      name: 'startDate',
      description: 'Start date (YYYY-MM-DD)',
      optional: true,
    }),
    coda.makeParameter({
      type: coda.ParameterType.String,
      name: 'dueDate',
      description: 'Due date (YYYY-MM-DD)',
      optional: true,
    }),
  ],
  execute: async function ([projectId, subject, description, startDate, dueDate], context) {
    const body: any = {
      subject: subject,
      _links: {
        project: {
          href: `/api/v3/projects/${projectId}`,
        },
      },
    };

    if (description) {
      body.description = {
        raw: description,
      };
    }

    if (startDate) {
      body.startDate = startDate;
    }

    if (dueDate) {
      body.dueDate = dueDate;
    }

    const response = await context.fetcher.fetch({
      method: 'POST',
      url: '/api/v3/work_packages',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    return response.body;
  },
});
