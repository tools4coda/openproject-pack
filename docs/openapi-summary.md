# OpenAPI Summary: OpenProject API V3 (Stable)

**Version:** 3  
**Total Endpoints:** 261  
**Total Schemas:** 172

## Endpoints by Tag

### Actions & Capabilities (5 endpoints)
- `GET` `/api/v3/actions` - List actions
- `GET` `/api/v3/actions/{id}` - View action
- `GET` `/api/v3/capabilities` - List capabilities
- `GET` `/api/v3/capabilities/context/global` - View global context
- `GET` `/api/v3/capabilities/{id}` - View capabilities

### Activities (6 endpoints)
- `GET` `/api/v3/activities/{id}` - Get an activity
- `PATCH` `/api/v3/activities/{id}` - Update activity
- `GET` `/api/v3/activities/{id}/attachments` - List attachments by activity
- `POST` `/api/v3/activities/{id}/attachments` - Add attachment to activity
- `GET` `/api/v3/activities/{id}/emoji_reactions` - List emoji reactions by activity
- `PATCH` `/api/v3/activities/{id}/emoji_reactions` - Toggle emoji reaction for an activity

### Attachments (11 endpoints)
- `POST` `/api/v3/attachments` - Create Attachment
- `DELETE` `/api/v3/attachments/{id}` - Delete attachment
- `GET` `/api/v3/attachments/{id}` - View attachment
- `GET` `/api/v3/meetings/{id}/attachments` - List attachments by meeting
- `POST` `/api/v3/meetings/{id}/attachments` - Add attachment to meeting
- `GET` `/api/v3/posts/{id}/attachments` - List attachments by post
- `POST` `/api/v3/posts/{id}/attachments` - Add attachment to post
- `GET` `/api/v3/wiki_pages/{id}/attachments` - List attachments by wiki page
- `POST` `/api/v3/wiki_pages/{id}/attachments` - Add attachment to wiki page
- `GET` `/api/v3/work_packages/{id}/attachments` - List attachments by work package
- `POST` `/api/v3/work_packages/{id}/attachments` - Create work package attachment

### Budgets (2 endpoints)
- `GET` `/api/v3/budgets/{id}` - view Budget
- `GET` `/api/v3/projects/{id}/budgets` - view Budgets of a Project

### Categories (3 endpoints)
- `GET` `/api/v3/categories/{id}` - View Category
- `GET` `/api/v3/projects/{id}/categories` - List categories of a project
- `GET` `/api/v3/workspaces/{id}/categories` - List categories of a workspace

### Collections (1 endpoints)
- `GET` `/api/v3/examples` - view aggregated result

### Configuration (2 endpoints)
- `GET` `/api/v3/configuration` - View configuration
- `GET` `/api/v3/projects/{id}/configuration` - View project configuration

### Custom Options (1 endpoints)
- `GET` `/api/v3/custom_options/{id}` - View Custom Option

### Custom actions (2 endpoints)
- `GET` `/api/v3/custom_actions/{id}` - Get a custom action
- `POST` `/api/v3/custom_actions/{id}/execute` - Execute custom action

### Documents (3 endpoints)
- `GET` `/api/v3/documents` - List Documents
- `GET` `/api/v3/documents/{id}` - View document
- `PATCH` `/api/v3/documents/{id}` - Update document

### File Links (4 endpoints)
- `GET` `/api/v3/project_storages` - Gets a list of project storages
- `GET` `/api/v3/project_storages/{id}` - Gets a project storage
- `GET` `/api/v3/project_storages/{id}/open` - Open the project storage
- `GET` `/api/v3/storages/{id}/open` - Open the storage

