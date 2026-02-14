import * as coda from "@codahq/packs-sdk";

// Base URL pattern for OpenProject
const BASE_URL_TEMPLATE = "https://{instance}.openproject.com/api/v3";

/**
 * Fetch data from OpenProject API
 */
export async function fetchFromAPI(
  context: coda.ExecutionContext,
  endpoint: string,
  options: {
    method?: "GET" | "POST" | "PATCH" | "PUT" | "DELETE";
    body?: object;
    params?: Record<string, string | number | undefined>;
  } = {}
): Promise<any> {
  // Get base URL from connection
  const baseUrl = context.endpoint || BASE_URL_TEMPLATE.replace('{instance}', 'app');
  
  // Build URL with query params
  let url = `${baseUrl}${endpoint}`;
  if (options.params) {
    const searchParams = new URLSearchParams();
    for (const [key, value] of Object.entries(options.params)) {
      if (value !== undefined && value !== null) {
        searchParams.append(key, String(value));
      }
    }
    const queryString = searchParams.toString();
    if (queryString) {
      url += (url.includes('?') ? '&' : '?') + queryString;
    }
  }

  const fetchOptions: coda.FetchRequest = {
    url,
    method: options.method || 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/hal+json',
    },
  };
  
  if (options.body) {
    fetchOptions.body = JSON.stringify(options.body);
  }

  const response = await context.fetcher.fetch(fetchOptions);
  return response.body;
}

/**
 * Extract embedded elements from HAL collection response
 */
export function extractCollection<T>(response: any): T[] {
  if (response._embedded && Array.isArray(response._embedded.elements)) {
    return response._embedded.elements;
  }
  return [];
}

/**
 * Get total count from HAL collection
 */
export function getTotalCount(response: any): number {
  return response.total || 0;
}

/**
 * Check if there's a next page
 */
export function hasNextPage(response: any): boolean {
  return response._links && !!response._links.next;
}

/**
 * Get next page URL
 */
export function getNextPageUrl(response: any): string | undefined {
  return response._links?.next?.href;
}

/**
 * Build filters for work package queries
 */
export function buildFilters(filters: Record<string, any>): string {
  const filterArray = Object.entries(filters)
    .filter(([_, value]) => value !== undefined && value !== null)
    .map(([key, value]) => {
      if (typeof value === 'object') {
        return { [key]: value };
      }
      return { [key]: { operator: '=', values: [String(value)] } };
    });
  
  return JSON.stringify(filterArray);
}
