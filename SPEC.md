# OpenProject Pack Specification

## Overview

**Complete OpenProject API Integration for Coda**

- **Version:** 1.0.0
- **API:** OpenProject API v3
- **Authentication:** API Key via Basic Auth (WebBasic)
- **Support:** Self-hosted instances

## Authentication

1. In OpenProject, go to your user profile → Account settings
2. Generate an API key
3. In Coda:
   - Username: `apikey`
   - Password: Your API key
   - Domain: Your OpenProject URL (e.g., `https://projects.yourcompany.com`)

## Sync Tables

### Projects
List all projects accessible to the user.

**Columns:**
- `id` (Number) - Project ID
- `identifier` (String) - Project identifier
- `name` (String) - Project name
- `description` (String) - Project description
- `public` (Boolean) - Whether project is public
- `active` (Boolean) - Whether project is active
- `status` (String) - Project status
- `createdAt` (DateTime) - Creation date
- `updatedAt` (DateTime) - Last update date

**Parameters:**
- `filters` (optional) - JSON filters

### Work Packages
Sync work packages across projects.

**Columns:**
- `id` (Number) - Work package ID
- `subject` (String) - Title
- `description` (String) - Description
- `startDate` (Date) - Start date
- `dueDate` (Date) - Due date
- `estimatedTime` (String) - Estimated time
- `spentTime` (String) - Time spent
- `percentageDone` (Number) - Completion percentage
- `status` (String) - Current status
- `priority` (String) - Priority level
- `assignee` (String) - Assigned user
- `author` (String) - Creator
- `projectId` (Number) - Project ID
- `projectName` (String) - Project name
- `type` (String) - Work package type
- `createdAt` (DateTime) - Creation date
- `updatedAt` (DateTime) - Last update date

**Parameters:**
- `projectId` (optional) - Filter by project
- `filters` (optional) - JSON filters

## Formulas

### GetProject
Get a single project by ID.

**Parameters:**
- `id` (Number) - Project ID

**Returns:** Project object

### GetWorkPackage
Get a single work package by ID.

**Parameters:**
- `id` (Number) - Work Package ID

**Returns:** WorkPackage object

## Actions

### CreateWorkPackage
Create a new work package.

**Parameters:**
- `projectId` (Number) - Required project ID
- `subject` (String) - Required title
- `description` (String) - Optional description
- `startDate` (String) - Optional start date (YYYY-MM-DD)
- `dueDate` (String) - Optional due date (YYYY-MM-DD)

### UpdateWorkPackage
Update an existing work package.

**Parameters:**
- `id` (Number) - Work Package ID
- `subject` (String) - Optional new title
- `description` (String) - Optional new description
- `percentageDone` (Number) - Optional completion (0-100)

### CreateTimeEntry
Log time spent on a work package.

**Parameters:**
- `workPackageId` (Number) - Work Package ID
- `hours` (Number) - Hours spent (e.g., 2.5)
- `comment` (String) - Optional comment
- `spentOn` (String) - Optional date (YYYY-MM-DD)
- `activityId` (Number) - Optional activity ID

## TODO / Roadmap

### Phase 1 (Current)
- [x] Core types (Project, WorkPackage, User, TimeEntry)
- [x] Projects sync table
- [x] Work Packages sync table
- [x] GetProject formula
- [x] GetWorkPackage formula
- [x] CreateWorkPackage action
- [x] UpdateWorkPackage action
- [x] CreateTimeEntry action

### Phase 2 (Future)
- [ ] Time Entries sync table
- [ ] Users sync table
- [ ] Statuses, Priorities, Types sync tables
- [ ] Categories, Versions sync tables
- [ ] Wiki pages sync table
- [ ] Attachments support
- [ ] Custom field support
- [ ] Relations between work packages
- [ ] Watchers management
- [ ] Comments/Activities sync
- [ ] Calendar integration
- [ ] Gantt chart data

### Phase 3 (Advanced)
- [ ] Query support (saved filters)
- [ ] Search functionality
- [ ] Bulk operations
- [ ] Project templates
- [ ] Backlogs (if using agile boards)
- [ ] Cost tracking
- [ ] Budget management

## Development

### Build
```bash
npm install
npm run build
```

### Test
```bash
npm test
```

### Deploy to Coda
```bash
npx coda upload pack.ts
```

## Files

```
src/
├── types.ts              # Type definitions and schemas
├── pack.ts               # Main pack configuration
├── sync-tables/
│   ├── index.ts          # Sync table exports
│   ├── projects.ts       # Projects sync
│   └── work-packages.ts  # Work Packages sync
├── formulas/
│   ├── index.ts          # Formula exports
│   ├── get-project.ts    # Get single project
│   └── get-work-package.ts # Get single work package
└── actions/
    ├── index.ts          # Action exports
    ├── create-work-package.ts
    ├── update-work-package.ts
    └── create-time-entry.ts
```

## API Documentation

- [OpenProject API v3](https://www.openproject.org/docs/api/)
- [API Endpoints](https://www.openproject.org/docs/api/endpoints/)
