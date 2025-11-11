# hex-to-svg

A lightweight, zero-dependency npm package that generates SVG images from hex color values with customizable dimensions.

[![npm version](https://img.shields.io/npm/v/hex-to-svg.svg)](https://www.npmjs.com/package/hex-to-svg)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

## Why hex-to-svg?

- **Lightweight**: Zero dependencies, minimal footprint
- **Simple API**: One function, does exactly what you need
- **Flexible Input**: Accepts hex colors with or without `#` prefix
- **Format Support**: Works with both 3-digit (`#F0F`) and 6-digit (`#FF00FF`) hex formats
- **Customizable**: Set custom dimensions or use the default 100x100
- **Type Safe**: Includes TypeScript type definitions
- **Validated**: Built-in hex color validation with helpful error messages

## Installation

This package is published to GitHub Packages.

```bash
# Add .npmrc to your project
echo "@john2000stp:registry=https://npm.pkg.github.com" >> .npmrc

# Authenticate to GitHub Packages (requires GitHub token with read:packages scope)
npm login --registry=https://npm.pkg.github.com

# Install the package
npm install @john2000stp/hex-to-svg
```

### Quick Setup for GitHub Packages

If you haven't used GitHub Packages before:

1. Create a personal access token with `read:packages` scope at https://github.com/settings/tokens
2. Run: `npm login --registry=https://npm.pkg.github.com`
   - Username: Your GitHub username
   - Password: Your personal access token
   - Email: Your GitHub email

## Quick Start

```javascript
const hexToSvg = require('@john2000stp/hex-to-svg');

// Default 100x100
const svg = hexToSvg('#FF5733');
console.log(svg);
```

Output:
```xml
<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
  <rect width="100" height="100" fill="#FF5733" />
</svg>
```

## Usage Examples

### Basic Usage

```javascript
const hexToSvg = require('@john2000stp/hex-to-svg');

// Default 100x100
const svg1 = hexToSvg('#FF5733');

// With # prefix
const svg2 = hexToSvg('#00BFFF');

// Without # prefix (automatically added)
const svg3 = hexToSvg('00BFFF');

// Short hex format (3 digits)
const svg4 = hexToSvg('#F0F');

// Lowercase works too
const svg5 = hexToSvg('#ff5733');
```

### Custom Dimensions

```javascript
const hexToSvg = require('@john2000stp/hex-to-svg');

// Square using size option
const svg1 = hexToSvg('#FF5733', { size: 200 });
// <svg width="200" height="200" ...>

// Custom width and height
const svg2 = hexToSvg('#00BFFF', { width: 300, height: 150 });
// <svg width="300" height="150" ...>

// Size overrides width/height if both provided
const svg3 = hexToSvg('#F0F', { width: 100, height: 100, size: 250 });
// <svg width="250" height="250" ...>

// Backwards compatible - small 10x10 SVG
const svg4 = hexToSvg('#FF5733', { size: 10 });
// <svg width="10" height="10" ...>
```

### Save to File

```javascript
const hexToSvg = require('@john2000stp/hex-to-svg');
const fs = require('fs');

const svg = hexToSvg('#FF5733');
fs.writeFileSync('my-color.svg', svg);
```

### Use in Express.js

```javascript
const express = require('express');
const hexToSvg = require('@john2000stp/hex-to-svg');

const app = express();

app.get('/svg/:color', (req, res) => {
  try {
    const svg = hexToSvg(req.params.color);
    res.type('image/svg+xml');
    res.send(svg);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.listen(3000);
```

### Generate Multiple SVGs

```javascript
const hexToSvg = require('@john2000stp/hex-to-svg');

const colors = ['#FF5733', '#33FF57', '#3357FF', '#F0F', '#0FF'];
const svgs = colors.map(color => ({
  color,
  svg: hexToSvg(color)
}));

console.log(svgs);
```

### Error Handling

```javascript
const hexToSvg = require('@john2000stp/hex-to-svg');

try {
  const svg = hexToSvg('GGGGGG'); // Invalid hex
} catch (error) {
  console.error(error.message);
  // Output: Invalid hex color format. Expected format: #RRGGBB or #RGB
}
```

### TypeScript Usage

```typescript
import hexToSvg = require('@john2000stp/hex-to-svg');
import type { HexToSvgOptions } from '@john2000stp/hex-to-svg';

// Default size
const svg1: string = hexToSvg('#FF5733');

// With custom dimensions
const svg2: string = hexToSvg('#00BFFF', { size: 200 });

// With custom width and height
const options: HexToSvgOptions = { width: 300, height: 150 };
const svg3: string = hexToSvg('#F0F', options);

// With error handling
function generateColorSvg(color: string, options?: HexToSvgOptions): string {
  try {
    return hexToSvg(color, options);
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Failed to generate SVG: ${error.message}`);
    }
    throw error;
  }
}
```

### Dynamic Color Palette

```javascript
const hexToSvg = require('@john2000stp/hex-to-svg');
const fs = require('fs');

