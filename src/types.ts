// Auto-generated from OpenAPI spec - DO NOT EDIT

import * as coda from '@codahq/packs-sdk';

export interface ActivityModel {
  _type?: string;
  id?: number;
  version?: number;
  comment?: Formattable;
  details?: Formattable[];
  internal?: boolean;
  createdAt?: string;
  updatedAt?: string;
  _embedded?: Record<string, any>;
  _links?: Record<string, any>;
}

export interface ActivityCommentWriteModel {
  comment?: Record<string, any>;
  internal?: boolean;
}

export interface AttachmentModel {
  id?: number;
  fileName: string;
  fileSize?: number;
  description: any;
  status: string;
  contentType: string;
  digest: Record<string, any>;
  createdAt: string;
  _links?: Record<string, any>;
}

export interface BudgetModel {
  _links?: Record<string, any>;
}

export interface CategoryModel {
  id?: number;
  name?: string;
  _links?: Record<string, any>;
}

export interface CollectionLinks {
  self: any;
}

export interface CollectionModel {
  _type: string;
  total: number;
  count: number;
  _links: CollectionLinks;
}

export interface ConfigurationModel {
  maximumAttachmentFileSize?: number;
  hostName?: string;
  perPageOptions?: number[];
  durationFormat?: string;
  activeFeatureFlags?: string[];
}

export interface CustomActionModel {
  _type?: string;
  name?: string;
  description?: string;
  _links?: Record<string, any>;
}

export interface CustomOptionModel {
  id?: number;
  value?: string;
  _links?: Record<string, any>;
}

export interface DayModel {
  _type: string;
  date: string;
  name: string;
  working: boolean;
  _links?: Record<string, any>;
}

export interface DocumentModel {
  id?: number;
  title?: string;
  description?: any;
  createdAt?: string;
  _links?: Record<string, any>;
}

export interface EmojiReactionModel {
  _type?: string;
  id?: string;
  reaction?: string;
  emoji?: string;
  reactionsCount?: number;
  firstReactionAt?: string;
  _links?: Record<string, any>;
}

export interface EmojiReactions_Model {
  _type?: string;
  total?: number;
  count?: number;
  _embedded?: Record<string, any>;
  _links?: Record<string, any>;
}

export interface ErrorResponse {
  _embedded?: Record<string, any>;
  _type: string;
  errorIdentifier: string;
  message: string;
}

export interface FileLinkCollectionWriteModel {
  _embedded: Record<string, any>;
}

export interface FileLinkOriginDataModel {
  id: string;
  name: string;
  mimeType?: string;
  size?: number;
  createdAt?: string;
  lastModifiedAt?: string;
  createdByName?: string;
  lastModifiedByName?: string;
}

export interface FileLinkReadModel {
  id?: number;
  _type?: string;
  createdAt?: string;
  updatedAt?: string;
  originData?: FileLinkOriginDataModel;
  _embedded?: Record<string, any>;
  _links?: Record<string, any>;
}

export interface FileLinkWriteModel {
  originData: FileLinkOriginDataModel;
  _links: any;
}

export interface FileUploadForm {
  metadata?: Record<string, any>;
  file?: string;
}

export interface Formattable {
  format: string;
  raw?: string;
  html?: string;
}

export interface GridReadModel {
  _type: string;
  id: number;
  rowCount: number;
  columnCount: number;
  widgets: GridWidgetModel[];
  createdAt?: string;
  updatedAt?: string;
  _links: Record<string, any>;
}

export interface GridWidgetModel {
  _type: string;
  id: any;
  identifier: string;
  startRow: number;
  endRow: number;
  startColumn: number;
  endColumn: number;
  options?: Record<string, any>;
}

export interface GridWriteModel {
  rowCount?: number;
  columnCount?: number;
  widgets?: GridWidgetModel[];
  _links?: Record<string, any>;
}

export interface GroupWriteModel {
  name?: string;
  _links?: Record<string, any>;
}

export interface HelpTextModel {
  _type: string;
  id: number;
  attribute: string;
  scope: string;
  helpText: Formattable;
  _links: Record<string, any>;
}

export interface HierarchyItemReadModel {
  _type: string;
  id: number;
  label: any;
  short: any;
  weight: any;
  formattedWeight: any;
  depth: number;
  _links: Record<string, any>;
}

export interface Link {
  href: any;
  title?: string;
  templated?: boolean;
  method?: string;
  payload?: Record<string, any>;
  identifier?: string;
  type?: string;
}

export interface MeetingModel {
  id?: number;
  title: string;
  _links?: Record<string, any>;
}

export interface MembershipFormModel {
  _type: string;
  _embedded: Record<string, any>;
  _links: Record<string, any>;
}

