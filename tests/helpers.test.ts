import { extractCollection, hasNextPage, getNextPageUrl, getTotalCount, buildFilters } from '../src/helpers';
import { createHalCollection, mockProject } from './mocks';

describe('Helpers', () => {
  describe('extractCollection', () => {
    it('should extract elements from HAL collection', () => {
      const collection = createHalCollection([mockProject]);
      const result = extractCollection<{id: number}>(collection);
      expect(result).toHaveLength(1);
      expect(result[0].id).toBe(1);
    });

    it('should return empty array for invalid response', () => {
      const result = extractCollection({});
      expect(result).toEqual([]);
    });

    it('should return empty array for missing embedded', () => {
      const result = extractCollection({ _embedded: {} });
      expect(result).toEqual([]);
    });
  });

  describe('hasNextPage', () => {
    it('should return true when next link exists', () => {
      const response = {
        _links: { next: { href: '/api/v3/projects?offset=2' } }
      };
      expect(hasNextPage(response)).toBe(true);
    });

    it('should return false when no next link', () => {
      const response = { _links: {} };
      expect(hasNextPage(response)).toBe(false);
    });
  });

  describe('getNextPageUrl', () => {
    it('should return next page URL', () => {
      const response = {
        _links: { next: { href: '/api/v3/projects?offset=2' } }
      };
      expect(getNextPageUrl(response)).toBe('/api/v3/projects?offset=2');
    });

    it('should return undefined when no next link', () => {
      const response = { _links: {} };
      expect(getNextPageUrl(response)).toBeUndefined();
    });
  });

  describe('getTotalCount', () => {
    it('should return total count from response', () => {
      const response = { total: 100 };
      expect(getTotalCount(response)).toBe(100);
    });

    it('should return 0 when total is missing', () => {
      const response = {};
      expect(getTotalCount(response)).toBe(0);
    });
  });

  describe('buildFilters', () => {
    it('should build filter JSON', () => {
      const filters = { status: 'active', project_id: 1 };
      const result = buildFilters(filters);
      const parsed = JSON.parse(result);
      expect(parsed).toHaveLength(2);
    });

    it('should skip undefined values', () => {
      const filters = { status: 'active', project_id: undefined };
      const result = buildFilters(filters);
      const parsed = JSON.parse(result);
      expect(parsed).toHaveLength(1);
    });
  });
});
