# Revision 1 - Skill Improvements

## Issues Found During OpenProject Pack Development

### 1. ts_generator.py Script Issues

**Problem:** Script failed with complex schemas containing `anyOf`, `allOf`, and array types.

**Fix:** Updated `openapi_type_to_ts` function to:
- Handle `$ref` in array items
- Handle `anyOf`/`allOf`/`oneOf` as `any` type
- Use `dict` parameter instead of separate arguments
- Add safety checks for non-dict property definitions

**Status:** Fixed

### 2. Scaffolding Script Missing Implementation

**Problem:** `scaffold.py` was incomplete (cut off mid-function).

**Fix:** Implemented minimal version that creates directory structure. Full template generation needs Phase 2.

**Status:** Partially fixed - needs enhancement

### 3. Sync Table Formula Requirements

**Problem:** Sync table formulas require both `description` and `parameters` fields.
Coda SDK complains: `missing description, parameters`

**Fix:** Added to all 8 sync tables:
```typescript
formula: {
  name: "SyncProjects",
  description: "Sync projects from OpenProject",  // REQUIRED
  parameters: [],  // REQUIRED (even if empty)
  execute: ...
}
```

**Skill Update Needed:** Add validation for required fields in sync table formulas.

### 4. HTTP Method Type Safety

**Problem:** Generic `method?: string` not assignable to Coda's specific union type.

**Fix:** Changed method type from `string` to explicit union:
```typescript
method?: "GET" | "POST" | "PATCH" | "PUT" | "DELETE";
```

**Skill Update Needed:** Document exact method types in helpers.ts template.

### 5. Missing identityName in Sync Tables

**Problem:** Sync tables should include `identityName` for proper entity linking.

**Fix:** Added to all sync tables:
```typescript
pack.addSyncTable({
  name: "Projects",
  identityName: "Project",  // Added
  schema: ...,
  formula: ...
});
```

**Skill Update Needed:** Add identityName guidance in SPEC.md template.

### 6. Test Type Safety

**Problem:** Generic `extractCollection<T>()` needs explicit type annotation in tests.

**Fix:** Updated test:
```typescript
const result = extractCollection<{id: number}>(collection);
```

**Skill Update Needed:** Add TypeScript best practices to test template.

## Recommendations for Skill Updates

### Phase 4 Scaffolding Enhancements

1. **Auto-discovery from SPEC.md**: Parse SPEC.md and generate full pack structure
2. **Template snippets**: Provide code templates for common patterns
3. **Validation script**: Check SPEC.md completeness before scaffolding

### Phase 5 Implementation Guides

1. **HAL+JSON transformer**: Document OpenProject-style HAL handling
2. **Pagination patterns**: Document continuation-based pagination
3. **Error handling**: Add standard error handling templates

### New Scripts Needed

1. `validate_spec.py`: Validate SPEC.md structure and completeness
2. `generate_tests.py`: Generate test stubs from SPEC.md
3. `check_types.py`: Run TypeScript checks and report errors

## Verified Working Stack

- TypeScript 5.x
- @codahq/packs-sdk ^1.7.0
- Jest 29.x with ts-jest
- Python 3.x for helper scripts
- OpenAPI 3.1 spec parsing

## Next Pack Recommendations

Based on successful OpenProject implementation:

1. Start with SPEC.md - be explicit about all fields
2. Create schemas first, then sync tables
3. Use identityName for all sync tables
4. Always include description + parameters in formulas
5. Use explicit HTTP method types
6. Test early and often (after each sync table)