export interface MembershipReadModel {
  _type: string;
  id: number;
  createdAt: string;
  updatedAt: string;
  _embedded?: Record<string, any>;
  _links: Record<string, any>;
}

export interface MembershipWriteModel {
  _links: Record<string, any>;
  _meta?: Record<string, any>;
}

export interface NewsCreateModel {
  title?: string;
  summary?: string;
  description?: any;
  _links?: Record<string, any>;
}

export interface NewsModel {
  id?: number;
  title?: string;
  summary?: string;
  description?: any;
  createdAt?: string;
  _links?: Record<string, any>;
}

export interface NonWorkingDayModel {
  _type: string;
  date: string;
  name: string;
  _links?: Record<string, any>;
}

export interface NotificationModel {
  _type?: string;
  id?: number;
  reason?: string;
  readIAN?: boolean;
  details?: any[];
  createdAt?: string;
  updatedAt?: string;
  _embedded?: Record<string, any>;
  _links?: Record<string, any>;
}

export interface OAuthApplicationReadModel {
  id: number;
  _type: string;
  name: string;
  clientId: string;
  clientSecret?: string;
  confidential: boolean;
  createdAt?: string;
  updatedAt?: string;
  scopes?: string[];
  _links: Record<string, any>;
}

export interface OAuthClientCredentialsReadModel {
  id: number;
  _type: string;
  clientId: string;
  confidential: boolean;
  createdAt?: string;
  updatedAt?: string;
  _links: Record<string, any>;
}

export interface OAuthClientCredentialsWriteModel {
  clientId: string;
  clientSecret: string;
}

export interface PlaceholderUserCreateModel {
  name?: string;
}

export interface PortfolioModel {
  _type?: string;
  id?: number;
  identifier?: string;
  name?: string;
  active?: boolean;
  favorited?: boolean;
  statusExplanation?: any;
  public?: boolean;
  description?: Formattable;
  createdAt?: string;
  updatedAt?: string;
  _links?: Record<string, any>;
}

export interface PostModel {
  id?: number;
  subject: string;
  _links?: Record<string, any>;
}

export interface PrincipalModel {
  _type: string;
  id: number;
  name: string;
  createdAt?: string;
  updatedAt?: string;
  _links: Record<string, any>;
}

export interface PriorityModel {
  id?: number;
  name?: string;
  position?: number;
  isDefault?: boolean;
  isActive?: boolean;
  _links?: Record<string, any>;
}

export interface ProgramModel {
  _type?: string;
  id?: number;
  identifier?: string;
  name?: string;
  active?: boolean;
  favorited?: boolean;
  statusExplanation?: any;
  public?: boolean;
  description?: Formattable;
  createdAt?: string;
  updatedAt?: string;
  _links?: Record<string, any>;
}

export interface ProjectModel {
  _type?: string;
  id?: number;
  identifier?: string;
  name?: string;
  active?: boolean;
  favorited?: boolean;
  statusExplanation?: any;
  public?: boolean;
  description?: Formattable;
  createdAt?: string;
  updatedAt?: string;
  _links?: Record<string, any>;
}

export interface ProjectPhaseModel {
  _type: string;
  id: number;
  name: string;
  active: boolean;
  createdAt: string;
  updatedAt: string;
  _links?: Record<string, any>;
}

export interface ProjectPhaseDefinitionModel {
  _type: string;
  id: number;
  name: string;
  startGate: boolean;
  startGateName: any;
  finishGate: boolean;
  finishGateName: any;
  createdAt: string;
  updatedAt: string;
  _links?: Record<string, any>;
}

export interface ProjectStorageModel {
  _type: string;
  id: number;
  projectFolderMode: string;
  createdAt: string;
  updatedAt: string;
  _links?: Record<string, any>;
}

export interface QueryModel {
  id?: number;
  name?: string;
  filters?: Query_Filter_Instance_Model[];
  sums?: boolean;
  timelineVisible?: boolean;
  timelineLabels?: string[];
  timelineZoomLevel?: string;
  timestamps?: any[];
  highlightingMode?: string;
  showHierarchies?: boolean;
  hidden?: boolean;
  public?: boolean;
  starred?: boolean;
  createdAt: string;
  updatedAt: string;
  _links?: Record<string, any>;
}

export const ActivityModelSchema = coda.makeObjectSchema({
  properties: {
    _type: { type: coda.ValueType.String },
    id: { type: coda.ValueType.Number },
    version: { type: coda.ValueType.Number },
    comment: { type: coda.ValueType.Object },
    details: { type: coda.ValueType.Array },
    internal: { type: coda.ValueType.Boolean },
    createdAt: { type: coda.ValueType.String },
    updatedAt: { type: coda.ValueType.String },
    _embedded: { type: coda.ValueType.Object },
    _links: { type: coda.ValueType.Object }
  },
  idProperty: 'id',
  displayProperty: 'id',
});

