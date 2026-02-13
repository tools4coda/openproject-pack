# OpenProject Pack Specification

## Overview

- **Service:** OpenProject
- **Version:** 3 (API v3)
- **Description:** Complete OpenProject API integration for Coda with self-hosted support

## Authentication

- **Type:** WebBasic (API Key)
- **Username:** `apikey` (fixed)
- **Password:** Your API Key from OpenProject

## Sync Tables

| Name | Endpoint | Status | Notes |
|------|----------|--------|-------|
| Projects | GET /api/v3/projects | ✅ Ready | Supports pagination |
| Work Packages | GET /api/v3/projects/{id}/work_packages | ✅ Ready | Filter by project |
| Time Entries | GET /api/v3/time_entries | ✅ Ready | Filter by project/user |

## Formulas

| Name | Endpoint | Status |
|------|----------|--------|
| GetProject | GET /api/v3/projects/{id} | ✅ Ready |
| GetWorkPackage | GET /api/v3/work_packages/{id} | ✅ Ready |
| GetUser | GET /api/v3/users/{id} | ✅ Ready |

## Actions

| Name | Endpoint | Status |
|------|----------|--------|
| CreateProject | POST /api/v3/projects | ✅ Ready |
| CreateWorkPackage | POST /api/v3/projects/{id}/work_packages | ✅ Ready |
| UpdateWorkPackage | PATCH /api/v3/work_packages/{id} | ✅ Ready |

## TODO / Future Enhancements

- [ ] Add more sync tables (Users, Activities, Categories, Versions)
- [ ] Add formulas for additional endpoints (statuses, priorities, types)
- [ ] Add autocomplete for project selection
- [ ] Add better error messages
- [ ] Support OAuth2 authentication
- [ ] Implement cursor-based pagination for large datasets

## API Coverage

**Implemented:** ~15 of 261 endpoints (6%)
**Priority:** High-value CRUD operations for Projects and Work Packages

## Self-Hosted Support

All formulas and actions support optional `baseUrl` parameter for self-hosted instances.
