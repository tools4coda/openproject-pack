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

def openapi_type_to_ts(prop_def):
    """Convert OpenAPI property definition to TypeScript type"""
    if not isinstance(prop_def, dict):
        return 'any'
    
    # Handle ref
    if '$ref' in prop_def:
        ref = prop_def['$ref']
        return ref.split('/')[-1]
    
    # Handle anyOf/oneOf
    if 'anyOf' in prop_def or 'oneOf' in prop_def:
        return 'any'
    
    # Handle allOf (composition)
    if 'allOf' in prop_def:
        return 'any'
    
    openapi_type = prop_def.get('type', 'any')
    format_type = prop_def.get('format')
    
    # Handle array with items
    if openapi_type == 'array':
        items = prop_def.get('items', {})
        if '$ref' in items:
            item_type = items['$ref'].split('/')[-1]
        else:
            item_type = openapi_type_to_ts(items)
        return f"{item_type}[]"
    
    # Handle object with additionalProperties
    if openapi_type == 'object':
        if 'additionalProperties' in prop_def:
            return 'Record<string, any>'
        return 'Record<string, any>'
    
    # Type mapping
    type_map = {
        'string': 'string',
        'integer': 'number',
        'number': 'number',
        'boolean': 'boolean',
    }
    
    if format_type == 'date-time':
        return 'string'  # ISO date string
    
    return type_map.get(openapi_type, 'any')

def generate_interface(name, schema, spec):
    """Generate TypeScript interface from schema"""
    lines = [f"export interface {name} {{"]
    
    if not isinstance(schema, dict):
        lines.append("  [key: string]: any;")
        lines.append("}")
        return '\n'.join(lines)
    
    properties = schema.get('properties', {})
    required = schema.get('required', [])
    
    for prop_name, prop_def in properties.items():
        is_optional = prop_name not in required
        optional_marker = '?' if is_optional else ''
        
        try:
            ts_type = openapi_type_to_ts(prop_def)
        except Exception as e:
            ts_type = 'any'
        
        description = ''
        if isinstance(prop_def, dict):
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
    count = 0
    for name, schema in sorted(schemas.items()):
        try:
            interface = generate_interface(name, schema, spec)
            lines.append(interface)
            count += 1
        except Exception as e:
            print(f"Warning: Could not generate interface for {name}: {e}")
    
    content = '\n'.join(lines)
    
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"Generated types: {output_path}")
    print(f"  - {count} interfaces generated")

if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('--spec', required=True)
    parser.add_argument('--output', required=True)
    args = parser.parse_args()
    generate_types(args.spec, args.output)
