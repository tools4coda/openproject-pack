// ============================================================================
// OPENPROJECT API v3 - COMPLETE TYPE DEFINITIONS
// Auto-generated with manual optimization
// ============================================================================

import * as coda from '@codahq/packs-sdk';

// ============================================================================
// CORE MODELS
// ============================================================================

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
    language: { type: coda.ValueType.String },
    createdAt: { type: coda.ValueType.String },
    updatedAt: { type: coda.ValueType.String },
  },
  idProperty: 'id',
  displayProperty: 'name',
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
  language?: string;
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

// ============================================================================
// REFERENCE DATA
// ============================================================================

export const StatusSchema = coda.makeObjectSchema({
  properties: {
    id: { type: coda.ValueType.Number },
    name: { type: coda.ValueType.String },
    color: { type: coda.ValueType.String },
    defaultDoneRatio: { type: coda.ValueType.Number },
    isClosed: { type: coda.ValueType.Boolean },
    isDefault: { type: coda.ValueType.Boolean },
    position: { type: coda.ValueType.Number },
  },
  idProperty: 'id',
  displayProperty: 'name',
});

export interface Status {
  id: number;
  name?: string;
  color?: string;
  defaultDoneRatio?: number;
  isClosed?: boolean;
  isDefault?: boolean;
  position?: number;
}

export const PrioritySchema = coda.makeObjectSchema({
  properties: {
    id: { type: coda.ValueType.Number },
    name: { type: coda.ValueType.String },
    color: { type: coda.ValueType.String },
    position: { type: coda.ValueType.Number },
    isDefault: { type: coda.ValueType.Boolean },
    isActive: { type: coda.ValueType.Boolean },
  },
  idProperty: 'id',
  displayProperty: 'name',
});

export interface Priority {
  id: number;
  name?: string;
  color?: string;
  position?: number;
  isDefault?: boolean;
  isActive?: boolean;
}

export const TypeSchema = coda.makeObjectSchema({
  properties: {
    id: { type: coda.ValueType.Number },
    name: { type: coda.ValueType.String },
    color: { type: coda.ValueType.String },
    position: { type: coda.ValueType.Number },
    isDefault: { type: coda.ValueType.Boolean },
    isMilestone: { type: coda.ValueType.Boolean },
  },
  idProperty: 'id',
  displayProperty: 'name',
});

export interface Type {
  id: number;
  name?: string;
  color?: string;
  position?: number;
  isDefault?: boolean;
  isMilestone?: boolean;
}

export const ActivitySchema = coda.makeObjectSchema({
  properties: {
    id: { type: coda.ValueType.Number },
    name: { type: coda.ValueType.String },
    parentId: { type: coda.ValueType.Number },
    position: { type: coda.ValueType.Number },
    default: { type: coda.ValueType.Boolean },
  },
  idProperty: 'id',
  displayProperty: 'name',
});

export interface Activity {
  id: number;
  name?: string;
  parentId?: number;
  position?: number;
  default?: boolean;
}

// ============================================================================
// ADDITIONAL MODELS
// ============================================================================

export const VersionSchema = coda.makeObjectSchema({
  properties: {
    id: { type: coda.ValueType.Number },
    name: { type: coda.ValueType.String },
    description: { type: coda.ValueType.String },
    projectId: { type: coda.ValueType.Number },
    status: { type: coda.ValueType.String },
    sharing: { type: coda.ValueType.String },
    startDate: { type: coda.ValueType.String },
    endDate: { type: coda.ValueType.String },
    createdAt: { type: coda.ValueType.String },
    updatedAt: { type: coda.ValueType.String },
  },
  idProperty: 'id',
  displayProperty: 'name',
});

export const QuerySchema = coda.makeObjectSchema({
  properties: {
    id: { type: coda.ValueType.Number },
    name: { type: coda.ValueType.String },
    filters: { type: coda.ValueType.String },
    isPublic: { type: coda.ValueType.Boolean },
    projectId: { type: coda.ValueType.Number },
    userId: { type: coda.ValueType.Number },
  },
  idProperty: 'id',
  displayProperty: 'name',
});

export const NewsSchema = coda.makeObjectSchema({
  properties: {
    id: { type: coda.ValueType.Number },
    title: { type: coda.ValueType.String },
    summary: { type: coda.ValueType.String },
    description: { type: coda.ValueType.String },
    projectId: { type: coda.ValueType.Number },
    projectName: { type: coda.ValueType.String },
    authorId: { type: coda.ValueType.Number },
    authorName: { type: coda.ValueType.String },
    createdAt: { type: coda.ValueType.String },
    updatedAt: { type: coda.ValueType.String },
  },
  idProperty: 'id',
  displayProperty: 'title',
});