### File links (13 endpoints)
- `GET` `/api/v3/file_links/{id}` - Gets a file link.
- `DELETE` `/api/v3/file_links/{id}` - Removes a file link.
- `GET` `/api/v3/file_links/{id}/open` - Creates an opening uri of the linked file.
- `GET` `/api/v3/file_links/{id}/download` - Creates a download uri of the linked file.
- `GET` `/api/v3/storages` - Get Storages
- `POST` `/api/v3/storages` - Creates a storage.
- `GET` `/api/v3/storages/{id}` - Get a storage
- `PATCH` `/api/v3/storages/{id}` - Update a storage
- `DELETE` `/api/v3/storages/{id}` - Delete a storage
- `GET` `/api/v3/storages/{id}/files` - Gets files of a storage.
- `POST` `/api/v3/storages/{id}/files/prepare_upload` - Preparation of a direct upload of a file to the given storage.
- `POST` `/api/v3/storages/{id}/folders` - Creation of a new folder
- `POST` `/api/v3/storages/{id}/oauth_client_credentials` - Creates an oauth client credentials object for a storage.

### Forms (1 endpoints)
- `POST` `/api/v3/example/form` - show or validate form

### Grids (6 endpoints)
- `GET` `/api/v3/grids` - List grids
- `POST` `/api/v3/grids` - Create a grid
- `POST` `/api/v3/grids/form` - Grid Create Form
- `GET` `/api/v3/grids/{id}` - Get a grid
- `PATCH` `/api/v3/grids/{id}` - Update a grid
- `POST` `/api/v3/grids/{id}/form` - Grid Update Form

### Groups (5 endpoints)
- `GET` `/api/v3/groups` - List groups
- `POST` `/api/v3/groups` - Create group
- `DELETE` `/api/v3/groups/{id}` - Delete group
- `GET` `/api/v3/groups/{id}` - Get group
- `PATCH` `/api/v3/groups/{id}` - Update group

### Help texts (2 endpoints)
- `GET` `/api/v3/help_texts` - List help texts
- `GET` `/api/v3/help_texts/{id}` - Get help text

### Meetings (1 endpoints)
- `GET` `/api/v3/meetings/{id}` - View Meeting Page

### Memberships (9 endpoints)
- `GET` `/api/v3/memberships` - List memberships
- `POST` `/api/v3/memberships` - Create a membership
- `GET` `/api/v3/memberships/available_projects` - Available projects for memberships
- `POST` `/api/v3/memberships/form` - Form create membership
- `GET` `/api/v3/memberships/schema` - Schema membership
- `DELETE` `/api/v3/memberships/{id}` - Delete membership
- `GET` `/api/v3/memberships/{id}` - Get a membership
- `PATCH` `/api/v3/memberships/{id}` - Update membership
- `POST` `/api/v3/memberships/{id}/form` - Form update membership

### News (5 endpoints)
- `GET` `/api/v3/news` - List News
- `POST` `/api/v3/news` - Create News
- `GET` `/api/v3/news/{id}` - View news
- `PATCH` `/api/v3/news/{id}` - Update news
- `DELETE` `/api/v3/news/{id}` - Delete news

### Notifications (7 endpoints)
- `GET` `/api/v3/notifications` - Get notification collection
- `POST` `/api/v3/notifications/read_ian` - Read all notifications
- `POST` `/api/v3/notifications/unread_ian` - Unread all notifications
- `GET` `/api/v3/notifications/{id}` - Get the notification
- `GET` `/api/v3/notifications/{notification_id}/details/{id}` - Get a notification detail
- `POST` `/api/v3/notifications/{id}/read_ian` - Read notification
- `POST` `/api/v3/notifications/{id}/unread_ian` - Unread notification

### OAuth 2 (2 endpoints)
- `GET` `/api/v3/oauth_applications/{id}` - Get the oauth application.
- `GET` `/api/v3/oauth_client_credentials/{id}` - Get the oauth client credentials object.

### Portfolios (5 endpoints)
- `GET` `/api/v3/portfolios` - List portfolios
- `GET` `/api/v3/portfolios/{id}` - View portfolio
- `PATCH` `/api/v3/portfolios/{id}` - Update Portfolio
- `DELETE` `/api/v3/portfolios/{id}` - Delete Portfolio
- `POST` `/api/v3/portfolios/{id}/form` - Portfolio update form

### Posts (1 endpoints)
- `GET` `/api/v3/posts/{id}` - View Post

