import * as coda from '@codahq/packs-sdk';
import { WorkPackageSchema } from '../types';

export const GetWorkPackage = coda.makeFormula({
  resultType: coda.ValueType.Object,
  name: 'GetWorkPackage',
  description: 'Get a work package by ID',
  schema: WorkPackageSchema,
  parameters: [
    coda.makeParameter({
      type: coda.ParameterType.Number,
      name: 'id',
      description: 'Work Package ID',
    }),
  ],
  execute: async function ([id], context) {
    const response = await context.fetcher.fetch({
      method: 'GET',
      url: `/api/v3/work_packages/${id}`,
    });

    const item = response.body;
    return {
      id: item.id,
      subject: item.subject,
      description: item.description?.raw,
      startDate: item.startDate,
      dueDate: item.dueDate,
      estimatedTime: item.estimatedTime,
      spentTime: item.spentTime,
      percentageDone: item.percentageDone,
      status: item._embedded?.status?.name,
      priority: item._embedded?.priority?.name,
      assignee: item._embedded?.assignee?.name,
      author: item._embedded?.author?.name,
      projectId: item._embedded?.project?.id,
      projectName: item._embedded?.project?.name,
      type: item._embedded?.type?.name,
      createdAt: item.createdAt,
      updatedAt: item.updatedAt,
    };
  },
});
