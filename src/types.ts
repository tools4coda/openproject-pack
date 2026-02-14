// Auto-generated from OpenAPI spec
// Do not edit manually

import * as coda from '@codahq/packs-sdk';

export interface ActivityCommentWriteModel {
  comment?: Record<string, any>;
  /** Determines whether this comment is internal. This is only available to users
wit */
  internal?: boolean;
}

export interface ActivityModel {
  _type?: string;
  /** Activity id */
  id?: number;
  /** Activity version */
  version?: number;
  comment?: Formattable;
  details?: Formattable[];
  /** Whether this activity is internal (only visible to users with view_internal_comm */
  internal?: boolean;
  /** Time of creation */
  createdAt?: string;
  /** Time of update */
  updatedAt?: string;
  _embedded?: Record<string, any>;
  _links?: Record<string, any>;
}

export interface AttachmentModel {
  /** Attachment's id */
  id?: number;
  /** The name of the uploaded file */
  fileName: string;
  /** The size of the uploaded file in Bytes */
  fileSize?: number;
  description: any;
  status: string;
  /** The files MIME-Type as determined by the server */
  contentType: string;
  /** A checksum for the files content */
  digest: Record<string, any>;
  /** Time of creation */
  createdAt: string;
  _links?: Record<string, any>;
}

export interface Attachments_Model {
}

export interface Available_AssigneesModel {
}

export interface Available_WatchersModel {
}

export interface Available_projects_for_queryModel {
}

export interface Available_projects_for_time_entriesModel {
}

export interface Available_projects_for_versionsModel {
}

export interface Available_projects_for_work_packageModel {
}

export interface Available_relation_candidatesModel {
}

export interface BudgetModel {
  _links?: Record<string, any>;
}

export interface Budgets_by_ProjectModel {
}

export interface Categories_by_WorkspaceModel {
}

export interface CategoryModel {
  /** Category id */
  id?: number;
  /** Category name */
  name?: string;
  _links?: Record<string, any>;
}

export interface CollectionLinks {
  self: any;
}

export interface CollectionModel {
  _type: string;
  /** The total amount of elements available in the collection. */
  total: number;
  /** Actual amount of elements in this response. */
  count: number;
  _links: CollectionLinks;
}

export interface ConfigurationModel {
  /** The maximum allowed size of an attachment in Bytes */
  maximumAttachmentFileSize?: number;
  /** The host name configured for the system */
  hostName?: string;
  /** Page size steps to be offered in paginated list UI */
  perPageOptions?: number[];
  /** The format used to display Work, Remaining Work, and Spent time durations */
  durationFormat?: string;
  /** The list of all feature flags that are active */
  activeFeatureFlags?: string[];
}

export interface CustomActionModel {
  _type?: string;
  /** The name of the custom action */
  name?: string;
  /** The description for the custom action */
  description?: string;
  _links?: Record<string, any>;
}

export interface CustomFieldLinkedProperties {
}

export interface CustomFieldProperties {
}

export interface CustomOptionModel {
  /** The identifier */
  id?: number;
  /** The value defined for this custom option */
  value?: string;
  _links?: Record<string, any>;
}

export interface DayCollectionModel {
}

export interface DayModel {
  _type: string;
  /** Date of the day. */
  date: string;
  /** Descriptive name for the day. */
  name: string;
  /** `true` for a working day, `false` otherwise. */
  working: boolean;
  _links?: Record<string, any>;
}

export interface Default_QueryModel {
}

export interface Default_Query_for_WorkspaceModel {
}

export interface DocumentModel {
  /** Document's id */
  id?: number;
  /** The title chosen for the document */
  title?: string;
  description?: any;
  /** The time the document was created at */
  createdAt?: string;
  _links?: Record<string, any>;
}

export interface DocumentsModel {
}

export interface EmojiReactionModel {
  _type?: string;
  /** Emoji reaction id (format: reactable_id-reaction) */
  id?: string;
  /** The reaction identifier */
  reaction?: string;
  /** The emoji character */
  emoji?: string;
  /** Number of users who reacted with this emoji */
  reactionsCount?: number;
  /** Time of the first reaction */
  firstReactionAt?: string;
  _links?: Record<string, any>;
}