### Previewing (2 endpoints)
- `POST` `/api/v3/render/markdown` - Preview Markdown document
- `POST` `/api/v3/render/plain` - Preview plain document

### Principals (6 endpoints)
- `GET` `/api/v3/placeholder_users` - List placehoder users
- `POST` `/api/v3/placeholder_users` - Create placeholder user
- `DELETE` `/api/v3/placeholder_users/{id}` - Delete placeholder user
- `GET` `/api/v3/placeholder_users/{id}` - View placeholder user
- `PATCH` `/api/v3/placeholder_users/{id}` - Update placeholder user
- `GET` `/api/v3/principals` - List principals

### Priorities (2 endpoints)
- `GET` `/api/v3/priorities` - List all Priorities
- `GET` `/api/v3/priorities/{id}` - View Priority

### Programs (5 endpoints)
- `GET` `/api/v3/programs` - List programs
- `GET` `/api/v3/programs/{id}` - View program
- `PATCH` `/api/v3/programs/{id}` - Update Program
- `DELETE` `/api/v3/programs/{id}` - Delete Program
- `POST` `/api/v3/programs/{id}/form` - Program update form

### Project Phase Definitions (2 endpoints)
- `GET` `/api/v3/project_phase_definitions` - List project phase definitions
- `GET` `/api/v3/project_phase_definitions/{id}` - Get a project phase definition

### Project Phases (1 endpoints)
- `GET` `/api/v3/project_phases/{id}` - Get a project phase

### Projects (16 endpoints)
- `GET` `/api/v3/projects` - List projects
- `POST` `/api/v3/projects` - Create project
- `POST` `/api/v3/projects/form` - Project create form
- `GET` `/api/v3/projects/schema` - View project schema
- `DELETE` `/api/v3/projects/{id}` - Delete Project
- `GET` `/api/v3/projects/{id}` - View project
- `PATCH` `/api/v3/projects/{id}` - Update Project
- `POST` `/api/v3/projects/{id}/form` - Project update form
- `POST` `/api/v3/projects/{id}/copy` - Create project copy
- `POST` `/api/v3/projects/{id}/copy/form` - Project copy form
- `GET` `/api/v3/project_statuses/{id}` - View project status
- `GET` `/api/v3/projects/available_parent_projects` - List available parent project candidates
- `DELETE` `/api/v3/projects/{id}/favorite` - Unfavorite Project
- `POST` `/api/v3/projects/{id}/favorite` - Favorite Project
- `GET` `/api/v3/versions/{id}/projects` - List projects having version
- `GET` `/api/v3/versions/{id}/workspaces` - List workspaces having version

### Queries (16 endpoints)
- `GET` `/api/v3/projects/{id}/queries/default` - View default query for project
- `GET` `/api/v3/projects/{id}/queries/schema` - View schema for project queries
- `GET` `/api/v3/queries` - List queries
- `POST` `/api/v3/queries` - Create query
- `GET` `/api/v3/queries/available_projects` - Available projects for query
- `GET` `/api/v3/queries/default` - View default query
- `POST` `/api/v3/queries/form` - Query Create Form
- `GET` `/api/v3/queries/schema` - View schema for global queries
- `DELETE` `/api/v3/queries/{id}` - Delete query
- `GET` `/api/v3/queries/{id}` - View query
- `PATCH` `/api/v3/queries/{id}` - Edit Query
- `POST` `/api/v3/queries/{id}/form` - Query Update Form
- `PATCH` `/api/v3/queries/{id}/star` - Star query
- `PATCH` `/api/v3/queries/{id}/unstar` - Unstar query
- `GET` `/api/v3/workspaces/{id}/queries/default` - View default query for workspace
- `GET` `/api/v3/workspace/{id}/queries/schema` - View schema for workspace queries

### Query Columns (1 endpoints)
- `GET` `/api/v3/queries/columns/{id}` - View Query Column

