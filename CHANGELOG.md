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

## [1.1.0] - 2025-11-11

### Added
- **Custom Dimensions Support**: SVGs now default to 100x100 instead of 10x10
- Optional `options` parameter to customize SVG dimensions
- `size` option to set both width and height to the same value
- `width` and `height` options for custom dimensions
- Dimension validation (must be positive numbers)
- TypeScript interface `HexToSvgOptions` for type safety
- New test cases for custom dimensions (7 additional tests)
- New example file: `custom-dimensions.js`

### Changed
- **BREAKING**: Default SVG size changed from 10x10 to 100x100 pixels
- Updated all documentation to reflect new API
- Enhanced TypeScript definitions with options interface and examples
- Updated README with custom dimensions usage examples
- Updated API reference with complete options documentation

### Fixed
- Added validation for invalid dimensions (negative, zero, non-numbers)

### Backwards Compatibility
- Users can still create 10x10 SVGs using `{ size: 10 }`
- Original single-parameter usage still works (now generates 100x100 by default)

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
- Optional SVG attributes configuration (class, id, style)
- Additional output formats (data URI, base64)
- Performance benchmarks
- Support for additional shape types (circle, path)
