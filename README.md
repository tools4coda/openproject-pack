# OpenProject Pack - Coda Deployment Complete! ✅

## Pack URL
https://coda.io/p/48268

## Deployment Status
- ✅ Created in Coda (Pack ID: 48268)
- ✅ Version 1 uploaded
- ✅ GitHub: https://github.com/tools4coda/openproject-pack

## Features

### Sync Tables
- **Projects** - All accessible projects
- **WorkPackages** - Work packages with optional project filter

### Formulas
- **GetProject(id)** - Get single project
- **GetWorkPackage(id)** - Get single work package

### Actions
- **CreateWorkPackage(projectId, subject, description)** - Create new work item

## Authentication

1. In Coda, add the pack
2. Enter your OpenProject URL
3. Username: `apikey`
4. Password: Your OpenProject API key

## API Key Location in OpenProject
- Go to your profile → Account settings → API access → Generate key

## Configuration for Self-hosted
Works with any OpenProject instance - just enter your URL during authentication.

## Build
```bash
npm install
npm run build  # ✅ TypeScript compiles successfully
```

## Files
- `src/pack.ts` - Main pack definition
- `.coda.json` - API credentials (local only, not committed)

## TODO
- [ ] Add more sync tables (TimeEntries, Users, Statuses, etc.)
- [ ] Add more actions (UpdateWorkPackage, CreateTimeEntry)
- [ ] Add autocomplete for project/assignee selection
- [ ] Handle pagination for large datasets
- [ ] Add formula for custom queries
