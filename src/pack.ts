import * as coda from "@codahq/packs-sdk";

export const pack = coda.newPack();

// ============================================================================
// AUTHENTICATION
// ============================================================================

// OpenProject uses API Key via Basic Auth (WebBasic)
// Username: apikey
// Password: <your API key from OpenProject account page>
pack.setUserAuthentication({
  type: coda.AuthenticationType.WebBasic,
  requiresEndpointUrl: true,
});

// ============================================================================
// SCHEMAS
// ============================================================================

const ProjectSchema = coda.makeObjectSchema({
  properties: {
    id: { type: coda.ValueType.Number },
    identifier: { type: coda.ValueType.String },
    name: { type: coda.ValueType.String },
    description: { type: coda.ValueType.String },
    public: { type: coda.ValueType.Boolean },
    active: { type: coda.ValueType.Boolean },
    status: { type: coda.ValueType.String },
    createdAt: { type: coda.ValueType.String },
    updatedAt: { type: coda.ValueType.String },
  },
  idProperty: 'id',
  displayProperty: 'name',
});

const WorkPackageSchema = coda.makeObjectSchema({
  properties: {
    id: { type: coda.ValueType.Number },
    subject: { type: coda.ValueType.String },
    description: { type: coda.ValueType.String },
    startDate: { type: coda.ValueType.String },
    dueDate: { type: coda.ValueType.String },
    percentageDone: { type: coda.ValueType.Number },
    status: { type: coda.ValueType.String },
    priority: { type: coda.ValueType.String },
    assignee: { type: coda.ValueType.String },
    author: { type: coda.ValueType.String },
    projectId: { type: coda.ValueType.Number },
    projectName: { type: coda.ValueType.String },
    type: { type: coda.ValueType.String },
    createdAt: { type: coda.ValueType.String },
    updatedAt: { type: coda.ValueType.String },
  },
  idProperty: 'id',
  displayProperty: 'subject',
});

// ============================================================================
// SYNC TABLES
// ============================================================================

pack.addSyncTable({
  name: 'Projects',
  identityName: 'Project',
  schema: ProjectSchema,
  formula: {
    name: 'SyncProjects',
    description: 'Sync projects from OpenProject',
    parameters: [],
    execute: async function ([], context) {
      const response = await context.fetcher.fetch({
        method: 'GET',
        url: '/api/v3/projects',
      });

      const items = response.body._embedded?.elements || [];

      return {
        result: items.map((item: any) => ({
          id: item.id,
          identifier: item.identifier,
          name: item.name,
          description: item.description?.raw || '',
          public: item.public,
          active: item.active,
          status: item.status,
          createdAt: item.createdAt,
          updatedAt: item.updatedAt,
        })),
      };
    },
  },
});

pack.addSyncTable({
  name: 'WorkPackages',
  identityName: 'WorkPackage',
  schema: WorkPackageSchema,
  formula: {
    name: 'SyncWorkPackages',
    description: 'Sync work packages from OpenProject',
    parameters: [
      coda.makeParameter({
        type: coda.ParameterType.Number,
        name: 'projectId',
        description: 'Optional project ID to filter',
        optional: true,
      }),
    ],
    execute: async function ([projectId], context) {
      let url: string;
      if (projectId) {
        url = `/api/v3/projects/${projectId}/work_packages`;
      } else {
        url = '/api/v3/work_packages';
      }

      const response = await context.fetcher.fetch({
        method: 'GET',
        url: url,
      });

      const items = response.body._embedded?.elements || [];

      return {
        result: items.map((item: any) => ({
          id: item.id,
          subject: item.subject,
          description: item.description?.raw || '',
          startDate: item.startDate,
          dueDate: item.dueDate,
          percentageDone: item.percentageDone,
          status: item._embedded?.status?.name || '',
          priority: item._embedded?.priority?.name || '',
          assignee: item._embedded?.assignee?.name || '',
          author: item._embedded?.author?.name || '',
          projectId: item._embedded?.project?.id,
          projectName: item._embedded?.project?.name || '',
          type: item._embedded?.type?.name || '',
          createdAt: item.createdAt,
          updatedAt: item.updatedAt,
        })),
      };
    },
  },
});

// ============================================================================
// FORMULAS
// ============================================================================

pack.addFormula({
  name: 'GetProject',
  description: 'Get a project by ID',
  parameters: [
    coda.makeParameter({
      type: coda.ParameterType.Number,
      name: 'id',
      description: 'Project ID',
    }),
  ],
  resultType: coda.ValueType.Object,
  schema: ProjectSchema,
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
      description: item.description?.raw || '',
      public: item.public,
      active: item.active,
      status: item.status,
      createdAt: item.createdAt,
      updatedAt: item.updatedAt,
    };
  },
});

pack.addFormula({
  name: 'GetWorkPackage',
  description: 'Get a work package by ID',
  parameters: [
    coda.makeParameter({
      type: coda.ParameterType.Number,
      name: 'id',
      description: 'Work Package ID',
    }),
  ],
  resultType: coda.ValueType.Object,
  schema: WorkPackageSchema,
  execute: async function ([id], context) {
    const response = await context.fetcher.fetch({
      method: 'GET',
      url: `/api/v3/work_packages/${id}`,
    });

    const item = response.body;
    return {
      id: item.id,
      subject: item.subject,
      description: item.description?.raw || '',
      startDate: item.startDate,
      dueDate: item.dueDate,
      percentageDone: item.percentageDone,
      status: item._embedded?.status?.name || '',
      priority: item._embedded?.priority?.name || '',
      assignee: item._embedded?.assignee?.name || '',
      author: item._embedded?.author?.name || '',
      projectId: item._embedded?.project?.id,
      projectName: item._embedded?.project?.name || '',
      type: item._embedded?.type?.name || '',
      createdAt: item.createdAt,
      updatedAt: item.updatedAt,
    };
  },
});

// ============================================================================
// ACTIONS (using makeFormula with isAction: true)
// ============================================================================

pack.addFormula({
  name: 'CreateWorkPackage',
  description: 'Create a new work package',
  isAction: true,
  parameters: [
    coda.makeParameter({
      type: coda.ParameterType.Number,
      name: 'projectId',
      description: 'Project ID',
    }),
    coda.makeParameter({
      type: coda.ParameterType.String,
      name: 'subject',
      description: 'Work package subject',
    }),
    coda.makeParameter({
      type: coda.ParameterType.String,
      name: 'description',
      description: 'Description',
      optional: true,
    }),
  ],
  resultType: coda.ValueType.Object,
  schema: WorkPackageSchema,
  execute: async function ([projectId, subject, description], context) {
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
