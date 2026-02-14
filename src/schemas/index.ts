import * as coda from "@codahq/packs-sdk";

// Core entity types for OpenProject
export interface Project {
  id: number;
  name: string;
  identifier: string;
  description?: string;
  status?: string;
  public?: boolean;
  parent?: {
    id: number;
    name: string;
    href: string;
  };
  createdAt?: string;
  updatedAt?: string;
}

export interface WorkPackage {
  id: number;
  subject: string;
  description?: string;
  type?: string;
  status?: string;
  priority?: string;
  percentageDone?: number;
  startDate?: string;
  dueDate?: string;
  estimatedTime?: string;
  spentTime?: string;
  project?: {
    id: number;
    name: string;
    href: string;
  };
  author?: {
    id: number;
    name: string;
    href: string;
  };
  assignee?: {
    id: number;
    name: string;
    href: string;
  };
  responsible?: {
    id: number;
    name: string;
    href: string;
  };
  createdAt?: string;
  updatedAt?: string;
}

export interface User {
  id: number;
  login?: string;
  firstName: string;
  lastName: string;
  name: string;
  email?: string;
  status?: string;
  admin?: boolean;
  avatar?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface TimeEntry {
  id: number;
  comment?: string;
  spentOn: string;
  hours: number;
  user?: {
    id: number;
    name: string;
    href: string;
  };
  workPackage?: {
    id: number;
    subject: string;
    href: string;
  };
  project?: {
    id: number;
    name: string;
    href: string;
  };
  activity?: {
    id: number;
    name: string;
  };
  createdAt?: string;
  updatedAt?: string;
}

export interface Version {
  id: number;
  name: string;
  description?: string;
  status?: string;
  sharing?: string;
  startDate?: string;
  endDate?: string;
  project?: {
    id: number;
    name: string;
    href: string;
  };
}

export interface Status {
  id: number;
  name: string;
  color?: string;
  position?: number;
  defaultDoneRatio?: number;
  isClosed?: boolean;
  isDefault?: boolean;
}

export interface Priority {
  id: number;
  name: string;
  position?: number;
  isDefault?: boolean;
  isActive?: boolean;
}

export interface Query {
  id: number;
  name: string;
  filters?: any[];
  columns?: string[];
  sortCriteria?: any[];
  public?: boolean;
  starred?: boolean;
}

// HAL Collection wrapper
export interface HalCollection<T> {
  _type: string;
  total: number;
  count: number;
  pageSize?: number;
  offset?: number;
  _embedded: {
    elements: T[];
  };
  _links: {
    self: { href: string };
    next?: { href: string };
    previous?: { href: string };
  };
}

// Generic HAL resource with links
export interface HalResource {
  _type: string;
  _links: Record<string, any>;
  _embedded?: Record<string, any>;
  id: number;
}
