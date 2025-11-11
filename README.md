# hex-to-svg

A lightweight, zero-dependency npm package that generates 10x10 SVG images from hex color values.

[![npm version](https://img.shields.io/npm/v/hex-to-svg.svg)](https://www.npmjs.com/package/hex-to-svg)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

## Why hex-to-svg?

- **Lightweight**: Zero dependencies, minimal footprint
- **Simple API**: One function, does exactly what you need
- **Flexible Input**: Accepts hex colors with or without `#` prefix
- **Format Support**: Works with both 3-digit (`#F0F`) and 6-digit (`#FF00FF`) hex formats
- **Type Safe**: Includes TypeScript type definitions
- **Validated**: Built-in hex color validation with helpful error messages

## Installation

```bash
npm install hex-to-svg
```

## Quick Start

```javascript
const hexToSvg = require('hex-to-svg');

const svg = hexToSvg('#FF5733');
console.log(svg);
```

Output:
```xml
<svg width="10" height="10" xmlns="http://www.w3.org/2000/svg">
  <rect width="10" height="10" fill="#FF5733" />
</svg>
```

## Usage Examples

### Basic Usage

```javascript
const hexToSvg = require('hex-to-svg');

// With # prefix
const svg1 = hexToSvg('#FF5733');

// Without # prefix (automatically added)
const svg2 = hexToSvg('00BFFF');

// Short hex format (3 digits)
const svg3 = hexToSvg('#F0F');

// Lowercase works too
const svg4 = hexToSvg('#ff5733');
```

### Save to File

```javascript
const hexToSvg = require('hex-to-svg');
const fs = require('fs');

const svg = hexToSvg('#FF5733');
fs.writeFileSync('my-color.svg', svg);
```

### Use in Express.js

```javascript
const express = require('express');
const hexToSvg = require('hex-to-svg');

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
const hexToSvg = require('hex-to-svg');

const colors = ['#FF5733', '#33FF57', '#3357FF', '#F0F', '#0FF'];
const svgs = colors.map(color => ({
  color,
  svg: hexToSvg(color)
}));

console.log(svgs);
```

### Error Handling

```javascript
const hexToSvg = require('hex-to-svg');

try {
  const svg = hexToSvg('GGGGGG'); // Invalid hex
} catch (error) {
  console.error(error.message);
  // Output: Invalid hex color format. Expected format: #RRGGBB or #RGB
}
```

### TypeScript Usage

```typescript
import hexToSvg = require('hex-to-svg');

const svg: string = hexToSvg('#FF5733');

// With error handling
function generateColorSvg(color: string): string {
  try {
    return hexToSvg(color);
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
const hexToSvg = require('hex-to-svg');
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

### `hexToSvg(hexColor: string): string`

Generates a 10x10 SVG rectangle with the specified hex color.

#### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `hexColor` | `string` | Hex color value in format `#RRGGBB`, `RRGGBB`, `#RGB`, or `RGB` |

#### Returns

| Type | Description |
|------|-------------|
| `string` | SVG markup as a string with width and height of 10 pixels |

#### Throws

| Error | Condition |
|-------|-----------|
| `Error` | When the hex color format is invalid |

#### Valid Input Formats

- `#FF5733` - 6-digit hex with hash
- `FF5733` - 6-digit hex without hash
- `#F0F` - 3-digit hex with hash
- `F0F` - 3-digit hex without hash
- Case insensitive: `#ff5733` and `#FF5733` both work

#### Invalid Input Examples

- `GGGGGG` - Invalid hex characters
- `#12345` - Wrong length (must be 3 or 6)
- `#1234567` - Too many digits
- Empty string
- `rgb(255, 87, 51)` - Not a hex format

## SVG Output Format

The generated SVG follows this structure:

```xml
<svg width="10" height="10" xmlns="http://www.w3.org/2000/svg">
  <rect width="10" height="10" fill="[YOUR_COLOR]" />
</svg>
```

- **Dimensions**: 10x10 pixels
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
