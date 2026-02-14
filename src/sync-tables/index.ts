import * as coda from "@codahq/packs-sdk";
import { fetchFromAPI, extractCollection } from "../helpers";
import { Project, WorkPackage, User, TimeEntry, Version, Status, Priority, Query } from "../schemas";

const DEFAULT_PAGE_SIZE = 100;
const MAX_RESULTS = 1000;

export function registerSyncTables(pack: coda.PackDefinitionBuilder) {
  // Projects Sync Table
  pack.addSyncTable({
    name: "Projects",
    identityName: "Project",
    schema: coda.makeObjectSchema({
      properties: {
        id: { type: coda.ValueType.Number, required: true },
        name: { type: coda.ValueType.String, required: true },
        identifier: { type: coda.ValueType.String, required: true },
        description: { type: coda.ValueType.String },
        status: { type: coda.ValueType.String },
        public: { type: coda.ValueType.Boolean },
        parentId: { type: coda.ValueType.Number },
        parentName: { type: coda.ValueType.String },
        createdAt: { type: coda.ValueType.String, codaType: coda.ValueHintType.DateTime },
        updatedAt: { type: coda.ValueType.String, codaType: coda.ValueHintType.DateTime },
      },
      idProperty: "id",
      displayProperty: "name",
    }),
    formula: {
      name: "SyncProjects",
      description: "Sync projects from OpenProject",
      parameters: [],
      execute: async function ([], context) {
        const projects: any[] = [];
        let offset = 1;
        
        while (projects.length < MAX_RESULTS) {
          const response = await fetchFromAPI(context, '/projects', {
            params: { pageSize: DEFAULT_PAGE_SIZE, offset }
          });
          
          const items = extractCollection<Project>(response);
          if (items.length === 0) break;
          
          for (const item of items) {
            projects.push({
              id: item.id,
              name: item.name,
              identifier: item.identifier,
              description: item.description,
              status: item.status,
              public: item.public,
              parentId: item.parent?.id,
              parentName: item.parent?.name,
              createdAt: item.createdAt,
              updatedAt: item.updatedAt,
            });
          }
          
          if (!response._links?.next) break;
          offset++;
        }
        
        return { result: projects };
      },
    },
  });

  // WorkPackages Sync Table
  pack.addSyncTable({
    name: "WorkPackages",
    identityName: "WorkPackage",
    schema: coda.makeObjectSchema({
      properties: {
        id: { type: coda.ValueType.Number, required: true },
        subject: { type: coda.ValueType.String, required: true },
        description: { type: coda.ValueType.String },
        type: { type: coda.ValueType.String },
        status: { type: coda.ValueType.String },
        priority: { type: coda.ValueType.String },
        percentageDone: { type: coda.ValueType.Number },
        startDate: { type: coda.ValueType.String, codaType: coda.ValueHintType.Date },
        dueDate: { type: coda.ValueType.String, codaType: coda.ValueHintType.Date },
        estimatedTime: { type: coda.ValueType.String },
        spentTime: { type: coda.ValueType.String },
        projectId: { type: coda.ValueType.Number },
        projectName: { type: coda.ValueType.String },
        authorId: { type: coda.ValueType.Number },
        authorName: { type: coda.ValueType.String },
        assigneeId: { type: coda.ValueType.Number },
        assigneeName: { type: coda.ValueType.String },
        createdAt: { type: coda.ValueType.String, codaType: coda.ValueHintType.DateTime },
        updatedAt: { type: coda.ValueType.String, codaType: coda.ValueHintType.DateTime },
      },
      idProperty: "id",
      displayProperty: "subject",
    }),
    formula: {
      name: "SyncWorkPackages",
      description: "Sync work packages from OpenProject",
      parameters: [],
      execute: async function ([], context) {
        const items: any[] = [];
        let offset = 1;
        
        while (items.length < MAX_RESULTS) {
          const response = await fetchFromAPI(context, '/work_packages', {
            params: { pageSize: DEFAULT_PAGE_SIZE, offset }
          });
          
          const elements = extractCollection<WorkPackage>(response);
          if (elements.length === 0) break;
          
          for (const wp of elements) {
            items.push({
              id: wp.id,
              subject: wp.subject,
              description: wp.description,
              type: wp.type,
              status: wp.status,
              priority: wp.priority,
              percentageDone: wp.percentageDone,
              startDate: wp.startDate,
              dueDate: wp.dueDate,
              estimatedTime: wp.estimatedTime,
              spentTime: wp.spentTime,
              projectId: wp.project?.id,
              projectName: wp.project?.name,
              authorId: wp.author?.id,
              authorName: wp.author?.name,
              assigneeId: wp.assignee?.id,
              assigneeName: wp.assignee?.name,
              createdAt: wp.createdAt,
              updatedAt: wp.updatedAt,
            });
          }
          
          if (!response._links?.next) break;
          offset++;
        }
        
        return { result: items };
      },
    },
  });

  // Users Sync Table
  pack.addSyncTable({
    name: "Users",
    identityName: "User",
    schema: coda.makeObjectSchema({
      properties: {
        id: { type: coda.ValueType.Number, required: true },
        login: { type: coda.ValueType.String },
        firstName: { type: coda.ValueType.String },
        lastName: { type: coda.ValueType.String },
        name: { type: coda.ValueType.String, required: true },
        email: { type: coda.ValueType.String },
        status: { type: coda.ValueType.String },
        admin: { type: coda.ValueType.Boolean },
        createdAt: { type: coda.ValueType.String, codaType: coda.ValueHintType.DateTime },
        updatedAt: { type: coda.ValueType.String, codaType: coda.ValueHintType.DateTime },
      },
      idProperty: "id",
      displayProperty: "name",
    }),
    formula: {
      name: "SyncUsers",
      description: "Sync users from OpenProject",
      parameters: [],
      execute: async function ([], context) {
        const response = await fetchFromAPI(context, '/users', {
          params: { pageSize: DEFAULT_PAGE_SIZE }
        });
        
        const users = extractCollection<User>(response).map(user => ({
          id: user.id,
          login: user.login,
          firstName: user.firstName,
          lastName: user.lastName,
          name: user.name,
          email: user.email,
          status: user.status,
          admin: user.admin,
          createdAt: user.createdAt,
          updatedAt: user.updatedAt,
        }));
        
        return { result: users };
      },
    },
  });

  // TimeEntries Sync Table
  pack.addSyncTable({
    name: "TimeEntries",
    identityName: "TimeEntry",
    schema: coda.makeObjectSchema({
      properties: {
        id: { type: coda.ValueType.Number, required: true },
        comment: { type: coda.ValueType.String },
        spentOn: { type: coda.ValueType.String, codaType: coda.ValueHintType.Date, required: true },
        hours: { type: coda.ValueType.Number, required: true },
        userId: { type: coda.ValueType.Number },
        userName: { type: coda.ValueType.String },
        workPackageId: { type: coda.ValueType.Number },
        workPackageSubject: { type: coda.ValueType.String },
        projectId: { type: coda.ValueType.Number },
        projectName: { type: coda.ValueType.String },
        activityName: { type: coda.ValueType.String },
        createdAt: { type: coda.ValueType.String, codaType: coda.ValueHintType.DateTime },
        updatedAt: { type: coda.ValueType.String, codaType: coda.ValueHintType.DateTime },
      },
      idProperty: "id",
      displayProperty: "comment",
    }),
    formula: {
      name: "SyncTimeEntries",
      description: "Sync time entries from OpenProject",
      parameters: [],
      execute: async function ([], context) {
        const items: any[] = [];
        let offset = 1;
        
        while (items.length < MAX_RESULTS) {
          const response = await fetchFromAPI(context, '/time_entries', {
            params: { pageSize: DEFAULT_PAGE_SIZE, offset }
          });
          
          const elements = extractCollection<TimeEntry>(response);
          if (elements.length === 0) break;
          
          for (const entry of elements) {
            items.push({
              id: entry.id,
              comment: entry.comment,
              spentOn: entry.spentOn,
              hours: entry.hours,
              userId: entry.user?.id,
              userName: entry.user?.name,
              workPackageId: entry.workPackage?.id,
              workPackageSubject: entry.workPackage?.subject,
              projectId: entry.project?.id,
              projectName: entry.project?.name,
              activityName: entry.activity?.name,
              createdAt: entry.createdAt,
              updatedAt: entry.updatedAt,
            });
          }
          
          if (!response._links?.next) break;
          offset++;
        }
        
        return { result: items };
      },
    },
  });

  // Versions Sync Table
  pack.addSyncTable({
    name: "Versions",
    identityName: "Version",
    schema: coda.makeObjectSchema({
      properties: {
        id: { type: coda.ValueType.Number, required: true },
        name: { type: coda.ValueType.String, required: true },
        description: { type: coda.ValueType.String },
        status: { type: coda.ValueType.String },
        sharing: { type: coda.ValueType.String },
        startDate: { type: coda.ValueType.String, codaType: coda.ValueHintType.Date },
        endDate: { type: coda.ValueType.String, codaType: coda.ValueHintType.Date },
        projectId: { type: coda.ValueType.Number },
        projectName: { type: coda.ValueType.String },
      },
      idProperty: "id",
      displayProperty: "name",
    }),
    formula: {
      name: "SyncVersions",
      description: "Sync versions from OpenProject",
      parameters: [],
      execute: async function ([], context) {
        const response = await fetchFromAPI(context, '/versions', {
          params: { pageSize: DEFAULT_PAGE_SIZE }
        });
        
        const versions = extractCollection<Version>(response).map(v => ({
          id: v.id,
          name: v.name,
          description: v.description,
          status: v.status,
          sharing: v.sharing,
          startDate: v.startDate,
          endDate: v.endDate,
          projectId: v.project?.id,
          projectName: v.project?.name,
        }));
        
        return { result: versions };
      },
    },
  });

  // Statuses Sync Table
  pack.addSyncTable({
    name: "Statuses",
    identityName: "Status",
    schema: coda.makeObjectSchema({
      properties: {
        id: { type: coda.ValueType.Number, required: true },
        name: { type: coda.ValueType.String, required: true },
        color: { type: coda.ValueType.String },
        position: { type: coda.ValueType.Number },
        defaultDoneRatio: { type: coda.ValueType.Number },
        isClosed: { type: coda.ValueType.Boolean },
        isDefault: { type: coda.ValueType.Boolean },
      },
      idProperty: "id",
      displayProperty: "name",
    }),
    formula: {
      name: "SyncStatuses",
      description: "Sync statuses from OpenProject",
      parameters: [],
      execute: async function ([], context) {
        const response = await fetchFromAPI(context, '/statuses');
        
        const statuses = extractCollection<Status>(response).map(s => ({
          id: s.id,
          name: s.name,
          color: s.color,
          position: s.position,
          defaultDoneRatio: s.defaultDoneRatio,
          isClosed: s.isClosed,
          isDefault: s.isDefault,
        }));
        
        return { result: statuses };
      },
    },
  });

  // Priorities Sync Table
  pack.addSyncTable({
    name: "Priorities",
    identityName: "Priority",
    schema: coda.makeObjectSchema({
      properties: {
        id: { type: coda.ValueType.Number, required: true },
        name: { type: coda.ValueType.String, required: true },
        position: { type: coda.ValueType.Number },
        isDefault: { type: coda.ValueType.Boolean },
        isActive: { type: coda.ValueType.Boolean },
      },
      idProperty: "id",
      displayProperty: "name",
    }),
    formula: {
      name: "SyncPriorities",
      description: "Sync priorities from OpenProject",
      parameters: [],
      execute: async function ([], context) {
        const response = await fetchFromAPI(context, '/priorities');
        
        const priorities = extractCollection<Priority>(response).map(p => ({
          id: p.id,
          name: p.name,
          position: p.position,
          isDefault: p.isDefault,
          isActive: p.isActive,
        }));
        
        return { result: priorities };
      },
    },
  });

  // Queries Sync Table
  pack.addSyncTable({
    name: "Queries",
    identityName: "Query",
    schema: coda.makeObjectSchema({
      properties: {
        id: { type: coda.ValueType.Number, required: true },
        name: { type: coda.ValueType.String, required: true },
        public: { type: coda.ValueType.Boolean },
        starred: { type: coda.ValueType.Boolean },
      },
      idProperty: "id",
      displayProperty: "name",
    }),
    formula: {
      name: "SyncQueries",
      description: "Sync queries from OpenProject",
      parameters: [],
      execute: async function ([], context) {
        const response = await fetchFromAPI(context, '/queries', {
          params: { pageSize: DEFAULT_PAGE_SIZE }
        });
        
        const queries = extractCollection<Query>(response).map(q => ({
          id: q.id,
          name: q.name,
          public: q.public,
          starred: q.starred,
        }));
        
        return { result: queries };
      },
    },
  });
}
