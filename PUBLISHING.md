# Publishing Guide

This package is published to GitHub Packages using GitHub Actions.

## Automated Publishing (Recommended)

The package automatically publishes when you create a GitHub release.

### Method 1: Create a Release via GitHub UI

1. Go to https://github.com/john2000stp/hex-to-svg/releases
2. Click "Create a new release"
3. Create a new tag (e.g., `v1.0.1`)
4. Fill in release title and notes
5. Click "Publish release"

The GitHub Actions workflow will automatically:
- Run tests
- Publish to GitHub Packages

### Method 2: Create a Release via Command Line

```bash
# Update version in package.json
npm version patch  # or minor, or major

# Push the tag
git push --follow-tags

# Create release using GitHub CLI
gh release create v1.0.1 --generate-notes
```

### Method 3: Manual Trigger

You can also manually trigger the publish workflow:

1. Go to https://github.com/john2000stp/hex-to-svg/actions
2. Select "Publish Package to GitHub Packages"
3. Click "Run workflow"
4. Click "Run workflow" button

## Installing the Package

Users can install your package from GitHub Packages:

```bash
# Create .npmrc in their project
echo "@john2000stp:registry=https://npm.pkg.github.com" >> .npmrc

# Authenticate (they need a GitHub token with read:packages scope)
npm login --registry=https://npm.pkg.github.com

# Install the package
npm install @john2000stp/hex-to-svg
```

## Version Management

Follow semantic versioning:

- **Patch** (1.0.x): Bug fixes
  ```bash
  npm version patch
  ```

- **Minor** (1.x.0): New features (backward compatible)
  ```bash
  npm version minor
  ```

- **Major** (x.0.0): Breaking changes
  ```bash
  npm version major
  ```

## Continuous Integration

Every push to `main` and all pull requests automatically run:
- Tests on Node.js 16, 18, and 20
- Package build verification

See test results at: https://github.com/john2000stp/hex-to-svg/actions

## Package URL

Once published, your package will be available at:
```
https://github.com/john2000stp/hex-to-svg/pkgs/npm/hex-to-svg
```

## Troubleshooting

### Permission Denied

If you see permission errors, ensure:
- You're logged in to npm with GitHub credentials
- Your token has `read:packages` and `write:packages` scopes
- You're using the correct registry in `.npmrc`

### Package Not Found

Make sure:
- The package has been published at least once
- You're authenticated to GitHub Packages
- The `.npmrc` file points to GitHub Packages registry
