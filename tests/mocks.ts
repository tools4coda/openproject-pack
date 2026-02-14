// Mock data for OpenProject API responses

export const mockProject = {
  id: 1,
  name: "Test Project",
  identifier: "test-project",
  description: "A test project",
  status: "active",
  public: true,
  parent: { id: 2, name: "Parent Project", href: "/api/v3/projects/2" },
  createdAt: "2024-01-01T00:00:00Z",
  updatedAt: "2024-01-02T00:00:00Z",
};

export const mockWorkPackage = {
  id: 101,
  subject: "Test Task",
  description: "A test task",
  type: "Task",
  status: "New",
  priority: "Normal",
  percentageDone: 50,
  startDate: "2024-01-01",
  dueDate: "2024-01-15",
  estimatedTime: "PT8H",
  spentTime: "PT4H",
  project: { id: 1, name: "Test Project", href: "/api/v3/projects/1" },
  author: { id: 1, name: "John Doe", href: "/api/v3/users/1" },
  assignee: { id: 2, name: "Jane Smith", href: "/api/v3/users/2" },
  createdAt: "2024-01-01T00:00:00Z",
  updatedAt: "2024-01-02T00:00:00Z",
};

export const mockUser = {
  id: 1,
  login: "jdoe",
  firstName: "John",
  lastName: "Doe",
  name: "John Doe",
  email: "john@example.com",
  status: "active",
  admin: false,
  createdAt: "2024-01-01T00:00:00Z",
  updatedAt: "2024-01-01T00:00:00Z",
};

export const mockTimeEntry = {
  id: 1001,
  comment: "Worked on feature",
  spentOn: "2024-01-01",
  hours: 4.5,
  user: { id: 1, name: "John Doe", href: "/api/v3/users/1" },
  workPackage: { id: 101, subject: "Test Task", href: "/api/v3/work_packages/101" },
  project: { id: 1, name: "Test Project", href: "/api/v3/projects/1" },
  activity: { id: 1, name: "Development" },
  createdAt: "2024-01-01T12:00:00Z",
  updatedAt: "2024-01-01T12:00:00Z",
};

export const mockVersion = {
  id: 10,
  name: "v1.0.0",
  description: "First release",
  status: "open",
  sharing: "none",
  startDate: "2024-01-01",
  endDate: "2024-03-01",
  project: { id: 1, name: "Test Project", href: "/api/v3/projects/1" },
};

export const mockStatus = {
  id: 1,
  name: "New",
  color: "#00FF00",
  position: 1,
  defaultDoneRatio: 0,
  isClosed: false,
  isDefault: true,
};

export const mockPriority = {
  id: 1,
  name: "Normal",
  position: 2,
  isDefault: true,
  isActive: true,
};

export const mockQuery = {
  id: 5,
  name: "My Tasks",
  public: false,
  starred: true,
};

// HAL Collection wrapper
export function createHalCollection<T>(elements: T[], total?: number) {
  return {
    _type: "Collection",
    total: total ?? elements.length,
    count: elements.length,
    pageSize: elements.length,
    offset: 1,
    _embedded: { elements },
    _links: {
      self: { href: "/api/v3/test" },
    },
  };
}

// Mock execution context
export function createMockContext(response: any) {
  return {
    fetcher: {
      fetch: jest.fn().mockResolvedValue({ body: response }),
    },
    endpoint: "https://test.openproject.com/api/v3",
  } as any;
}
