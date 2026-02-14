---
pack_name: openproject
pack_description: Project management with OpenProject - sync projects, work packages, time entries, and more
default_endpoint: https://${instance}.openproject.com/api/v3
auth_type: Bearer Token
---

# SPEC.md - OpenProject Pack Specification

## Pack Overview

**Service:** OpenProject (self-hosted or cloud)  
**API Version:** v3  
**Format:** HAL+JSON  
**Hosting:** User-configurable base URL (self-hosted or cloud instance)

## Authentication

Bearer Token (API Key via Basic Auth with username "apikey"). Users find their API key in their OpenProject account settings.

## Sync Tables (8)

| Name | Endpoint | Filter | Limit | Notes |
|------|----------|--------|-------|-------|
| Projects | GET /api/v3/projects | active=true | 1000 | Core entity, project hierarchy |
| WorkPackages | GET /api/v3/work_packages | filters | 1000 | Tasks/issues, main work unit |
| Users | GET /api/v3/users | status=active | 1000 | Team members |
| TimeEntries | GET /api/v3/time_entries | date range | 1000 | Time tracking records |
| Versions | GET /api/v3/versions | status | 1000 | Milestones/releases |
| Statuses | GET /api/v3/statuses | - | 100 | Work package statuses |
| Priorities | GET /api/v3/priorities | - | 100 | Work package priorities |
| Queries | GET /api/v3/queries | - | 100 | Saved filters/views |

## Formulas (5)

| Name | Endpoint | Parameters | Returns |
|------|----------|------------|---------|
| Project | GET /projects/{id} | id: number | Project details |
| WorkPackage | GET /work_packages/{id} | id: number | Task details |
| User | GET /users/{id} | id: number | User profile |
| TimeEntry | GET /time_entries/{id} | id: number | Time entry details |
| Version | GET /versions/{id} | id: number | Version/milestone details |

## Actions (10)

| Name | Endpoint | Parameters | Description |
|------|----------|------------|-------------|
| CreateProject | POST /projects | name, description, parent | Create new project |
| UpdateProject | PATCH /projects/{id} | id, name, description, status | Update project |
| CreateWorkPackage | POST /work_packages | subject, project, type, status | Create task |
| UpdateWorkPackage | PATCH /work_packages/{id} | id, subject, status, assignee | Update task |
| CreateTimeEntry | POST /time_entries | workPackage, spentOn, hours | Log time |
| UpdateTimeEntry | PATCH /time_entries/{id} | id, hours, comment | Update time log |
| AddComment | POST /work_packages/{id}/activities | id, comment | Comment on task |
| DeleteWorkPackage | DELETE /work_packages/{id} | id | Delete task |
| AssignWorkPackage | PATCH /work_packages/{id} | id, assignee | Quick assign |
| UpdateProgress | PATCH /work_packages/{id} | id, percentageDone | Update progress |

## Column Formats (2)

| Name | Pattern | Schema |
|------|---------|--------|
| WorkPackageRef | #\d+ | Links to WorkPackage |
| ProjectRef | Project name | Links to Project |

## Key Schemas to Implement

1. **Project** - id, name, identifier, description, status, parent
2. **WorkPackage** - id, subject, description, status, priority, assignee, author, project, spentTime, percentageDone
3. **User** - id, login, firstName, lastName, email, status
4. **TimeEntry** - id, spentOn, hours, workPackage, user, comment
5. **Version** - id, name, description, status, startDate, endDate
6. **Status** - id, name, color, position, defaultDoneRatio
7. **Priority** - id, name, position
8. **Query** - id, name, filters, columns, sortCriteria

## HAL+JSON Notes

All responses use HAL+JSON format:
- `_links`: Related resources and actions
- `_embedded`: Embedded objects
- `_type`: Resource type

Important links to preserve:
- `self`: Canonical URL
- `project`: Parent project reference
- `author`, `assignee`: User references
- `status`, `priority`: Enum references

## Pagination

All list endpoints support:
- `offset`: Page offset (default: 1)
- `pageSize`: Items per page (default: 30, max: 100)

Response includes:
- `total`: Total items
- `count`: Items in current page
- `_links.next`: Next page link (if available)

## Filters

Work packages support advanced filtering:
```json
[{"status": {"operator": "o", "values": []}}]
```

Common operators: `=` (equals), `!` (not equals), `o` (open), `c` (closed)
