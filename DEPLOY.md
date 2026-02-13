# OpenProject Pack - Deployment Guide

## Coda Deployment

Since the API key couldn't be retrieved automatically, please deploy manually:

### Option 1: Interactive
```bash
cd /home/neo/.openclaw/workspace/coda-packs/openproject-pack
npx coda register
# Enter your Coda API key when prompted
npx coda create src/pack.ts --name "OpenProject"
npx coda upload src/pack.ts
```

### Option 2: With API Key
```bash
cd /home/neo/.openclaw/workspace/coda-packs/openproject-pack
export CODA_API_KEY=your-api-key-here
echo "{\"apiKey\": \"$CODA_API_KEY\"}" > .coda.json
npx coda create src/pack.ts --name "OpenProject" --description "Complete OpenProject API integration"
npx coda upload src/pack.ts
```

## Configuration

### Self-hosted OpenProject
1. In Coda, when connecting the pack, enter your OpenProject URL
2. Username: `apikey`
3. Password: Your OpenProject API key (from your account page)

### OpenProject Cloud
1. Use `https://community.openproject.org` or your instance URL
2. Same credentials as above

## Features

- **Sync Tables**: Projects, WorkPackages
- **Formulas**: GetProject, GetWorkPackage
- **Actions**: CreateWorkPackage

## Build Status

✅ TypeScript compilation successful
✅ All types properly defined
✅ Ready for deployment
