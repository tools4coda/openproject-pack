#!/usr/bin/env python3
"""
OpenAPI Analyzer for Coda Pack Development
Parses OpenAPI spec and generates compact markdown summary
"""

import yaml
import json
import argparse
from pathlib import Path
from collections import defaultdict

def parse_spec(spec_path):
    """Parse OpenAPI spec from YAML or JSON"""
    path = Path(spec_path)
    with open(path, 'r', encoding='utf-8') as f:
        if path.suffix in ('.yaml', '.yml'):
            return yaml.safe_load(f)
        return json.load(f)

def extract_endpoints(spec):
    """Extract all endpoints with their methods and schemas"""
    endpoints = []
    paths = spec.get('paths', {})
    
    for path, methods in paths.items():
        for method, details in methods.items():
            if method in ('get', 'post', 'patch', 'delete', 'put'):
                endpoint = {
                    'path': path,
                    'method': method.upper(),
                    'summary': details.get('summary', ''),
                    'description': details.get('description', '')[:200],
                    'operationId': details.get('operationId', ''),
                    'tags': details.get('tags', []),
                    'parameters': [p.get('name', '') for p in details.get('parameters', [])],
                    'has_request_body': 'requestBody' in details,
                    'responses': list(details.get('responses', {}).keys())
                }
                endpoints.append(endpoint)
    
    return endpoints

def extract_schemas(spec):
    """Extract schema definitions"""
    schemas = spec.get('components', {}).get('schemas', {})
    schema_list = []
    
    for name, definition in schemas.items():
        schema_info = {
            'name': name,
            'type': definition.get('type', 'object'),
            'properties': list(definition.get('properties', {}).keys())[:20],
            'has_links': '_links' in definition.get('properties', {}),
            'has_embedded': '_embedded' in definition.get('properties', {})
        }
        schema_list.append(schema_info)
    
    return schema_list

def group_by_tag(endpoints):
    """Group endpoints by their tags"""
    grouped = defaultdict(list)
    for ep in endpoints:
        tag = ep['tags'][0] if ep['tags'] else 'Untagged'
        grouped[tag].append(ep)
    return grouped

def generate_markdown(spec_path, output_path):
    """Generate compact markdown summary"""
    spec = parse_spec(spec_path)
    endpoints = extract_endpoints(spec)
    schemas = extract_schemas(spec)
    grouped = group_by_tag(endpoints)
    
    lines = []
    lines.append(f"# OpenAPI Summary: {spec.get('info', {}).get('title', 'Unknown')}")
    lines.append(f"""
**Version:** {spec.get('info', {}).get('version', 'unknown')}  
**Total Endpoints:** {len(endpoints)}  
**Total Schemas:** {len(schemas)}
""")
    
    # Endpoints by tag
    lines.append("## Endpoints by Tag")
    for tag, eps in sorted(grouped.items()):
        lines.append(f"\n### {tag} ({len(eps)} endpoints)")
        for ep in eps:
            method_badge = f"`{ep['method']}`"
            summary = ep['summary'] or ep['operationId'] or 'No summary'
            lines.append(f"- {method_badge} `{ep['path']}` - {summary}")
    
    # GET list endpoints (candidate sync tables)
    lines.append("\n## Candidate Sync Tables (GET list endpoints)")
    list_endpoints = [ep for ep in endpoints if ep['method'] == 'GET' and '{' not in ep['path']]
    for ep in list_endpoints:
        lines.append(f"- `{ep['path']}` - {ep['summary']}")
    
    # GET single endpoints (candidate formulas)
    lines.append("\n## Candidate Formulas (GET single item)")
    single_endpoints = [ep for ep in endpoints if ep['method'] == 'GET' and '{' in ep['path']]
    for ep in single_endpoints[:20]:  # Limit to avoid too long output
        lines.append(f"- `{ep['path']}` - {ep['summary']}")
    
    # POST/PUT/PATCH endpoints (candidate actions)
    lines.append("\n## Candidate Actions (POST/PUT/PATCH)")
    write_endpoints = [ep for ep in endpoints if ep['method'] in ('POST', 'PUT', 'PATCH')]
    for ep in write_endpoints[:20]:
        lines.append(f"- `{ep['method']}` `{ep['path']}` - {ep['summary']}")
    
    # Important Schemas
    lines.append(f"\n## Key Schemas ({len(schemas)} total)")
    important_schemas = [s for s in schemas if any(k in s['name'].lower() for k in ['model', 'response', 'collection'])]
    for schema in important_schemas[:15]:
        props = ', '.join(schema['properties'][:5])
        hal = "(HAL+JSON)" if schema['has_links'] else ""
        lines.append(f"- `{schema['name']}` {hal}")
        if schema['properties']:
            lines.append(f"  - Properties: {props}...")
    
    content = '\n'.join(lines)
    
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"Generated summary: {output_path}")
    print(f"  - {len(endpoints)} endpoints")
    print(f"  - {len(schemas)} schemas")
    print(f"  - {len(list_endpoints)} list endpoints")
    print(f"  - {len(write_endpoints)} write endpoints")

if __name__ == '__main__':
    parser = argparse.ArgumentParser(description='Analyze OpenAPI spec for Coda Pack')
    parser.add_argument('--spec', required=True, help='Path to OpenAPI spec file')
    parser.add_argument('--output', required=True, help='Output markdown file')
    
    args = parser.parse_args()
    generate_markdown(args.spec, args.output)
