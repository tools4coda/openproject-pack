// Auto-generated from OpenAPI spec
// OpenProject API v3 Type Definitions

import * as coda from '@codahq/packs-sdk';

// ============================================================================
// CORE MODELS
// ============================================================================

export interface Project {
  id: number;
  identifier?: string;
  name?: string;
  description?: string;
  public?: boolean;
  active?: boolean;
  status?: string;
  statusExplanation?: string;
  createdAt?: string;
  updatedAt?: string;
}

export const ProjectSchema = coda.makeObjectSchema({
  properties: {
    id: { type: coda.ValueType.Number },
    identifier: { type: coda.ValueType.String },
    name: { type: coda.ValueType.String },
    description: { type: coda.ValueType.String },
    public: { type: coda.ValueType.Boolean },
    active: { type: coda.ValueType.Boolean },
    status: { type: coda.ValueType.String },
    statusExplanation: { type: coda.ValueType.String },
    createdAt: { type: coda.ValueType.String },
    updatedAt: { type: coda.ValueType.String },
  },
  idProperty: 'id',
  displayProperty: 'name',
});

export interface WorkPackage {
  id: number;
  subject?: string;
  description?: string;
  startDate?: string;
  dueDate?: string;
  estimatedTime?: string;
  spentTime?: string;
  percentageDone?: number;
  status?: string;
  priority?: string;
  assignee?: string;
  author?: string;
  projectId?: number;
  projectName?: string;
  type?: string;
  createdAt?: string;
  updatedAt?: string;
}

export const WorkPackageSchema = coda.makeObjectSchema({
  properties: {
    id: { type: coda.ValueType.Number },
    subject: { type: coda.ValueType.String },
    description: { type: coda.ValueType.String },
    startDate: { type: coda.ValueType.String },
    dueDate: { type: coda.ValueType.String },
    estimatedTime: { type: coda.ValueType.String },
    spentTime: { type: coda.ValueType.String },
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

export interface User {
  id: number;
  login?: string;
  firstName?: string;
  lastName?: string;
  name?: string;
  email?: string;
  admin?: boolean;
  status?: string;
  createdAt?: string;
  updatedAt?: string;
}

export const UserSchema = coda.makeObjectSchema({
  properties: {
    id: { type: coda.ValueType.Number },
    login: { type: coda.ValueType.String },
    firstName: { type: coda.ValueType.String },
    lastName: { type: coda.ValueType.String },
    name: { type: coda.ValueType.String },
    email: { type: coda.ValueType.String },
    admin: { type: coda.ValueType.Boolean },
    status: { type: coda.ValueType.String },
    createdAt: { type: coda.ValueType.String },
    updatedAt: { type: coda.ValueType.String },
  },
  idProperty: 'id',
  displayProperty: 'name',
});

export interface TimeEntry {
  id: number;
  projectId?: number;
  projectName?: string;
  workPackageId?: number;
  workPackageSubject?: string;
  userId?: number;
  userName?: string;
  activityId?: number;
  activityName?: string;
  hours?: number;
  comment?: string;
  spentOn?: string;
  createdAt?: string;
  updatedAt?: string;
}

export const TimeEntrySchema = coda.makeObjectSchema({
  properties: {
    id: { type: coda.ValueType.Number },
    projectId: { type: coda.ValueType.Number },
    projectName: { type: coda.ValueType.String },
    workPackageId: { type: coda.ValueType.Number },
    workPackageSubject: { type: coda.ValueType.String },
    userId: { type: coda.ValueType.Number },
    userName: { type: coda.ValueType.String },
    activityId: { type: coda.ValueType.Number },
    activityName: { type: coda.ValueType.String },
    hours: { type: coda.ValueType.Number },
    comment: { type: coda.ValueType.String },
    spentOn: { type: coda.ValueType.String },
    createdAt: { type: coda.ValueType.String },
    updatedAt: { type: coda.ValueType.String },
  },
  idProperty: 'id',
  displayProperty: 'comment',
});