### Query Filter Instance Schema (4 endpoints)
- `GET` `/api/v3/projects/{id}/queries/filter_instance_schemas` - List Query Filter Instance Schemas for Project
- `GET` `/api/v3/queries/filter_instance_schemas` - List Query Filter Instance Schemas
- `GET` `/api/v3/queries/filter_instance_schemas/{id}` - View Query Filter Instance Schema
- `GET` `/api/v3/workspace/{id}/queries/filter_instance_schemas` - List Query Filter Instance Schemas for Workspace

### Query Filters (1 endpoints)
- `GET` `/api/v3/queries/filters/{id}` - View Query Filter

### Query Operators (1 endpoints)
- `GET` `/api/v3/queries/operators/{id}` - View Query Operator

### Query Sort Bys (1 endpoints)
- `GET` `/api/v3/queries/sort_bys/{id}` - View Query Sort By

### Relations (5 endpoints)
- `GET` `/api/v3/relations` - List Relations
- `GET` `/api/v3/relations/{id}` - Get Relation
- `DELETE` `/api/v3/relations/{id}` - Delete Relation
- `PATCH` `/api/v3/relations/{id}` - Update Relation
- `POST` `/api/v3/work_packages/{id}/relations` - Create relation

### Reminders (3 endpoints)
- `GET` `/api/v3/reminders` - List all active reminders
- `PATCH` `/api/v3/reminders/{id}` - Update a reminder
- `DELETE` `/api/v3/reminders/{id}` - Delete a reminder

### Revisions (1 endpoints)
- `GET` `/api/v3/revisions/{id}` - View revision

### Roles (2 endpoints)
- `GET` `/api/v3/roles` - List roles
- `GET` `/api/v3/roles/{id}` - View role

### Root (1 endpoints)
- `GET` `/api/v3` - View root

### Schemas (1 endpoints)
- `GET` `/api/v3/example/schema` - view the schema

### Statuses (2 endpoints)
- `GET` `/api/v3/statuses` - List the collection of all statuses
- `GET` `/api/v3/statuses/{id}` - Get a work package status

### Time Entries (5 endpoints)
- `POST` `/api/v3/time_entries/{id}/form` - Time entry update form
- `GET` `/api/v3/time_entries/available_projects` - Available projects for time entries
- `POST` `/api/v3/time_entries/form` - Time entry create form
- `GET` `/api/v3/time_entries/schema` - View time entry schema
- `PATCH` `/api/v3/time_entries/{id}` - update time entry

### Time entries (4 endpoints)
- `GET` `/api/v3/time_entries` - List time entries
- `POST` `/api/v3/time_entries` - Create time entry
- `DELETE` `/api/v3/time_entries/{id}` - Delete time entry
- `GET` `/api/v3/time_entries/{id}` - Get time entry

### Time entry activities (1 endpoints)
- `GET` `/api/v3/time_entries/activity/{id}` - View time entries activity

### Types (4 endpoints)
- `GET` `/api/v3/projects/{id}/types` - List types available in a project
- `GET` `/api/v3/types` - List all Types
- `GET` `/api/v3/types/{id}` - View Type
- `GET` `/api/v3/workspaces/{id}/types` - List types available in a workspace

### Untagged (3 endpoints)
- `GET` `/api/v3/custom_fields/{id}/items` - Get the custom field hierarchy items
- `GET` `/api/v3/custom_field_items/{id}` - Get a custom field hierarchy item
- `GET` `/api/v3/custom_field_items/{id}/branch` - Get a custom field hierarchy item's branch

### UserPreferences (2 endpoints)
- `GET` `/api/v3/my_preferences` - Show my preferences
- `PATCH` `/api/v3/my_preferences` - Update my preferences

### Users (9 endpoints)
- `GET` `/api/v3/users` - List Users
- `POST` `/api/v3/users` - Create User
- `GET` `/api/v3/users/schema` - View user schema
- `DELETE` `/api/v3/users/{id}` - Delete user
- `GET` `/api/v3/users/{id}` - View user
- `PATCH` `/api/v3/users/{id}` - Update user
- `POST` `/api/v3/users/{id}/form` - User update form
- `DELETE` `/api/v3/users/{id}/lock` - Unlock user
- `POST` `/api/v3/users/{id}/lock` - Lock user