export const ActivityCommentWriteModelSchema = coda.makeObjectSchema({
  properties: {
    comment: { type: coda.ValueType.Object },
    internal: { type: coda.ValueType.Boolean }
  },
  idProperty: 'comment',
  displayProperty: 'comment',
});

export const AttachmentModelSchema = coda.makeObjectSchema({
  properties: {
    id: { type: coda.ValueType.Number },
    fileName: { type: coda.ValueType.String },
    fileSize: { type: coda.ValueType.Number },
    description: { type: coda.ValueType.String },
    status: { type: coda.ValueType.String },
    contentType: { type: coda.ValueType.String },
    digest: { type: coda.ValueType.Object },
    createdAt: { type: coda.ValueType.String },
    _links: { type: coda.ValueType.Object }
  },
  idProperty: 'id',
  displayProperty: 'id',
});

export const BudgetModelSchema = coda.makeObjectSchema({
  properties: {
    _links: { type: coda.ValueType.Object }
  },
  idProperty: '_links',
  displayProperty: '_links',
});

export const CategoryModelSchema = coda.makeObjectSchema({
  properties: {
    id: { type: coda.ValueType.Number },
    name: { type: coda.ValueType.String },
    _links: { type: coda.ValueType.Object }
  },
  idProperty: 'id',
  displayProperty: 'name',
});

export const CollectionLinksSchema = coda.makeObjectSchema({
  properties: {
    self: { type: coda.ValueType.String }
  },
  idProperty: 'self',
  displayProperty: 'self',
});

export const CollectionModelSchema = coda.makeObjectSchema({
  properties: {
    _type: { type: coda.ValueType.String },
    total: { type: coda.ValueType.Number },
    count: { type: coda.ValueType.Number },
    _links: { type: coda.ValueType.Object }
  },
  idProperty: '_type',
  displayProperty: '_type',
});

export const ConfigurationModelSchema = coda.makeObjectSchema({
  properties: {
    maximumAttachmentFileSize: { type: coda.ValueType.Number },
    hostName: { type: coda.ValueType.String },
    perPageOptions: { type: coda.ValueType.Array },
    durationFormat: { type: coda.ValueType.String },
    activeFeatureFlags: { type: coda.ValueType.Array }
  },
  idProperty: 'maximumAttachmentFileSize',
  displayProperty: 'maximumAttachmentFileSize',
});

export const CustomActionModelSchema = coda.makeObjectSchema({
  properties: {
    _type: { type: coda.ValueType.String },
    name: { type: coda.ValueType.String },
    description: { type: coda.ValueType.String },
    _links: { type: coda.ValueType.Object }
  },
  idProperty: '_type',
  displayProperty: 'name',
});

export const CustomOptionModelSchema = coda.makeObjectSchema({
  properties: {
    id: { type: coda.ValueType.Number },
    value: { type: coda.ValueType.String },
    _links: { type: coda.ValueType.Object }
  },
  idProperty: 'id',
  displayProperty: 'id',
});

export const DayModelSchema = coda.makeObjectSchema({
  properties: {
    _type: { type: coda.ValueType.String },
    date: { type: coda.ValueType.String },
    name: { type: coda.ValueType.String },
    working: { type: coda.ValueType.Boolean },
    _links: { type: coda.ValueType.Object }
  },
  idProperty: '_type',
  displayProperty: 'name',
});

export const DocumentModelSchema = coda.makeObjectSchema({
  properties: {
    id: { type: coda.ValueType.Number },
    title: { type: coda.ValueType.String },
    description: { type: coda.ValueType.String },
    createdAt: { type: coda.ValueType.String },
    _links: { type: coda.ValueType.Object }
  },
  idProperty: 'id',
  displayProperty: 'title',
});

export const EmojiReactionModelSchema = coda.makeObjectSchema({
  properties: {
    _type: { type: coda.ValueType.String },
    id: { type: coda.ValueType.String },
    reaction: { type: coda.ValueType.String },
    emoji: { type: coda.ValueType.String },
    reactionsCount: { type: coda.ValueType.Number },
    firstReactionAt: { type: coda.ValueType.String },
    _links: { type: coda.ValueType.Object }
  },
  idProperty: 'id',
  displayProperty: 'id',
});

export const EmojiReactions_ModelSchema = coda.makeObjectSchema({
  properties: {
    _type: { type: coda.ValueType.String },
    total: { type: coda.ValueType.Number },
    count: { type: coda.ValueType.Number },
    _embedded: { type: coda.ValueType.Object },
    _links: { type: coda.ValueType.Object }
  },
  idProperty: '_type',
  displayProperty: '_type',
});

