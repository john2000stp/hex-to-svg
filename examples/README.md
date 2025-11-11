# hex-to-svg Examples

This directory contains various examples demonstrating how to use the `hex-to-svg` package in different scenarios.

## Available Examples

### 1. Basic Usage (`basic-usage.js`)

Demonstrates fundamental usage with different hex color formats.

```bash
node basic-usage.js
```

**What it shows:**
- Full hex with # prefix
- Full hex without # prefix
- Short hex format (3 digits)
- Lowercase hex colors

---

### 2. Custom Dimensions (`custom-dimensions.js`)

Shows how to create SVGs with custom sizes and dimensions.

```bash
node custom-dimensions.js
```

**What it shows:**
- Default 100x100 size
- Square SVGs using size option
- Custom width and height
- Various sizes (icons, banners, large images)
- Backwards compatibility with 10x10
- Size option overriding width/height

**Output:** Creates files in `examples/output/`

---

### 3. Save to File (`save-to-file.js`)

Shows how to generate and save SVG files to disk.

```bash
node save-to-file.js
```

**What it shows:**
- Creating output directories
- Saving single SVG files
- Batch generating multiple SVG files
- File naming conventions

**Output:** Creates files in `examples/output/`

---

### 4. Error Handling (`error-handling.js`)

Demonstrates proper error handling for invalid inputs.

```bash
node error-handling.js
```

**What it shows:**
- Catching validation errors
- Different types of invalid inputs
- Using fallback colors
- Safe wrapper functions

---

### 5. Color Palette Generator (`color-palette.js`)

Generates a complete design system color palette.

```bash
node color-palette.js
```

**What it shows:**
- Organizing colors by category
- Generating multiple related colors
- Creating a color manifest
- Design system integration

**Output:** Creates files in `examples/output/palette/`

---

### 6. Express.js Server (`express-server.js`)

A complete Express.js server that serves SVG images via HTTP.

```bash
# Install Express first (if not already installed)
npm install express

# Run the server
node express-server.js
```

**Then visit:**
- `http://localhost:3001/` - API documentation
- `http://localhost:3001/svg/FF5733` - Get SVG directly
- Use POST endpoints for JSON responses

**What it shows:**
- GET endpoint for direct SVG delivery
- POST endpoint for JSON responses
- Batch generation endpoint
- Error handling in HTTP context
- API documentation page

---

## Running All Examples

To run all examples in sequence:

```bash
cd examples
node basic-usage.js
node save-to-file.js
node error-handling.js
node color-palette.js
```

## Requirements

Most examples only require the `hex-to-svg` package. The Express.js example requires:

```bash
npm install express
```

## Output

Examples that generate files will create an `output` directory:

```
examples/
├── output/
│   ├── coral.svg
│   ├── red.svg
│   ├── green.svg
│   ├── blue.svg
│   └── palette/
│       ├── primary-main.svg
│       ├── secondary-main.svg
│       └── palette.json
```

## Clean Up

To remove generated files:

```bash
rm -rf examples/output
```

## Contributing

Feel free to add more examples! Useful additions might include:
- Integration with different frameworks (React, Vue, etc.)
- CLI tool example
- Browser usage example
- Data URI generation
- Email template integration
