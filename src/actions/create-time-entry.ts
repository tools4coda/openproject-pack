import * as coda from '@codahq/packs-sdk';

export const CreateTimeEntry = coda.makeActionFormula({
  name: 'CreateTimeEntry',
  description: 'Log time spent on a work package',
  parameters: [
    coda.makeParameter({
      type: coda.ParameterType.Number,
      name: 'workPackageId',
      description: 'Work Package ID',
    }),
    coda.makeParameter({
      type: coda.ParameterType.Number,
      name: 'hours',
      description: 'Hours spent (e.g., 2.5)',
    }),
    coda.makeParameter({
      type: coda.ParameterType.String,
      name: 'comment',
      description: 'Time entry comment',
      optional: true,
    }),
    coda.makeParameter({
      type: coda.ParameterType.String,
      name: 'spentOn',
      description: 'Date spent (YYYY-MM-DD, default: today)',
      optional: true,
    }),
    coda.makeParameter({
      type: coda.ParameterType.Number,
      name: 'activityId',
      description: 'Activity ID (optional)',
      optional: true,
    }),
  ],
  execute: async function ([workPackageId, hours, comment, spentOn, activityId], context) {
    const body: any = {
      hours: hours,
      _links: {
        workPackage: {
          href: `/api/v3/work_packages/${workPackageId}`,
        },
      },
    };

    if (comment) {
      body.comment = {
        raw: comment,
      };
    }

    if (spentOn) {
      body.spentOn = spentOn;
    }

    if (activityId) {
      body._links.activity = {
        href: `/api/v3/time_entries/activities/${activityId}`,
      };
    }

    const response = await context.fetcher.fetch({
      method: 'POST',
      url: '/api/v3/time_entries',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    return response.body;
  },
});