export const ErrorResponseSchema = coda.makeObjectSchema({
  properties: {
    _embedded: { type: coda.ValueType.Object },
    _type: { type: coda.ValueType.String },
    errorIdentifier: { type: coda.ValueType.String },
    message: { type: coda.ValueType.String }
  },
  idProperty: '_embedded',
  displayProperty: '_embedded',
});

export const FileLinkCollectionWriteModelSchema = coda.makeObjectSchema({
  properties: {
    _embedded: { type: coda.ValueType.Object }
  },
  idProperty: '_embedded',
  displayProperty: '_embedded',
});

export const FileLinkOriginDataModelSchema = coda.makeObjectSchema({
  properties: {
    id: { type: coda.ValueType.String },
    name: { type: coda.ValueType.String },
    mimeType: { type: coda.ValueType.String },
    size: { type: coda.ValueType.Number },
    createdAt: { type: coda.ValueType.String },
    lastModifiedAt: { type: coda.ValueType.String },
    createdByName: { type: coda.ValueType.String },
    lastModifiedByName: { type: coda.ValueType.String }
  },
  idProperty: 'id',
  displayProperty: 'name',
});

export const FileLinkReadModelSchema = coda.makeObjectSchema({
  properties: {
    id: { type: coda.ValueType.Number },
    _type: { type: coda.ValueType.String },
    createdAt: { type: coda.ValueType.String },
    updatedAt: { type: coda.ValueType.String },
    originData: { type: coda.ValueType.Object },
    _embedded: { type: coda.ValueType.Object },
    _links: { type: coda.ValueType.Object }
  },
  idProperty: 'id',
  displayProperty: 'id',
});

export const FileLinkWriteModelSchema = coda.makeObjectSchema({
  properties: {
    originData: { type: coda.ValueType.Object },
    _links: { type: coda.ValueType.String }
  },
  idProperty: 'originData',
  displayProperty: 'originData',
});

export const FileUploadFormSchema = coda.makeObjectSchema({
  properties: {
    metadata: { type: coda.ValueType.Object },
    file: { type: coda.ValueType.String }
  },
  idProperty: 'metadata',
  displayProperty: 'metadata',
});

export const FormattableSchema = coda.makeObjectSchema({
  properties: {
    format: { type: coda.ValueType.String },
    raw: { type: coda.ValueType.String },
    html: { type: coda.ValueType.String }
  },
  idProperty: 'format',
  displayProperty: 'format',
});

export const GridReadModelSchema = coda.makeObjectSchema({
  properties: {
    _type: { type: coda.ValueType.String },
    id: { type: coda.ValueType.Number },
    rowCount: { type: coda.ValueType.Number },
    columnCount: { type: coda.ValueType.Number },
    widgets: { type: coda.ValueType.Array },
    createdAt: { type: coda.ValueType.String },
    updatedAt: { type: coda.ValueType.String },
    _links: { type: coda.ValueType.Object }
  },
  idProperty: 'id',
  displayProperty: 'id',
});

export const GridWidgetModelSchema = coda.makeObjectSchema({
  properties: {
    _type: { type: coda.ValueType.String },
    id: { type: coda.ValueType.String },
    identifier: { type: coda.ValueType.String },
    startRow: { type: coda.ValueType.Number },
    endRow: { type: coda.ValueType.Number },
    startColumn: { type: coda.ValueType.Number },
    endColumn: { type: coda.ValueType.Number },
    options: { type: coda.ValueType.Object }
  },
  idProperty: 'id',
  displayProperty: 'id',
});

export const GridWriteModelSchema = coda.makeObjectSchema({
  properties: {
    rowCount: { type: coda.ValueType.Number },
    columnCount: { type: coda.ValueType.Number },
    widgets: { type: coda.ValueType.Array },
    _links: { type: coda.ValueType.Object }
  },
  idProperty: 'rowCount',
  displayProperty: 'rowCount',
});

export const GroupWriteModelSchema = coda.makeObjectSchema({
  properties: {
    name: { type: coda.ValueType.String },
    _links: { type: coda.ValueType.Object }
  },
  idProperty: 'name',
  displayProperty: 'name',
});

export const HelpTextModelSchema = coda.makeObjectSchema({
  properties: {
    _type: { type: coda.ValueType.String },
    id: { type: coda.ValueType.Number },
    attribute: { type: coda.ValueType.String },
    scope: { type: coda.ValueType.String },
    helpText: { type: coda.ValueType.Object },
    _links: { type: coda.ValueType.Object }
  },
  idProperty: 'id',
  displayProperty: 'id',
});

// TODO: Add 40 more schemas