#!/usr/bin/env python3
"""
TypeScript Interface Generator
Generates TypeScript interfaces from OpenAPI schemas
"""

import yaml
import json
import argparse
from pathlib import Path

def parse_spec(spec_path):
    path = Path(spec_path)
    with open(path, 'r', encoding='utf-8') as f:
        if path.suffix in ('.yaml', '.yml'):
            return yaml.safe_load(f)
        return json.load(f)

def openapi_type_to_ts(openapi_type, format=None, ref=None):
    """Convert OpenAPI types to TypeScript types"""
    if ref:
        # Extract type name from #/components/schemas/Name
        return ref.split('/')[-1]
    
    type_map = {
        'string': 'string',
        'integer': 'number',
        'number': 'number',
        'boolean': 'boolean',
        'array': 'any[]',
        'object': 'Record<string, any>'
    }
    
    if format == 'date-time':
        return 'string'  # ISO date string
    
    return type_map.get(openapi_type, 'any')

def generate_interface(name, schema, spec):
    """Generate TypeScript interface from schema"""
    lines = [f"export interface {name} {{"]
    
    properties = schema.get('properties', {})
    required = schema.get('required', [])
    
    for prop_name, prop_def in properties.items():
        is_optional = prop_name not in required
        optional_marker = '?' if is_optional else ''
        
        # Handle ref
        if '$ref' in prop_def:
            ts_type = openapi_type_to_ts(ref=prop_def['$ref'])
        # Handle array with items
        elif prop_def.get('type') == 'array' and 'items' in prop_def:
            if '$ref' in prop_def['items']:
                item_type = openapi_type_to_ts(ref=prop_def['items']['$ref'])
            else:
                item_type = openapi_type_to_ts(prop_def['items'].get('type'))
            ts_type = f"{item_type}[]"
        # Handle object with additionalProperties
        elif prop_def.get('type') == 'object' and 'additionalProperties' in prop_def:
            ts_type = 'Record<string, any>'
        # Handle anyOf/oneOf
        elif 'anyOf' in prop_def or 'oneOf' in prop_def:
            ts_type = 'any'
        else:
            ts_type = openapi_type_to_ts(
                prop_def.get('type'),
                prop_def.get('format')
            )
        
        description = prop_def.get('description', '')
        if description:
            lines.append(f"  /** {description[:80]} */")
        lines.append(f"  {prop_name}{optional_marker}: {ts_type};")
    
    lines.append("}")
    lines.append("")
    return '\n'.join(lines)

def generate_types(spec_path, output_path):
    """Generate TypeScript types file"""
    spec = parse_spec(spec_path)
    schemas = spec.get('components', {}).get('schemas', {})
    
    lines = [
        "// Auto-generated from OpenAPI spec",
        "// Do not edit manually",
        "",
        "import * as coda from '@codahq/packs-sdk';",
        ""
    ]
    
    # Generate interfaces for all schemas
    for name, schema in sorted(schemas.items()):
        if schema.get('type') == 'object' or 'properties' in schema:
            try:
                interface = generate_interface(name, schema, spec)
                lines.append(interface)
            except Exception as e:
                print(f"Warning: Could not generate interface for {name}: {e}")
    
    content = '\n'.join(lines)
    
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"Generated types: {output_path}")
    print(f"  - {len(schemas)} interfaces generated")

if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('--spec', required=True)
    parser.add_argument('--output', required=True)
    args = parser.parse_args()
    generate_types(args.spec, args.output)
