# OpenProject Pack for Coda

A complete integration pack for [OpenProject](https://www.openproject.org/) - the leading open source project management software.

## Features

### Sync Tables
- **Projects** - Sync all your projects with filtering and sorting
- **Work Packages** - Track issues, tasks, milestones, and more
- **Time Entries** - Monitor time tracking across projects

### Formulas
- `GetProject(id)` - Get project details by ID
- `GetWorkPackage(id)` - Get work package (issue) details
- `GetUser(id)` - Get user information

### Actions
- **CreateProject** - Create new projects from Coda
- **CreateWorkPackage** - Add tickets/issues to projects
- **UpdateWorkPackage** - Modify existing tickets (status, description, etc.)

## Authentication

This pack supports **API Key authentication** for both cloud and self-hosted instances.

### Self-Hosted Instances

Most formulas and actions support an optional `baseUrl` parameter that allows you to specify your self-hosted OpenProject URL.

For sync tables, you can configure the endpoint during setup.

### Getting an API Key

1. Log in to your OpenProject instance
2. Go to your user profile → Account settings
3. Navigate to "Access tokens"
4. Generate a new API key
5. Use this key as the password in Coda (username: `apikey`)

## Usage

### Sync Tables

Simply add a sync table to your doc. You can filter by:
- Project (for work packages and time entries)
- Custom filters via query parameters

### Formulas

```
=GetProject(123)
=GetWorkPackage(456)
```

### Actions

```
=CreateProject("My New Project", "Description here")
=CreateWorkPackage(1, "New Task", "Task description", 1)
```

## Requirements

- OpenProject 12.0+ (API v3)
- Valid API key with appropriate permissions

## Development

```bash
npm install
npm run build
npx coda upload pack.ts
```

## License

MIT
