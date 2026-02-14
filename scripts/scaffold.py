#!/usr/bin/env python3
"""
Coda Pack Scaffolder
Generates pack structure from SPEC.md
"""

import argparse
import re
from pathlib import Path

def parse_spec_md(spec_path):
    """Parse SPEC.md for pack structure"""
    with open(spec_path, 'r') as f:
        content = f.read()
    
    # Extract pack info from frontmatter
    frontmatter = {}
    fm_match = re.search(r'^---\n(.*?)\n---', content, re.DOTALL)
    if fm_match:
        for line in fm_match.group(1).split('\n'):
            if ':' in line:
                key, value = line.split(':', 1)
                frontmatter[key.strip()] = value.strip()
    
    return {'frontmatter': frontmatter}

def generate_scaffold(spec_path, output_dir):
    """Generate pack scaffold"""
    spec = parse_spec_md(spec_path)
    output = Path(output_dir)
    
    # Create directories
    (output / 'sync-tables').mkdir(parents=True, exist_ok=True)
    (output / 'formulas').mkdir(parents=True, exist_ok=True)
    (output / 'actions').mkdir(parents=True, exist_ok=True)
    (output / 'schemas').mkdir(parents=True, exist_ok=True)
    
    print(f"Created scaffold in {output_dir}")

if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('--spec', required=True)
    parser.add_argument('--output', required=True)
    args = parser.parse_args()
    generate_scaffold(args.spec, args.output)