export const DocumentSchema = coda.makeObjectSchema({
  properties: {
    id: { type: coda.ValueType.Number },
    title: { type: coda.ValueType.String },
    description: { type: coda.ValueType.String },
    projectId: { type: coda.ValueType.Number },
    projectName: { type: coda.ValueType.String },
    category: { type: coda.ValueType.String },
    createdAt: { type: coda.ValueType.String },
    updatedAt: { type: coda.ValueType.String },
  },
  idProperty: 'id',
  displayProperty: 'title',
});

export const WikiPageSchema = coda.makeObjectSchema({
  properties: {
    id: { type: coda.ValueType.Number },
    title: { type: coda.ValueType.String },
    projectId: { type: coda.ValueType.Number },
    parentId: { type: coda.ValueType.Number },
    createdAt: { type: coda.ValueType.String },
    updatedAt: { type: coda.ValueType.String },
  },
  idProperty: 'id',
  displayProperty: 'title',
});

export const AttachmentSchema = coda.makeObjectSchema({
  properties: {
    id: { type: coda.ValueType.Number },
    fileName: { type: coda.ValueType.String },
    fileSize: { type: coda.ValueType.Number },
    description: { type: coda.ValueType.String },
    contentType: { type: coda.ValueType.String },
    containerId: { type: coda.ValueType.Number },
    containerType: { type: coda.ValueType.String },
    createdAt: { type: coda.ValueType.String },
    updatedAt: { type: coda.ValueType.String },
  },
  idProperty: 'id',
  displayProperty: 'fileName',
});

export const MembershipSchema = coda.makeObjectSchema({
  properties: {
    id: { type: coda.ValueType.Number },
    projectId: { type: coda.ValueType.Number },
    userId: { type: coda.ValueType.Number },
    userName: { type: coda.ValueType.String },
    roleIds: { type: coda.ValueType.String },
    createdAt: { type: coda.ValueType.String },
    updatedAt: { type: coda.ValueType.String },
  },
  idProperty: 'id',
  displayProperty: 'userName',
});

export const CategorySchema = coda.makeObjectSchema({
  properties: {
    id: { type: coda.ValueType.Number },
    name: { type: coda.ValueType.String },
    projectId: { type: coda.ValueType.Number },
    assigneeId: { type: coda.ValueType.Number },
    default: { type: coda.ValueType.Boolean },
  },
  idProperty: 'id',
  displayProperty: 'name',
});

// ============================================================================
// INTERFACES
// ============================================================================

export interface Version {
  id: number;
  name?: string;
  description?: string;
  projectId?: number;
  status?: string;
  sharing?: string;
  startDate?: string;
  endDate?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface Query {
  id: number;
  name?: string;
  filters?: string;
  isPublic?: boolean;
  projectId?: number;
  userId?: number;
}

export interface News {
  id: number;
  title?: string;
  summary?: string;
  description?: string;
  projectId?: number;
  projectName?: string;
  authorId?: number;
  authorName?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface Document {
  id: number;
  title?: string;
  description?: string;
  projectId?: number;
  projectName?: string;
  category?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface WikiPage {
  id: number;
  title?: string;
  projectId?: number;
  parentId?: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface Attachment {
  id: number;
  fileName?: string;
  fileSize?: number;
  description?: string;
  contentType?: string;
  containerId?: number;
  containerType?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface Membership {
  id: number;
  projectId?: number;
  userId?: number;
  userName?: string;
  roleIds?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface Category {
  id: number;
  name?: string;
  projectId?: number;
  assigneeId?: number;
  default?: boolean;
}

export interface Activity {
  id: number;
  name?: string;
  parentId?: number;
  position?: number;
  default?: boolean;
}

export interface Status {
  id: number;
  name?: string;
  color?: string;
  defaultDoneRatio?: number;
  isClosed?: boolean;
  isDefault?: boolean;
  position?: number;
}

export interface Priority {
  id: number;
  name?: string;
  color?: string;
  position?: number;
  isDefault?: boolean;
  isActive?: boolean;
}

export interface Type {
  id: number;
  name?: string;
  color?: string;
  position?: number;
  isDefault?: boolean;
  isMilestone?: boolean;
}

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

export interface User {
  id: number;
  login?: string;
  firstName?: string;
  lastName?: string;
  name?: string;
  email?: string;
  admin?: boolean;
  status?: string;
  language?: string;
  createdAt?: string;
  updatedAt?: string;
}

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