### Values::Property (1 endpoints)
- `GET` `/api/v3/values/schema/{id}` - View Values schema

### Versions (11 endpoints)
- `GET` `/api/v3/projects/{id}/versions` - List versions available in a project
- `GET` `/api/v3/versions` - List versions
- `POST` `/api/v3/versions` - Create version
- `GET` `/api/v3/versions/available_projects` - Available projects for versions
- `POST` `/api/v3/versions/form` - Version create form
- `GET` `/api/v3/versions/schema` - View version schema
- `GET` `/api/v3/versions/{id}` - Get version
- `DELETE` `/api/v3/versions/{id}` - Delete version
- `PATCH` `/api/v3/versions/{id}` - Update Version
- `POST` `/api/v3/versions/{id}/form` - Version update form
- `GET` `/api/v3/workspaces/{id}/versions` - List versions available in a workspace

### Views (3 endpoints)
- `GET` `/api/v3/views` - List views
- `GET` `/api/v3/views/{id}` - View view
- `POST` `/api/v3/views/{id}` - Create view

### Wiki Pages (1 endpoints)
- `GET` `/api/v3/wiki_pages/{id}` - View Wiki Page

### Work Packages (31 endpoints)
- `GET` `/api/v3/projects/{id}/work_packages` - Get work packages of project
- `POST` `/api/v3/projects/{id}/work_packages` - Create work package in project
- `POST` `/api/v3/projects/{id}/work_packages/form` - Form for creating Work Packages in a Project
- `GET` `/api/v3/projects/{id}/available_assignees` - Project Available assignees
- `GET` `/api/v3/work_packages` - List work packages
- `POST` `/api/v3/work_packages` - Create Work Package
- `POST` `/api/v3/work_packages/form` - Form for creating a Work Package
- `GET` `/api/v3/work_packages/schemas` - List Work Package Schemas
- `GET` `/api/v3/work_packages/schemas/{identifier}` - View Work Package Schema
- `DELETE` `/api/v3/work_packages/{id}` - Delete Work Package
- `GET` `/api/v3/work_packages/{id}` - View Work Package
- `PATCH` `/api/v3/work_packages/{id}` - Update a Work Package
- `GET` `/api/v3/work_packages/{id}/activities` - List work package activities
- `POST` `/api/v3/work_packages/{id}/activities` - Comment work package
- `GET` `/api/v3/work_packages/{id}/available_assignees` - Work Package Available assignees
- `GET` `/api/v3/work_packages/{id}/available_projects` - Available projects for work package
- `GET` `/api/v3/work_packages/{id}/available_relation_candidates` - Available relation candidates
- `GET` `/api/v3/work_packages/{id}/available_watchers` - Available watchers
- `POST` `/api/v3/work_packages/{id}/file_links` - Creates file links.
- `GET` `/api/v3/work_packages/{id}/file_links` - Gets all file links of a work package
- `POST` `/api/v3/work_packages/{id}/form` - Form for editing a Work Package
- `GET` `/api/v3/work_packages/{id}/revisions` - Revisions
- `GET` `/api/v3/work_packages/{work_package_id}/reminders` - List work package reminders
- `POST` `/api/v3/work_packages/{work_package_id}/reminders` - Create a work package reminder
- `GET` `/api/v3/work_packages/{id}/watchers` - List watchers
- `POST` `/api/v3/work_packages/{id}/watchers` - Add watcher
- `DELETE` `/api/v3/work_packages/{id}/watchers/{user_id}` - Remove watcher
- `GET` `/api/v3/workspaces/{id}/available_assignees` - Workspace Available assignees
- `GET` `/api/v3/workspaces/{id}/work_packages` - Get work packages of workspace
- `POST` `/api/v3/workspaces/{id}/work_packages` - Create work package in workspace
- `POST` `/api/v3/workspaces/{id}/work_packages/form` - Form for creating Work Packages in a Workspace

