/**
 * Color Palette Generator Example
 *
 * This example demonstrates generating a complete color palette
 * for a design system with SVG files.
 */

const hexToSvg = require('../index.js');
const fs = require('fs');
const path = require('path');

console.log('=== Color Palette Generator ===\n');

// Define a complete design system color palette
const designSystem = {
  primary: {
    main: '#667eea',
    light: '#a0aef7',
    dark: '#4c63d2'
  },
  secondary: {
    main: '#764ba2',
    light: '#a57fd4',
    dark: '#5a3a7d'
  },
  neutral: {
    black: '#000000',
    gray900: '#1a1a1a',
    gray700: '#4a4a4a',
    gray500: '#9b9b9b',
    gray300: '#d4d4d4',
    gray100: '#f0f0f0',
    white: '#ffffff'
  },
  semantic: {
    success: '#00D9A5',
    warning: '#FFB800',
    error: '#E74C3C',
    info: '#3498DB'
  }
};

// Create output directory
const outputDir = path.join(__dirname, 'output', 'palette');
fs.mkdirSync(outputDir, { recursive: true });

// Generate SVG for each color
let totalColors = 0;

Object.entries(designSystem).forEach(([category, colors]) => {
  console.log(`${category.toUpperCase()}:`);

  Object.entries(colors).forEach(([name, hex]) => {
    const svg = hexToSvg(hex);
    const fileName = `${category}-${name}.svg`;
    const filePath = path.join(outputDir, fileName);

    fs.writeFileSync(filePath, svg);
    console.log(`  ✓ ${name.padEnd(10)} ${hex.padEnd(10)} → ${fileName}`);
    totalColors++;
  });

  console.log();
});

console.log(`Generated ${totalColors} SVG files in: ${outputDir}`);

// Also generate a JSON manifest
const manifest = {
  generatedAt: new Date().toISOString(),
  totalColors,
  palette: designSystem
};

const manifestPath = path.join(outputDir, 'palette.json');
fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
console.log(`\nPalette manifest saved: ${manifestPath}`);
