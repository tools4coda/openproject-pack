import * as coda from "@codahq/packs-sdk";
import { fetchFromAPI } from "../helpers";

export function registerActions(pack: coda.PackDefinitionBuilder) {
  // Create Project
  pack.addFormula({
    name: "CreateProject",
    description: "Create a new project",
    parameters: [
      coda.makeParameter({
        type: coda.ParameterType.String,
        name: "name",
        description: "Project name",
        required: true,
      }),
      coda.makeParameter({
        type: coda.ParameterType.String,
        name: "identifier",
        description: "Project identifier (URL-friendly)",
        required: true,
      }),
      coda.makeParameter({
        type: coda.ParameterType.String,
        name: "description",
        description: "Project description",
      }),
    ],
    resultType: coda.ValueType.Object,
    schema: coda.makeObjectSchema({
      properties: {
        id: { type: coda.ValueType.Number },
        name: { type: coda.ValueType.String },
        identifier: { type: coda.ValueType.String },
      },
      idProperty: "id",
      displayProperty: "name",
    }),
    isAction: true,
    execute: async function ([name, identifier, description], context) {
      const body: any = { name, identifier };
      if (description) body.description = { raw: description };
      
      const response = await fetchFromAPI(context, '/projects', {
        method: 'POST',
        body,
      });
      return {
        id: response.id,
        name: response.name,
        identifier: response.identifier,
      };
    },
  });

  // Update Project
  pack.addFormula({
    name: "UpdateProject",
    description: "Update an existing project",
    parameters: [
      coda.makeParameter({
        type: coda.ParameterType.Number,
        name: "id",
        description: "Project ID",
        required: true,
      }),
      coda.makeParameter({
        type: coda.ParameterType.String,
        name: "name",
        description: "New project name",
      }),
      coda.makeParameter({
        type: coda.ParameterType.String,
        name: "description",
        description: "New project description",
      }),
      coda.makeParameter({
        type: coda.ParameterType.String,
        name: "status",
        description: "Project status (1=active, 5=archived, 9=deleted)",
      }),
    ],
    resultType: coda.ValueType.Boolean,
    isAction: true,
    execute: async function ([id, name, description, status], context) {
      const body: any = {};
      if (name) body.name = name;
      if (description) body.description = { raw: description };
      if (status) body.status = status;
      
      await fetchFromAPI(context, `/projects/${id}`, {
        method: 'PATCH',
        body,
      });
      return true;
    },
  });

  // Create Work Package
  pack.addFormula({
    name: "CreateWorkPackage",
    description: "Create a new work package (task)",
    parameters: [
      coda.makeParameter({
        type: coda.ParameterType.Number,
        name: "projectId",
        description: "Project ID",
        required: true,
      }),
      coda.makeParameter({
        type: coda.ParameterType.String,
        name: "subject",
        description: "Work package subject/title",
        required: true,
      }),
      coda.makeParameter({
        type: coda.ParameterType.String,
        name: "description",
        description: "Work package description",
      }),
      coda.makeParameter({
        type: coda.ParameterType.Number,
        name: "assigneeId",
        description: "Assignee user ID",
      }),
      coda.makeParameter({
        type: coda.ParameterType.Number,
        name: "typeId",
        description: "Type ID (Task, Feature, Bug, etc.)",
      }),
    ],
    resultType: coda.ValueType.Object,
    schema: coda.makeObjectSchema({
      properties: {
        id: { type: coda.ValueType.Number },
        subject: { type: coda.ValueType.String },
        type: { type: coda.ValueType.String },
        status: { type: coda.ValueType.String },
      },
      idProperty: "id",
      displayProperty: "subject",
    }),
    isAction: true,
    execute: async function ([projectId, subject, description, assigneeId, typeId], context) {
      const body: any = {
        subject,
        _links: { project: { href: `/api/v3/projects/${projectId}` } },
      };
      
      if (description) body.description = { raw: description };
      if (assigneeId) body._links.assignee = { href: `/api/v3/users/${assigneeId}` };
      if (typeId) body._links.type = { href: `/api/v3/types/${typeId}` };
      
      const response = await fetchFromAPI(context, '/work_packages', {
        method: 'POST',
        body,
      });
      
      return {
        id: response.id,
        subject: response.subject,
        type: response._embedded?.type?.name,
        status: response._embedded?.status?.name,
      };
    },
  });

  // Update Work Package
  pack.addFormula({
    name: "UpdateWorkPackage",
    description: "Update an existing work package",
    parameters: [
      coda.makeParameter({
        type: coda.ParameterType.Number,
        name: "id",
        description: "Work package ID",
        required: true,
      }),
      coda.makeParameter({
        type: coda.ParameterType.String,
        name: "subject",
        description: "New subject",
      }),
      coda.makeParameter({
        type: coda.ParameterType.String,
        name: "description",
        description: "New description",
      }),
      coda.makeParameter({
        type: coda.ParameterType.Number,
        name: "statusId",
        description: "Status ID",
      }),
      coda.makeParameter({
        type: coda.ParameterType.Number,
        name: "assigneeId",
        description: "Assignee user ID",
      }),
      coda.makeParameter({
        type: coda.ParameterType.Number,
        name: "percentageDone",
        description: "Progress percentage (0-100)",
      }),
    ],
    resultType: coda.ValueType.Boolean,
    isAction: true,
    execute: async function ([id, subject, description, statusId, assigneeId, percentageDone], context) {
      const body: any = { _links: {} };
      
      if (subject) body.subject = subject;
      if (description) body.description = { raw: description };
      if (statusId) body._links.status = { href: `/api/v3/statuses/${statusId}` };
      if (assigneeId) body._links.assignee = { href: `/api/v3/users/${assigneeId}` };
      if (percentageDone !== undefined) body.percentageDone = percentageDone;
      
      await fetchFromAPI(context, `/work_packages/${id}`, {
        method: 'PATCH',
        body,
      });
      return true;
    },
  });

  // Delete Work Package
  pack.addFormula({
    name: "DeleteWorkPackage",
    description: "Delete a work package",
    parameters: [
      coda.makeParameter({
        type: coda.ParameterType.Number,
        name: "id",
        description: "Work package ID",
        required: true,
      }),
    ],
    resultType: coda.ValueType.Boolean,
    isAction: true,
    execute: async function ([id], context) {
      await fetchFromAPI(context, `/work_packages/${id}`, {
        method: 'DELETE',
      });
      return true;
    },
  });

  // Add Comment to Work Package
  pack.addFormula({
    name: "AddComment",
    description: "Add a comment to a work package",
    parameters: [
      coda.makeParameter({
        type: coda.ParameterType.Number,
        name: "workPackageId",
        description: "Work package ID",
        required: true,
      }),
      coda.makeParameter({
        type: coda.ParameterType.String,
        name: "comment",
        description: "Comment text",
        required: true,
      }),
    ],
    resultType: coda.ValueType.Object,
    schema: coda.makeObjectSchema({
      properties: {
        id: { type: coda.ValueType.Number },
        comment: { type: coda.ValueType.String },
        createdAt: { type: coda.ValueType.String },
      },
      idProperty: "id",
      displayProperty: "comment",
    }),
    isAction: true,
    execute: async function ([workPackageId, comment], context) {
      const response = await fetchFromAPI(context, `/work_packages/${workPackageId}/activities`, {
        method: 'POST',
        body: { comment: { raw: comment } },
      });
      return {
        id: response.id,
        comment: response.comment?.raw,
        createdAt: response.createdAt,
      };
    },
  });

  // Create Time Entry
  pack.addFormula({
    name: "CreateTimeEntry",
    description: "Log time spent on a work package",
    parameters: [
      coda.makeParameter({
        type: coda.ParameterType.Number,
        name: "workPackageId",
        description: "Work package ID",
        required: true,
      }),
      coda.makeParameter({
        type: coda.ParameterType.Number,
        name: "hours",
        description: "Hours spent (e.g., 2.5)",
        required: true,
      }),
      coda.makeParameter({
        type: coda.ParameterType.String,
        name: "spentOn",
        description: "Date (YYYY-MM-DD)",
        required: true,
      }),
      coda.makeParameter({
        type: coda.ParameterType.String,
        name: "comment",
        description: "Comment/description",
      }),
      coda.makeParameter({
        type: coda.ParameterType.Number,
        name: "activityId",
        description: "Activity ID (time tracking category)",
      }),
    ],
    resultType: coda.ValueType.Object,
    schema: coda.makeObjectSchema({
      properties: {
        id: { type: coda.ValueType.Number },
        hours: { type: coda.ValueType.Number },
        spentOn: { type: coda.ValueType.String },
        comment: { type: coda.ValueType.String },
      },
      idProperty: "id",
      displayProperty: "comment",
    }),
    isAction: true,
    execute: async function ([workPackageId, hours, spentOn, comment, activityId], context) {
      const body: any = {
        hours,
        spentOn,
        _links: { workPackage: { href: `/api/v3/work_packages/${workPackageId}` } },
      };
      
      if (comment) body.comment = { raw: comment };
      if (activityId) body._links.activity = { href: `/api/v3/time_entries/activities/${activityId}` };
      
      const response = await fetchFromAPI(context, '/time_entries', {
        method: 'POST',
        body,
      });
      
      return {
        id: response.id,
        hours: response.hours,
        spentOn: response.spentOn,
        comment: response.comment?.raw,
      };
    },
  });

  // Update Time Entry
  pack.addFormula({
    name: "UpdateTimeEntry",
    description: "Update an existing time entry",
    parameters: [
      coda.makeParameter({
        type: coda.ParameterType.Number,
        name: "id",
        description: "Time entry ID",
        required: true,
      }),
      coda.makeParameter({
        type: coda.ParameterType.Number,
        name: "hours",
        description: "New hours value",
      }),
      coda.makeParameter({
        type: coda.ParameterType.String,
        name: "comment",
        description: "New comment",
      }),
    ],
    resultType: coda.ValueType.Boolean,
    isAction: true,
    execute: async function ([id, hours, comment], context) {
      const body: any = {};
      if (hours !== undefined) body.hours = hours;
      if (comment) body.comment = { raw: comment };
      
      await fetchFromAPI(context, `/time_entries/${id}`, {
        method: 'PATCH',
        body,
      });
      return true;
    },
  });

  // Assign Work Package (Quick action)
  pack.addFormula({
    name: "AssignWorkPackage",
    description: "Quickly assign a work package to a user",
    parameters: [
      coda.makeParameter({
        type: coda.ParameterType.Number,
        name: "workPackageId",
        description: "Work package ID",
        required: true,
      }),
      coda.makeParameter({
        type: coda.ParameterType.Number,
        name: "assigneeId",
        description: "User ID to assign (empty to unassign)",
      }),
    ],
    resultType: coda.ValueType.Boolean,
    isAction: true,
    execute: async function ([workPackageId, assigneeId], context) {
      const body: any = { _links: {} };
      
      if (assigneeId) {
        body._links.assignee = { href: `/api/v3/users/${assigneeId}` };
      } else {
        body._links.assignee = { href: null };
      }
      
      await fetchFromAPI(context, `/work_packages/${workPackageId}`, {
        method: 'PATCH',
        body,
      });
      return true;
    },
  });

  // Update Progress (Quick action)
  pack.addFormula({
    name: "UpdateProgress",
    description: "Update work package progress percentage",
    parameters: [
      coda.makeParameter({
        type: coda.ParameterType.Number,
        name: "workPackageId",
        description: "Work package ID",
        required: true,
      }),
      coda.makeParameter({
        type: coda.ParameterType.Number,
        name: "percentage",
        description: "Progress percentage (0-100)",
        required: true,
      }),
    ],
    resultType: coda.ValueType.Boolean,
    isAction: true,
    execute: async function ([workPackageId, percentage], context) {
      await fetchFromAPI(context, `/work_packages/${workPackageId}`, {
        method: 'PATCH',
        body: { percentageDone: percentage },
      });
      return true;
    },
  });
}