### Work Schedule (11 endpoints)
- `GET` `/api/v3/days/non_working` - Lists all non working days
- `POST` `/api/v3/days/non_working` - Creates a non-working day (NOT IMPLEMENTED)
- `GET` `/api/v3/days/non_working/{date}` - View a non-working day
- `PATCH` `/api/v3/days/non_working/{date}` - Update a non-working day attributes (NOT IMPLEMENTED)
- `DELETE` `/api/v3/days/non_working/{date}` - Removes a non-working day (NOT IMPLEMENTED)
- `GET` `/api/v3/days/week` - Lists week days
- `PATCH` `/api/v3/days/week` - Update week days (NOT IMPLEMENTED)
- `GET` `/api/v3/days/week/{day}` - View a week day
- `PATCH` `/api/v3/days/week/{day}` - Update a week day attributes (NOT IMPLEMENTED)
- `GET` `/api/v3/days` - Lists days
- `GET` `/api/v3/days/{date}` - View day

### WorkPackages (1 endpoints)
- `GET` `/api/v3/work_packages/{id}/activities_emoji_reactions` - List emoji reactions by work package activities

### Workspace (1 endpoints)
- `GET` `/api/v3/workspaces` - List workspace

### Workspaces (3 endpoints)
- `DELETE` `/api/v3/workspaces/{id}/favorite` - Unfavorite Workspace
- `POST` `/api/v3/workspaces/{id}/favorite` - Favorite Workspace
- `GET` `/api/v3/workspaces/schema` - View workspace schema

## Candidate Sync Tables (GET list endpoints)
- `/api/v3` - View root
- `/api/v3/actions` - List actions
- `/api/v3/capabilities` - List capabilities
- `/api/v3/capabilities/context/global` - View global context
- `/api/v3/configuration` - View configuration
- `/api/v3/days/non_working` - Lists all non working days
- `/api/v3/days/week` - Lists week days
- `/api/v3/days` - Lists days
- `/api/v3/documents` - List Documents
- `/api/v3/example/schema` - view the schema
- `/api/v3/examples` - view aggregated result
- `/api/v3/grids` - List grids
- `/api/v3/groups` - List groups
- `/api/v3/help_texts` - List help texts
- `/api/v3/memberships` - List memberships
- `/api/v3/memberships/available_projects` - Available projects for memberships
- `/api/v3/memberships/schema` - Schema membership
- `/api/v3/my_preferences` - Show my preferences
- `/api/v3/news` - List News
- `/api/v3/notifications` - Get notification collection
- `/api/v3/placeholder_users` - List placehoder users
- `/api/v3/portfolios` - List portfolios
- `/api/v3/principals` - List principals
- `/api/v3/priorities` - List all Priorities
- `/api/v3/programs` - List programs
- `/api/v3/project_phase_definitions` - List project phase definitions
- `/api/v3/project_storages` - Gets a list of project storages
- `/api/v3/projects` - List projects
- `/api/v3/projects/schema` - View project schema
- `/api/v3/projects/available_parent_projects` - List available parent project candidates
- `/api/v3/queries` - List queries
- `/api/v3/queries/available_projects` - Available projects for query
- `/api/v3/queries/default` - View default query
- `/api/v3/queries/filter_instance_schemas` - List Query Filter Instance Schemas
- `/api/v3/queries/schema` - View schema for global queries
- `/api/v3/relations` - List Relations
- `/api/v3/reminders` - List all active reminders
- `/api/v3/roles` - List roles
- `/api/v3/statuses` - List the collection of all statuses
- `/api/v3/storages` - Get Storages
- `/api/v3/time_entries` - List time entries
- `/api/v3/time_entries/available_projects` - Available projects for time entries
- `/api/v3/time_entries/schema` - View time entry schema
- `/api/v3/types` - List all Types
- `/api/v3/users` - List Users
- `/api/v3/users/schema` - View user schema
- `/api/v3/versions` - List versions
- `/api/v3/versions/available_projects` - Available projects for versions
- `/api/v3/versions/schema` - View version schema
- `/api/v3/views` - List views
- `/api/v3/work_packages` - List work packages
- `/api/v3/work_packages/schemas` - List Work Package Schemas
- `/api/v3/workspaces` - List workspace
- `/api/v3/workspaces/schema` - View workspace schema