const palette = {
  primary: '#667eea',
  secondary: '#764ba2',
  success: '#00D9A5',
  warning: '#FFB800',
  danger: '#E74C3C'
};

Object.entries(palette).forEach(([name, color]) => {
  const svg = hexToSvg(color);
  fs.writeFileSync(`colors/${name}.svg`, svg);
});
```

## API Reference

### `hexToSvg(hexColor: string, options?: HexToSvgOptions): string`

Generates an SVG rectangle with the specified hex color and optional dimensions.

#### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `hexColor` | `string` | Yes | Hex color value in format `#RRGGBB`, `RRGGBB`, `#RGB`, or `RGB` |
| `options` | `HexToSvgOptions` | No | Optional configuration for SVG dimensions |

#### HexToSvgOptions

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `width` | `number` | `100` | Width of the SVG in pixels |
| `height` | `number` | `100` | Height of the SVG in pixels |
| `size` | `number` | - | Sets both width and height (overrides width/height if provided) |

#### Returns

| Type | Description |
|------|-------------|
| `string` | SVG markup as a string with the specified dimensions |

#### Throws

| Error | Condition |
|-------|-----------|
| `Error` | When the hex color format is invalid |
| `Error` | When width or height is not a positive number |

#### Valid Hex Color Formats

- `#FF5733` - 6-digit hex with hash
- `FF5733` - 6-digit hex without hash
- `#F0F` - 3-digit hex with hash
- `F0F` - 3-digit hex without hash
- Case insensitive: `#ff5733` and `#FF5733` both work

#### Invalid Inputs

**Invalid Hex Colors:**
- `GGGGGG` - Invalid hex characters
- `#12345` - Wrong length (must be 3 or 6)
- `#1234567` - Too many digits
- Empty string
- `rgb(255, 87, 51)` - Not a hex format

**Invalid Dimensions:**
- Negative numbers: `{ width: -10 }`
- Zero: `{ height: 0 }`
- Non-numbers: `{ size: "100" }`
- Infinity or NaN

## SVG Output Format

The generated SVG follows this structure:

```xml
<svg width="[WIDTH]" height="[HEIGHT]" xmlns="http://www.w3.org/2000/svg">
  <rect width="[WIDTH]" height="[HEIGHT]" fill="[YOUR_COLOR]" />
</svg>
```

- **Dimensions**: Customizable (default: 100x100 pixels)
- **Namespace**: Standard SVG namespace
- **Elements**: Single `<rect>` element filling entire canvas
- **Color**: Applied via the `fill` attribute

## Use Cases

- **Color Swatches**: Generate visual color samples for documentation
- **Design Systems**: Create color palette assets programmatically
- **Testing**: Generate test SVG files with specific colors
- **Web Apps**: Dynamically create colored icons or placeholders
- **Avatars**: Simple colored square avatars based on user data
- **Data Visualization**: Color-coded indicators or markers
- **Email Templates**: Inline SVG color blocks (email-safe)

## Browser Compatibility

The generated SVG is compatible with all modern browsers and can be:
- Embedded inline in HTML
- Saved as `.svg` files
- Used as data URIs
- Rendered in email clients (with proper encoding)

## Performance

- **Fast**: Simple string concatenation, no heavy processing
- **Efficient**: Zero dependencies means minimal package size
- **Scalable**: Can generate thousands of SVGs per second

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Running Tests

```bash
npm test
```

## License

ISC - See LICENSE file for details

## Related Packages

- [color](https://www.npmjs.com/package/color) - Color conversion and manipulation
- [svg-builder](https://www.npmjs.com/package/svg-builder) - More complex SVG generation
- [sharp](https://www.npmjs.com/package/sharp) - High-performance image processing

## Support

If you encounter any issues or have questions, please [open an issue](https://github.com/john2000stp/hex-to-svg/issues) on GitHub.

---

Made with ❤️ for the npm community
