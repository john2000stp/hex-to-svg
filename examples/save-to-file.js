/**
 * Save to File Example
 *
 * This example shows how to generate SVG files and save them to disk.
 */

const hexToSvg = require('../index.js');
const fs = require('fs');
const path = require('path');

console.log('=== Save to File Example ===\n');

// Create output directory if it doesn't exist
const outputDir = path.join(__dirname, 'output');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Generate and save a single SVG
console.log('1. Saving single SVG file...');
const svg = hexToSvg('#FF5733');
const filePath = path.join(outputDir, 'coral.svg');
fs.writeFileSync(filePath, svg);
console.log(`   Saved: ${filePath}`);
console.log();

// Generate and save multiple SVG files
console.log('2. Saving multiple SVG files...');
const colors = {
  red: '#E74C3C',
  green: '#2ECC71',
  blue: '#3498DB',
  yellow: '#F1C40F',
  purple: '#9B59B6'
};

Object.entries(colors).forEach(([name, color]) => {
  const svg = hexToSvg(color);
  const filePath = path.join(outputDir, `${name}.svg`);
  fs.writeFileSync(filePath, svg);
  console.log(`   Saved: ${name}.svg (${color})`);
});

console.log();
console.log(`All SVG files saved to: ${outputDir}`);