## Candidate Formulas (GET single item)
- `/api/v3/actions/{id}` - View action
- `/api/v3/activities/{id}` - Get an activity
- `/api/v3/activities/{id}/attachments` - List attachments by activity
- `/api/v3/activities/{id}/emoji_reactions` - List emoji reactions by activity
- `/api/v3/attachments/{id}` - View attachment
- `/api/v3/budgets/{id}` - view Budget
- `/api/v3/capabilities/{id}` - View capabilities
- `/api/v3/categories/{id}` - View Category
- `/api/v3/custom_actions/{id}` - Get a custom action
- `/api/v3/custom_fields/{id}/items` - Get the custom field hierarchy items
- `/api/v3/custom_field_items/{id}` - Get a custom field hierarchy item
- `/api/v3/custom_field_items/{id}/branch` - Get a custom field hierarchy item's branch
- `/api/v3/custom_options/{id}` - View Custom Option
- `/api/v3/days/non_working/{date}` - View a non-working day
- `/api/v3/days/week/{day}` - View a week day
- `/api/v3/days/{date}` - View day
- `/api/v3/documents/{id}` - View document
- `/api/v3/file_links/{id}` - Gets a file link.
- `/api/v3/file_links/{id}/open` - Creates an opening uri of the linked file.
- `/api/v3/file_links/{id}/download` - Creates a download uri of the linked file.

## Candidate Actions (POST/PUT/PATCH)
- `PATCH` `/api/v3/activities/{id}` - Update activity
- `POST` `/api/v3/activities/{id}/attachments` - Add attachment to activity
- `PATCH` `/api/v3/activities/{id}/emoji_reactions` - Toggle emoji reaction for an activity
- `POST` `/api/v3/attachments` - Create Attachment
- `POST` `/api/v3/custom_actions/{id}/execute` - Execute custom action
- `POST` `/api/v3/days/non_working` - Creates a non-working day (NOT IMPLEMENTED)
- `PATCH` `/api/v3/days/non_working/{date}` - Update a non-working day attributes (NOT IMPLEMENTED)
- `PATCH` `/api/v3/days/week` - Update week days (NOT IMPLEMENTED)
- `PATCH` `/api/v3/days/week/{day}` - Update a week day attributes (NOT IMPLEMENTED)
- `PATCH` `/api/v3/documents/{id}` - Update document
- `POST` `/api/v3/example/form` - show or validate form
- `POST` `/api/v3/grids` - Create a grid
- `POST` `/api/v3/grids/form` - Grid Create Form
- `PATCH` `/api/v3/grids/{id}` - Update a grid
- `POST` `/api/v3/grids/{id}/form` - Grid Update Form
- `POST` `/api/v3/groups` - Create group
- `PATCH` `/api/v3/groups/{id}` - Update group
- `POST` `/api/v3/meetings/{id}/attachments` - Add attachment to meeting
- `POST` `/api/v3/memberships` - Create a membership
- `POST` `/api/v3/memberships/form` - Form create membership

## Key Schemas (172 total)
- `ActivityModel` (HAL+JSON)
  - Properties: _type, id, version, comment, details...
- `ActivityCommentWriteModel` 
  - Properties: comment, internal...
- `AttachmentModel` (HAL+JSON)
  - Properties: id, fileName, fileSize, description, status...
- `Attachments_Model` 
- `Available_AssigneesModel` 
- `Available_WatchersModel` 
- `Available_projects_for_queryModel` 
- `Available_projects_for_time_entriesModel` 
- `Available_projects_for_versionsModel` 
- `Available_projects_for_work_packageModel` 
- `Available_relation_candidatesModel` 
- `BudgetModel` (HAL+JSON)
  - Properties: _links...
- `Budgets_by_ProjectModel` 
- `Categories_by_WorkspaceModel` 
- `CategoryModel` (HAL+JSON)
  - Properties: id, name, _links...