export interface EmojiReactions_Model {
  _type?: string;
  /** Total number of emoji reactions */
  total?: number;
  /** Number of emoji reactions in this response */
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

export interface Example_FormModel {
}

export interface Example_SchemaModel {
}

export interface FileLinkCollectionReadModel {
}

export interface FileLinkCollectionWriteModel {
  _embedded: Record<string, any>;
}

export interface FileLinkOriginDataModel {
  /** Linked file's id on the origin */
  id: string;
  /** Linked file's name on the origin */
  name: string;
  /** MIME type of the linked file.

To link a folder entity, the custom MIME type `ap */
  mimeType?: string;
  /** file size on origin in bytes */
  size?: number;
  /** Timestamp of the creation datetime of the file on the origin */
  createdAt?: string;
  /** Timestamp of the datetime of the last modification of the file on the origin */
  lastModifiedAt?: string;
  /** Display name of the author that created the file on the origin */
  createdByName?: string;
  /** Display name of the author that modified the file on the origin last */
  lastModifiedByName?: string;
}

export interface FileLinkReadModel {
  /** File link id */
  id?: number;
  _type?: string;
  /** Time of creation */
  createdAt?: string;
  /** Time of the most recent change to the file link */
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
  /** Indicates the formatting language of the raw text */
  format: string;
  /** The raw text, as entered by the user */
  raw?: string;
  /** The text converted to HTML according to the format */
  html?: string;
}

export interface GridCollectionModel {
}

export interface GridReadModel {
  _type: string;
  /** Grid's id */
  id: number;
  /** The number of rows the grid has */
  rowCount: number;
  /** The number of columns the grid has */
  columnCount: number;
  /** The set of `GridWidget`s selected for the grid.

# Conditions

- The widgets mus */
  widgets: GridWidgetModel[];
  /** The time the grid was created. */
  createdAt?: string;
  /** The time the grid was last updated. */
  updatedAt?: string;
  _links: Record<string, any>;
}

export interface GridWidgetModel {
  _type: string;
  /** The grid widget's unique identifier. Can be null, if a new widget is created wit */
  id: any;
  /** An alternative, human legible, and unique identifier. */
  identifier: string;
  /** The index of the starting row of the widget. The row is inclusive. */
  startRow: number;
  /** The index of the ending row of the widget. The row is exclusive. */
  endRow: number;
  /** The index of the starting column of the widget. The column is inclusive. */
  startColumn: number;
  /** The index of the ending column of the widget. The column is exclusive. */
  endColumn: number;
  options?: Record<string, any>;
}

export interface GridWriteModel {
  /** The number of rows the grid has */
  rowCount?: number;
  /** The number of columns the grid has */
  columnCount?: number;
  /** The set of `GridWidget`s selected for the grid.

# Conditions

- The widgets mus */
  widgets?: GridWidgetModel[];
  _links?: Record<string, any>;
}

export interface GroupCollectionModel {
}

export interface GroupModel {
}

export interface GroupWriteModel {
  /** The new group name. */
  name?: string;
  _links?: Record<string, any>;
}

export interface HelpTextCollectionModel {
}

export interface HelpTextModel {
  _type: string;
  id: number;
  /** The attribute the help text is assigned to. */
  attribute: string;
  scope: string;
  helpText: Formattable;
  _links: Record<string, any>;
}

export interface HierarchyItemCollectionModel {
}

export interface HierarchyItemReadModel {
  _type: string;
  /** Hierarchy item identifier */
  id: number;
  /** The label of the hierarchy item */
  label: any;
  /** The short name of the hierarchy item. If this attribute is set, the `weight` and */
  short: any;
  /** The accurate weight of the hierarchy item. As a decimal precision number it is w */
  weight: any;
  /** The formatted weight of the hierarchy item. The standard formatting of the OpenP */
  formattedWeight: any;
  /** The hierarchy depth. The root item has a depth of 0. */
  depth: number;
  _links: Record<string, any>;
}

export interface Link {
  /** URL to the referenced resource (might be relative) */
  href: any;
  /** Representative label for the resource */
  title?: string;
  /** If true the href contains parts that need to be replaced by the client */
  templated?: boolean;
  /** The HTTP verb to use when requesting the resource */
  method?: string;
  /** The payload to send in the request to achieve the desired result */
  payload?: Record<string, any>;
  /** An optional unique identifier to the link object */
  identifier?: string;
  /** The MIME-Type of the returned resource. */
  type?: string;
}

export interface List_actionsModel {
}

export interface List_available_parent_project_candidatesModel {
}

export interface List_capabilitiesModel {
}

export interface List_of_NewsModel {
}

export interface List_workspaces_by_versionModel {
}

export interface MarkdownModel {
}

export interface MeetingModel {
  /** Identifier of this meeting */
  id?: number;
  /** The meeting's title */
  title: string;
  _links?: Record<string, any>;
}

export interface MembershipCollectionModel {
}

export interface MembershipFormModel {
  _type: string;
  _embedded: Record<string, any>;
  _links: Record<string, any>;
}

export interface MembershipReadModel {
  _type: string;
  /** The membership's id */
  id: number;
  /** The time the membership was created. */
  createdAt: string;
  /** The time the membership was last updated. */
  updatedAt: string;
  _embedded?: Record<string, any>;
  _links: Record<string, any>;
}

export interface MembershipSchemaModel {
}

export interface MembershipWriteModel {
  _links: Record<string, any>;
  _meta?: Record<string, any>;
}

export interface NewsCreateModel {
  /** The headline of the news */
  title?: string;
  /** A short summary */
  summary?: string;
  description?: any;
  _links?: Record<string, any>;
}

export interface NewsModel {
  /** News' id */
  id?: number;
  /** The headline of the news */
  title?: string;
  /** A short summary */
  summary?: string;
  description?: any;
  /** The time the news was created at */
  createdAt?: string;
  _links?: Record<string, any>;
}

export interface NonWorkingDayCollectionModel {
}

export interface NonWorkingDayModel {
  _type: string;
  /** Date of the non-working day. */
  date: string;
  /** Descriptive name for the non-working day. */
  name: string;
  _links?: Record<string, any>;
}

export interface NotificationCollectionModel {
}

export interface NotificationModel {
  _type?: string;
  /** Notification id */
  id?: number;
  /** The reason for the notification */
  reason?: string;
  /** Whether the notification is marked as read */
  readIAN?: boolean;
  /** A list of objects including detailed information about the notification. */
  details?: any[];
  /** The time the notification was created at */
  createdAt?: string;
  /** The time the notification was last updated */
  updatedAt?: string;
  _embedded?: Record<string, any>;
  _links?: Record<string, any>;
}

export interface OAuthApplicationReadModel {
  id: number;
  _type: string;
  /** The name of the OAuth 2 application */
  name: string;
  /** OAuth 2 client id */
  clientId: string;
  /** OAuth 2 client secret. This is only returned when creating a new OAuth applicati */
  clientSecret?: string;
  /** true, if OAuth 2 credentials are confidential, false, if no secret is stored */
  confidential: boolean;
  /** The time the OAuth 2 Application was created at */
  createdAt?: string;
  /** The time the OAuth 2 Application was last updated */
  updatedAt?: string;
  /** An array of the scopes of the OAuth 2 Application */
  scopes?: string[];
  _links: Record<string, any>;
}

export interface OAuthClientCredentialsReadModel {
  id: number;
  _type: string;
  /** OAuth 2 client id */
  clientId: string;
  /** true, if OAuth 2 credentials are confidential, false, if no secret is stored */
  confidential: boolean;
  /** The time the OAuth client credentials were created at */
  createdAt?: string;
  /** The time the OAuth client credentials were last updated */
  updatedAt?: string;
  _links: Record<string, any>;
}

export interface OAuthClientCredentialsWriteModel {
  /** OAuth 2 client id */
  clientId: string;
  /** OAuth 2 client secret */
  clientSecret: string;
}

export interface OffsetPaginatedCollectionLinks {
}

export interface OffsetPaginatedCollectionModel {
}

export interface PaginatedCollectionModel {
}

export interface PlaceholderUserCollectionModel {
}

export interface PlaceholderUserCreateModel {
  /** The new name of the placeholder user to be created. */
  name?: string;
}

export interface PlaceholderUserModel {
}

export interface Plain_TextModel {
}

export interface PortfolioCollectionModel {
}

export interface PortfolioModel {
  _type?: string;
  /** Portfolios' id */
  id?: number;
  identifier?: string;
  name?: string;
  /** Indicates whether the portfolio is currently active or already archived */
  active?: boolean;
  /** Indicates whether the portfolio is favorited by the current user */
  favorited?: boolean;
  statusExplanation?: any;
  /** Indicates whether the portfolio is accessible for everybody */
  public?: boolean;
  description?: Formattable;
  /** Time of creation. Can be writable by admins with the `apiv3_write_readonly_attri */
  createdAt?: string;
  /** Time of the most recent change to the portfolio */
  updatedAt?: string;
  _links?: Record<string, any>;
}

export interface PostModel {
  /** Identifier of this post */
  id?: number;
  /** The post's subject */
  subject: string;
  _links?: Record<string, any>;
}

export interface PrincipalCollectionModel {
}

export interface PrincipalModel {
  _type: string;
  /** The principal's unique identifier. */
  id: number;
  /** The principal's display name, layout depends on instance settings. */
  name: string;
  /** Time of creation */
  createdAt?: string;
  /** Time of the most recent change to the principal */
  updatedAt?: string;
  _links: Record<string, any>;
}

export interface PriorityCollectionModel {
}

export interface PriorityModel {
  /** Priority id */
  id?: number;
  /** Priority name */
  name?: string;
  /** Sort index of the priority */
  position?: number;
  /** Indicates whether this is the default value */
  isDefault?: boolean;
  /** Indicates whether the priority is available */
  isActive?: boolean;
  _links?: Record<string, any>;
}

export interface ProgramCollectionModel {
}

export interface ProgramModel {
  _type?: string;
  /** Programs' id */
  id?: number;
  identifier?: string;
  name?: string;
  /** Indicates whether the program is currently active or already archived */
  active?: boolean;
  /** Indicates whether the program is favorited by the current user */
  favorited?: boolean;
  statusExplanation?: any;
  /** Indicates whether the program is accessible for everybody */
  public?: boolean;
  description?: Formattable;
  /** Time of creation. Can be writable by admins with the `apiv3_write_readonly_attri */
  createdAt?: string;
  /** Time of the most recent change to the program */
  updatedAt?: string;
  _links?: Record<string, any>;
}

export interface ProjectCollectionModel {
}

export interface ProjectConfigurationModel {
}

export interface ProjectModel {
  _type?: string;
  /** Projects' id */
  id?: number;
  identifier?: string;
  name?: string;
  /** Indicates whether the project is currently active or already archived */
  active?: boolean;
  /** Indicates whether the project is favorited by the current user */
  favorited?: boolean;
  statusExplanation?: any;
  /** Indicates whether the project is accessible for everybody */
  public?: boolean;
  description?: Formattable;
  /** Time of creation. Can be writable by admins with the `apiv3_write_readonly_attri */
  createdAt?: string;
  /** Time of the most recent change to the project */
  updatedAt?: string;
  _links?: Record<string, any>;
}

export interface ProjectPhaseDefinitionCollectionModel {
}

export interface ProjectPhaseDefinitionModel {
  _type: string;
  /** The project phase definition's id */
  id: number;
  name: string;
  startGate: boolean;
  startGateName: any;
  finishGate: boolean;
  finishGateName: any;
  /** Time of creation */
  createdAt: string;
  /** Time of the most recent change to the project phase definition */
  updatedAt: string;
  _links?: Record<string, any>;
}

export interface ProjectPhaseModel {
  _type: string;
  /** The project phase's id */
  id: number;
  name: string;
  active: boolean;
  /** Time of creation */
  createdAt: string;
  /** Time of the most recent change to the project phase */
  updatedAt: string;
  _links?: Record<string, any>;
}

export interface ProjectStorageCollectionModel {
}

export interface ProjectStorageModel {
  _type: string;
  /** The project storage's id */
  id: number;
  projectFolderMode: string;
  /** Time of creation */
  createdAt: string;
  /** Time of the most recent change to the project storage */
  updatedAt: string;
  _links?: Record<string, any>;
}

export interface QueriesModel {
}

export interface QueryModel {
  /** Query id */
  id?: number;
  /** Query name */
  name?: string;
  /** A set of QueryFilters which will be applied to the work packages to determine th */
  filters?: Query_Filter_Instance_Model[];
  /** Should sums (of supported properties) be shown? */
  sums?: boolean;
  /** Should the timeline mode be shown? */
  timelineVisible?: boolean;
  /** Which labels are shown in the timeline, empty when default */
  timelineLabels?: string[];
  /** Which zoom level should the timeline be rendered in? */
  timelineZoomLevel?: string;
  /** Timestamps to filter by when showing changed attributes on work packages. */
  timestamps?: any[];
  /** Which highlighting mode should the table have? */
  highlightingMode?: string;
  /** Should the hierarchy mode be enabled? */
  showHierarchies?: boolean;
  /** Should the query be hidden from the query list? */
  hidden?: boolean;
  /** Can users besides the owner see the query? */
  public?: boolean;
  /** Should the query be highlighted to the user? */
  starred?: boolean;
  /** Time of creation */
  createdAt: string;
  /** Time of the most recent change to the query */
  updatedAt: string;
  _links?: Record<string, any>;
}

export interface Query_ColumnModel {
  /** Query column id */
  id: string;
  /** Query column name */
  name: string;
}

export interface Query_Create_Form {
  /** Query name. */
  name?: string;
}

export interface Query_FilterModel {
  /** QueryFilter id */
  id: string;
}

export interface Query_Filter_Instance_Model {
  _links: Record<string, any>;
  _type: string;
  name: string;
}

export interface Query_Filter_Instance_SchemaModel {
  /** Describes the name attribute */
  name: string;
  _links: Record<string, any>;
}

export interface Query_Filter_Instance_SchemasModel {
}

export interface Query_Filter_Instance_Schemas_For_WorkspaceModel {
}

export interface Query_OperatorModel {
  /** Query operator id */
  id: string;
  /** Query operator name */
  name: string;
}

export interface Query_Sort_ByModel {
  /** QuerySortBy id */
  id: string;
  /** QuerySortBy name */
  name: string;
}

export interface Query_Update_Form {
  /** Query name. */
  name?: string;
}

export interface RelationCollectionModel {
}

export interface RelationReadModel {
  _type?: string;
  /** Relation ID */
  id?: number;
  /** The internationalised name of this type of relation */
  name?: string;
  /** The relation type. */
  type?: string;
  /** The type of relation from the perspective of the related work package. */
  reverseType?: string;
  /** A descriptive text for the relation. */
  description?: any;
  /** The lag in days between closing of `from` and start of `to` */
  lag?: any;
  _embedded?: Record<string, any>;
  _links?: Record<string, any>;
}

export interface RelationWriteModel {
  /** The relation type. */
  type: string;
  /** A descriptive text for the relation. */
  description?: any;
  /** The lag in days between closing of `from` and start of `to` */
  lag?: any;
  _links: Record<string, any>;
}

export interface ReminderModel {
  /** Reminder id */
  id?: number;
  /** The note of the reminder */
  note?: string;
  /** The date and time when the reminder is due */
  remindAt?: string;
  _links?: Record<string, any>;
}

export interface RevisionModel {
  /** Revision's id, assigned by OpenProject */
  id?: number;
  /** The raw SCM identifier of the revision (e.g. full SHA hash) */
  identifier: string;
  /** The SCM identifier of the revision, formatted (e.g. shortened unambiguous SHA ha */
  formattedIdentifier: string;
  /** The name of the author that committed this revision. Note that this name is retr */
  authorName: string;
  message: any;
  /** The time this revision was committed to the repository */
  createdAt: string;
  _links?: Record<string, any>;
}

export interface RevisionsModel {
}

export interface RoleModel {
  _type?: string;
  /** Role id */
  id?: number;
  /** Role name */
  name: string;
  _links?: Record<string, any>;
}

export interface RolesModel {
}

export interface RootModel {
  _type: string;
  /** The name of the OpenProject instance */
  instanceName: string;
  /** The OpenProject core version number for the instance

# Conditions

**Permission */
  coreVersion?: string;
  _links: Record<string, any>;
}

export interface SchemaModel {
  _type: string;
  /** A list of dependencies between one property's value and another property */
  _dependencies?: string[];
  _links: Record<string, any>;
}

export interface SchemaPropertyModel {
  /** The resource type for this property. */
  type: string;
  /** The name of the property. */
  name: string;
  /** Indicates, if the property is required for submitting a request of this schema. */
  required: boolean;
  /** Indicates, if the property has a default. */
  hasDefault: boolean;
  /** Indicates, if the property is writable when sending a request of this schema. */
  writable: boolean;
  /** Additional options for the property. */
  object?: Record<string, any>;
  /** Defines the json path where the property is located in the payload. */
  location?: string;
  /** Useful links for this property (e.g. an endpoint to fetch allowed values) */
  _links?: Record<string, any>;
}

export interface Schema_For_Global_QueriesModel {
}

export interface Schema_For_Workspace_QueriesModel {
}

export interface Star_QueryModel {
}

export interface StatusCollectionModel {
}

export interface StatusModel {
  _type?: string;
  /** Status id */
  id?: number;
  /** Status name */
  name?: string;
  /** Indicates, whether work package of this status are considered closed */
  isClosed?: boolean;
  /** The color of the status */
  color?: any;
  /** True, if this status is the default status for new work packages */
  isDefault?: boolean;
  /** Indicates, whether work package of this status are readonly */
  isReadonly?: boolean;
  /** Indicates, whether work package of this status are excluded from totals of `Work */
  excludedFromTotals?: boolean;
  /** The percentageDone being applied when changing to this status */
  defaultDoneRatio?: number;
  /** Sort index of the status */
  position?: number;
  _links?: Record<string, any>;
}

export interface StorageCollectionModel {
}

export interface StorageFileModel {
}

export interface StorageFileUploadLinkModel {
  _type: string;
  _links: Record<string, any>;
}

export interface StorageFileUploadPreparationModel {
  /** The project identifier, from where a user starts uploading a file. */
  projectId: number;
  /** The file name. */
  fileName: string;
  /** The directory to which the file is to be uploaded. For root directories, the val */
  parent: string;
}

export interface StorageFilesModel {
  _type: string;
  /** List of files provided by the selected storage. */
  files: StorageFileModel[];
  parent: any;
  /** List of ancestors of the parent directory. Can be empty, if parent directory was */
  ancestors: StorageFileModel[];
  _links: Record<string, any>;
}

export interface StorageFolderWriteModel {
  /** Name of the folder to be created */
  name: string;
  /** Unique identifier of the parent folder in which the new folder should be created */
  parentId: string;
}

export interface StorageReadModel {
  /** Storage id */
  id: number;
  _type: string;
  /** Storage name */
  name: string;
  /** The audience that the storage expects in tokens for requests to it,
usually the  */
  storageAudience?: string;
  /** The scope that will be requested when requesting a token for the storage through */
  tokenExchangeScope?: string;
  /** The tenant id of a file storage of type OneDrive.

Ignored if the provider type  */
  tenantId?: any;
  /** The drive id of a file storage of type OneDrive.

Ignored if the provider type i */
  driveId?: any;
  /** Whether the storage has the application password to use for the Nextcloud storag */
  hasApplicationPassword?: boolean;
  /** Time of creation */
  createdAt?: string;
  /** Time of the most recent change to the storage */
  updatedAt?: string;
  /** Indication, if the storage is fully configured */
  configured?: boolean;
  _embedded?: Record<string, any>;
  _links: Record<string, any>;
}

export interface StorageWriteModel {
  /** Storage name, if not provided, falls back to a default. */
  name?: string;
  /** The audience that the storage expects in tokens for requests to it,
usually the  */
  storageAudience?: string;
  /** The scope that will be requested when requesting a token for the storage through */
  tokenExchangeScope?: string;
  /** The application password to use for the Nextcloud storage. Ignored if the provid */
  applicationPassword?: any;
  _links?: Record<string, any>;
}

export interface TimeEntryActivityModel {
  _type: string;
  /** Time entry id */
  id: number;
  /** The human readable name chosen for this activity */
  name: string;
  /** The rank the activity has in a list of activities */
  position: number;
  /** Flag to signal whether this activity is the default activity */
  default: boolean;
  _embedded: Record<string, any>;
  _links: Record<string, any>;
}

export interface TimeEntryCollectionModel {
}

export interface TimeEntryModel {
  /** The id of the time entry */
  id?: number;
  comment?: any;
  /** The date the expenditure is booked for */
  spentOn?: string;
  /** The time quantifying the expenditure */
  hours?: string;
  /** Whether the time entry is actively tracking time */
  ongoing?: boolean;
  /** The time the time entry was created */
  createdAt?: string;
  /** The time the time entry was started, or null if the time entry does not have a s */
  startTime?: string;
  /** The time the time entry was ended, or null if the time entry does not have a sta */
  endTime?: string;
  /** The time the time entry was last updated */
  updatedAt?: string;
  _links?: Record<string, any>;
}

export interface TypeModel {
  /** Type id */
  id: number;
  /** Type name */
  name: string;
  /** The color used to represent this type */
  color: any;
  /** Sort index of the type */
  position: number;
  /** Is this type active by default in new projects? */
  isDefault: boolean;
  /** Do work packages of this type represent a milestone? */
  isMilestone: boolean;
  /** Time of creation */
  createdAt: string;
  /** Time of the most recent change to the user */
  updatedAt: string;
  _links?: Record<string, any>;
}

export interface TypesModel {
}

export interface Types_by_WorkspaceModel {
}

export interface Unstar_QueryModel {
}

export interface UserCollectionModel {
}

export interface UserCreateModel {
  admin: boolean;
  email: string;
  login: string;
  /** The users password.

*Conditions:*

Only writable on creation, not on update. */
  password?: string;
  firstName: string;
  lastName: string;
  /** The current activation status of the user.

*Conditions:*

Only writable on crea */
  status?: string;
  language: string;
}

export interface UserModel {
}

export interface UserPreferencesModel {
}

export interface ValuesPropertyModel {
  _type: string;
  /** The key of the key - value pair represented by the Values::Property */
  property: string;
  /** The value of the key - value pair represented by the Values::Property */
  value: string;
  _links: Record<string, any>;
}

export interface VersionCollectionModel {
}

export interface VersionReadModel {
  /** Version id */
  id: number;
  _type: string;
  /** Version name */
  name: string;
  description: Formattable;
  startDate: any;
  endDate: any;
  /** The current status of the version. This could be:

- *open*: if the version is a */
  status: string;
  /** The indicator of how the version is shared between projects. This could be:

- * */
  sharing: string;
  /** Time of creation */
  createdAt: string;
  /** Time of the most recent change to the version */
  updatedAt: string;
  _links?: any;
}

export interface VersionWriteModel {
  /** Version name */
  name?: string;
  description?: Formattable;
  startDate?: any;
  endDate?: any;
  /** The current status of the version. This could be:

- *open*: if the version is a */
  status?: string;
  /** The indicator of how the version is shared between projects. This could be:

- * */
  sharing?: string;
  _links?: any;
}

export interface Version_schemaModel {
}

export interface Versions_by_WorkspaceModel {
}

export interface View_actionModel {
}

export interface View_capabilitiesModel {
}

export interface View_global_contextModel {
}

export interface View_project_statusModel {
}

export interface View_time_entry_schemaModel {
}

export interface View_user_schemaModel {
}

export interface WatchersModel {
}

export interface WeekDayCollectionModel {
}

export interface WeekDayCollectionWriteModel {
  _type: string;
  _embedded: Record<string, any>;
}

export interface WeekDayModel {
  _type: string;
  /** The week day from 1 to 7. 1 is Monday. 7 is Sunday. */
  day: number;
  /** The week day name. */
  name: string;
  /** `true` for a working week day, `false` otherwise. */
  working: boolean;
  _links?: any;
}

export interface WeekDaySelfLinkModel {
  self?: any;
}

export interface WeekDayWriteModel {
  _type: string;
  /** `true` for a working day. `false` for a weekend day. */
  working: boolean;
}

export interface Wiki_PageModel {
  /** Identifier of this wiki page */
  id?: number;
  /** The wiki page's title */
  title: string;
  _links?: Record<string, any>;
}

export interface WorkPackageFormModel {
  _type?: string;
  _embedded?: Record<string, any>;
  _links?: Record<string, any>;
}

export interface WorkPackageModel {
  /** Work package id */
  id?: number;
  /** The version of the item as used for optimistic locking */
  lockVersion?: number;
  /** Work package subject */
  subject: string;
  _type?: string;
  description?: any;
  /** Uses manual scheduling mode when true (default). Uses automatic scheduling
mode  */
  scheduleManually?: boolean;
  /** If true, the work package is in a readonly status so with the exception of the s */
  readonly?: boolean;
  /** Scheduled beginning of a work package */
  startDate?: any;
  /** Scheduled end of a work package */
  dueDate?: any;
  /** Date on which a milestone is achieved */
  date?: any;
  /** Similar to start date but is not set by a client but rather deduced by the work  */
  derivedStartDate?: any;
  /** Similar to due date but is not set by a client but rather deduced by the work pa */
  derivedDueDate?: any;
  /** **(NOT IMPLEMENTED)** The amount of time in hours the work package needs to be c */
  duration?: any;
  /** Time a work package likely needs to be completed excluding its descendants */
  estimatedTime?: any;
  /** Time a work package likely needs to be completed including its descendants */
  derivedEstimatedTime?: any;
  /** **(NOT IMPLEMENTED)** When scheduling, whether or not to ignore the non working  */
  ignoreNonWorkingDays?: boolean;
  /** The time booked for this work package by users working on it

# Conditions

**Pe */
  spentTime?: string;
  /** Amount of total completion for a work package */
  percentageDone?: any;
  /** Amount of total completion for a work package derived from itself and its descen */
  derivedPercentageDone?: any;
  /** Time of creation. Can be writable by admins with the `apiv3_write_readonly_attri */
  createdAt?: string;
  /** Time of the most recent change to the work package. */
  updatedAt?: string;
  _links: Record<string, any>;
}

export interface WorkPackagePatchModel {
}

export interface WorkPackageSchemaModel {
  _type?: string;
  /** TBD */
  _dependencies?: string[];
  /** TBD (WorkPackageFormAttributeGroup) */
  _attributeGroups?: Record<string, any>[];
  lockVersion?: SchemaPropertyModel;
  id?: SchemaPropertyModel;
  subject?: SchemaPropertyModel;
  description?: SchemaPropertyModel;
  duration?: SchemaPropertyModel;
  scheduleManually?: SchemaPropertyModel;
  ignoreNonWorkingDays?: SchemaPropertyModel;
  startDate?: SchemaPropertyModel;
  dueDate?: SchemaPropertyModel;
  derivedStartDate?: SchemaPropertyModel;
  derivedDueDate?: SchemaPropertyModel;
  estimatedTime?: SchemaPropertyModel;
  derivedEstimatedTime?: SchemaPropertyModel;
  remainingTime?: SchemaPropertyModel;
  derivedRemainingTime?: SchemaPropertyModel;
  percentageDone?: SchemaPropertyModel;
  derivedPercentageDone?: SchemaPropertyModel;
  readonly?: SchemaPropertyModel;
  createdAt?: SchemaPropertyModel;
  updatedAt?: SchemaPropertyModel;
  author?: SchemaPropertyModel;
  project?: SchemaPropertyModel;
  projectPhase?: SchemaPropertyModel;
  projectPhaseDefinition?: SchemaPropertyModel;
  parent?: SchemaPropertyModel;
  assignee?: SchemaPropertyModel;
  responsible?: SchemaPropertyModel;
  type?: SchemaPropertyModel;
  status?: SchemaPropertyModel;
  category?: SchemaPropertyModel;
  version?: SchemaPropertyModel;
  priority?: SchemaPropertyModel;
  _links?: Record<string, any>;
}

export interface WorkPackageWriteModel {
  /** Work package subject */
  subject?: string;
  description?: any;
  /** Uses manual scheduling mode when true (default). Uses automatic scheduling
mode  */
  scheduleManually?: boolean;
  /** Scheduled beginning of a work package */
  startDate?: any;
  /** Scheduled end of a work package */
  dueDate?: any;
  /** Time a work package likely needs to be completed excluding its descendants */
  estimatedTime?: any;
  /** The amount of time in hours the work package needs to be completed. This value m */
  duration?: any;
  /** When scheduling, whether or not to ignore the non working days being defined.
A  */
  ignoreNonWorkingDays?: boolean;
  _links?: Record<string, any>;
  /** Meta information for the work package request */
  _meta?: Record<string, any>;
}

export interface Work_Package_activitiesModel {
}

export interface Work_PackagesModel {
}

export interface WorkspaceCollectionModel {
}

export interface Workspaces_schemaModel {
  /** The type identifier for this resource */
  _type?: string;
  /** Schema dependencies (currently empty for workspaces) */
  _dependencies?: any[];
  /** Defines the organizational structure of project custom fields into sections for  */
  _attributeGroups?: Record<string, any>[];
  id?: SchemaPropertyModel;
  name?: SchemaPropertyModel;
  identifier?: SchemaPropertyModel;
  description?: SchemaPropertyModel;
  public?: SchemaPropertyModel;
  active?: SchemaPropertyModel;
  status?: SchemaPropertyModel;
  statusExplanation?: SchemaPropertyModel;
  parent?: SchemaPropertyModel;
  createdAt?: SchemaPropertyModel;
  updatedAt?: SchemaPropertyModel;
  /** Links related to this resource */
  _links?: Record<string, any>;
}
