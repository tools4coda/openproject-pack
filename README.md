# OpenProject Pack for Coda

[![Tests](https://github.com/tools4coda/openproject-pack/actions/workflows/test.yml/badge.svg)](https://github.com/tools4coda/openproject-pack/actions/workflows/test.yml)

Coda Pack for [OpenProject](https://www.openproject.org/) - the leading open source project management software.

## Features

### Sync Tables (8)

| Table | Description | Primary Fields |
|-------|-------------|----------------|
| **Projects** | Project list with hierarchy | id, name, identifier, status, parentId |
| **WorkPackages** | Tasks, features, bugs | id, subject, status, priority, assignee, % done |
| **Users** | Team members | id, name, email, login, admin flag |
| **TimeEntries** | Time tracking records | id, hours, spentOn, workPackage, comment |
| **Versions** | Milestones/releases | id, name, status, start/end dates |
| **Statuses** | Work package statuses | id, name, color, isClosed |
| **Priorities** | Work package priorities | id, name, position |
| **Queries** | Saved filters/views | id, name, public, starred |

### Formulas (5)

| Formula | Description | Parameters |
|---------|-------------|------------|
| `Project(id)` | Get project by ID | id: number |
| `WorkPackage(id)` | Get work package by ID | id: number |
| `User(id)` | Get user by ID | id: number |
| `TimeEntry(id)` | Get time entry by ID | id: number |
| `Version(id)` | Get version by ID | id: number |

### Actions (10)

| Action | Description |
|--------|-------------|
| **CreateProject** | Create a new project |
| **UpdateProject** | Update project name, description, status |
| **CreateWorkPackage** | Create a new task/feature/bug |
| **UpdateWorkPackage** | Update subject, status, assignee, progress |
| **DeleteWorkPackage** | Delete a work package |
| **AddComment** | Add a comment to a work package |
| **CreateTimeEntry** | Log time spent on a work package |
| **UpdateTimeEntry** | Update logged time |
| **AssignWorkPackage** | Quickly assign/reassign a work package |
| **UpdateProgress** | Update work package progress percentage |

## Authentication

1. Get your API key from OpenProject (Account → Profile → Access tokens)
2. Use Bearer Token authentication
3. Configure your instance URL (e.g., `mycompany.openproject.com`)

## Installation

1. Install the Pack from Coda Gallery (coming soon)
2. Or use CLI: `npx coda create src/pack.ts`

## Development

```bash
npm install
npm run build
npm test
npm run upload
```

## API Coverage

Uses [OpenProject API v3](https://www.openproject.org/docs/api/v3/) with HAL+JSON format.

## License

MIT
