import * as coda from "@codahq/packs-sdk";
import { fetchFromAPI } from "../helpers";
import { Project, WorkPackage, User, TimeEntry, Version } from "../schemas";

export function registerFormulas(pack: coda.PackDefinitionBuilder) {
  // Get Project by ID
  pack.addFormula({
    name: "Project",
    description: "Get a project by ID",
    parameters: [
      coda.makeParameter({
        type: coda.ParameterType.Number,
        name: "id",
        description: "The project ID",
      }),
    ],
    resultType: coda.ValueType.Object,
    schema: coda.makeObjectSchema({
      properties: {
        id: { type: coda.ValueType.Number },
        name: { type: coda.ValueType.String },
        identifier: { type: coda.ValueType.String },
        description: { type: coda.ValueType.String },
        status: { type: coda.ValueType.String },
        public: { type: coda.ValueType.Boolean },
      },
      idProperty: "id",
      displayProperty: "name",
    }),
    execute: async function ([id], context) {
      const project = await fetchFromAPI(context, `/projects/${id}`);
      return {
        id: project.id,
        name: project.name,
        identifier: project.identifier,
        description: project.description,
        status: project.status,
        public: project.public,
      };
    },
  });

  // Get Work Package by ID
  pack.addFormula({
    name: "WorkPackage",
    description: "Get a work package by ID",
    parameters: [
      coda.makeParameter({
        type: coda.ParameterType.Number,
        name: "id",
        description: "The work package ID",
      }),
    ],
    resultType: coda.ValueType.Object,
    schema: coda.makeObjectSchema({
      properties: {
        id: { type: coda.ValueType.Number },
        subject: { type: coda.ValueType.String },
        description: { type: coda.ValueType.String },
        type: { type: coda.ValueType.String },
        status: { type: coda.ValueType.String },
        priority: { type: coda.ValueType.String },
        percentageDone: { type: coda.ValueType.Number },
        startDate: { type: coda.ValueType.String, codaType: coda.ValueHintType.Date },
        dueDate: { type: coda.ValueType.String, codaType: coda.ValueHintType.Date },
        projectId: { type: coda.ValueType.Number },
        assigneeName: { type: coda.ValueType.String },
      },
      idProperty: "id",
      displayProperty: "subject",
    }),
    execute: async function ([id], context) {
      const wp = await fetchFromAPI(context, `/work_packages/${id}`);
      return {
        id: wp.id,
        subject: wp.subject,
        description: wp.description,
        type: wp._embedded?.type?.name,
        status: wp._embedded?.status?.name,
        priority: wp._embedded?.priority?.name,
        percentageDone: wp.percentageDone,
        startDate: wp.startDate,
        dueDate: wp.dueDate,
        projectId: wp._embedded?.project?.id,
        assigneeName: wp._embedded?.assignee?.name,
      };
    },
  });

  // Get User by ID
  pack.addFormula({
    name: "User",
    description: "Get a user by ID",
    parameters: [
      coda.makeParameter({
        type: coda.ParameterType.Number,
        name: "id",
        description: "The user ID",
      }),
    ],
    resultType: coda.ValueType.Object,
    schema: coda.makeObjectSchema({
      properties: {
        id: { type: coda.ValueType.Number },
        login: { type: coda.ValueType.String },
        firstName: { type: coda.ValueType.String },
        lastName: { type: coda.ValueType.String },
        name: { type: coda.ValueType.String },
        email: { type: coda.ValueType.String },
        status: { type: coda.ValueType.String },
        admin: { type: coda.ValueType.Boolean },
      },
      idProperty: "id",
      displayProperty: "name",
    }),
    execute: async function ([id], context) {
      const user = await fetchFromAPI(context, `/users/${id}`);
      return {
        id: user.id,
        login: user.login,
        firstName: user.firstName,
        lastName: user.lastName,
        name: user.name,
        email: user.email,
        status: user.status,
        admin: user.admin,
      };
    },
  });

  // Get Time Entry by ID
  pack.addFormula({
    name: "TimeEntry",
    description: "Get a time entry by ID",
    parameters: [
      coda.makeParameter({
        type: coda.ParameterType.Number,
        name: "id",
        description: "The time entry ID",
      }),
    ],
    resultType: coda.ValueType.Object,
    schema: coda.makeObjectSchema({
      properties: {
        id: { type: coda.ValueType.Number },
        comment: { type: coda.ValueType.String },
        spentOn: { type: coda.ValueType.String, codaType: coda.ValueHintType.Date },
        hours: { type: coda.ValueType.Number },
        userName: { type: coda.ValueType.String },
        workPackageSubject: { type: coda.ValueType.String },
        projectName: { type: coda.ValueType.String },
      },
      idProperty: "id",
      displayProperty: "comment",
    }),
    execute: async function ([id], context) {
      const entry = await fetchFromAPI(context, `/time_entries/${id}`);
      return {
        id: entry.id,
        comment: entry.comment,
        spentOn: entry.spentOn,
        hours: entry.hours,
        userName: entry._embedded?.user?.name,
        workPackageSubject: entry._embedded?.workPackage?.subject,
        projectName: entry._embedded?.project?.name,
      };
    },
  });

  // Get Version by ID
  pack.addFormula({
    name: "Version",
    description: "Get a version/milestone by ID",
    parameters: [
      coda.makeParameter({
        type: coda.ParameterType.Number,
        name: "id",
        description: "The version ID",
      }),
    ],
    resultType: coda.ValueType.Object,
    schema: coda.makeObjectSchema({
      properties: {
        id: { type: coda.ValueType.Number },
        name: { type: coda.ValueType.String },
        description: { type: coda.ValueType.String },
        status: { type: coda.ValueType.String },
        startDate: { type: coda.ValueType.String, codaType: coda.ValueHintType.Date },
        endDate: { type: coda.ValueType.String, codaType: coda.ValueHintType.Date },
      },
      idProperty: "id",
      displayProperty: "name",
    }),
    execute: async function ([id], context) {
      const version = await fetchFromAPI(context, `/versions/${id}`);
      return {
        id: version.id,
        name: version.name,
        description: version.description,
        status: version.status,
        startDate: version.startDate,
        endDate: version.endDate,
      };
    },
  });
}
