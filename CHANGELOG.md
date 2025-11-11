# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2025-11-11

### Added
- Initial release of hex-to-svg package
- Core function to generate 10x10 SVG from hex color values
- Support for both 6-digit (#RRGGBB) and 3-digit (#RGB) hex formats
- Automatic # prefix addition for hex colors without it
- Input validation with helpful error messages
- TypeScript type definitions (index.d.ts)
- Comprehensive test suite
- Full documentation with usage examples
- Zero dependencies

### Features
- Case-insensitive hex color input
- Validates hex color format before SVG generation
- Returns standard SVG markup string
- Compatible with Node.js and browser environments

### Documentation
- README.md with comprehensive examples
- API reference documentation
- TypeScript usage examples
- Express.js integration example
- CHANGELOG.md for version tracking
- LICENSE file (ISC)

## [Unreleased]

### Planned
- Support for custom SVG dimensions
- Optional SVG attributes configuration
- Additional output formats (data URI, base64)
- Performance benchmarks
