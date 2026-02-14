import * as coda from "@codahq/packs-sdk";
import { pack } from '../src/pack';

describe('Pack Definition', () => {
  it('should have correct version', () => {
    expect(pack.version).toBe('1.0.0');
  });

  it('should have authentication configured', () => {
    expect(pack.defaultAuthentication).toBeDefined();
    expect(pack.defaultAuthentication?.type).toBe(coda.AuthenticationType.HeaderBearerToken);
  });

  it('should have network domains', () => {
    expect(pack.networkDomains).toContain('openproject.com');
  });

  it('should have sync tables defined', () => {
    expect(pack.syncTables).toBeDefined();
    expect(pack.syncTables?.length).toBeGreaterThanOrEqual(8);
    
    const tableNames = pack.syncTables?.map(t => t.name);
    expect(tableNames).toContain('Projects');
    expect(tableNames).toContain('WorkPackages');
    expect(tableNames).toContain('Users');
    expect(tableNames).toContain('TimeEntries');
    expect(tableNames).toContain('Versions');
    expect(tableNames).toContain('Statuses');
    expect(tableNames).toContain('Priorities');
    expect(tableNames).toContain('Queries');
  });

  it('should have formulas defined', () => {
    expect(pack.formulas).toBeDefined();
    
    const formulaNames = pack.formulas?.map(f => f.name);
    expect(formulaNames).toContain('Project');
    expect(formulaNames).toContain('WorkPackage');
    expect(formulaNames).toContain('User');
    expect(formulaNames).toContain('TimeEntry');
    expect(formulaNames).toContain('Version');
  });

  it('should have actions defined', () => {
    expect(pack.formulas).toBeDefined();
    
    const actions = pack.formulas?.filter(f => f.isAction);
    const actionNames = actions?.map(f => f.name);
    
    expect(actionNames).toContain('CreateProject');
    expect(actionNames).toContain('CreateWorkPackage');
    expect(actionNames).toContain('UpdateWorkPackage');
    expect(actionNames).toContain('DeleteWorkPackage');
    expect(actionNames).toContain('AddComment');
    expect(actionNames).toContain('CreateTimeEntry');
    expect(actionNames).toContain('AssignWorkPackage');
    expect(actionNames).toContain('UpdateProgress');
  });
});
