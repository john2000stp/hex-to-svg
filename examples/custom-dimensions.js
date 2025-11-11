/**
 * Custom Dimensions Example
 *
 * This example demonstrates how to create SVGs with custom dimensions
 * using the size, width, and height options.
 */

const hexToSvg = require('../index.js');
const fs = require('fs');
const path = require('path');

console.log('=== Custom Dimensions Examples ===\n');

// Create output directory
const outputDir = path.join(__dirname, 'output');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Example 1: Default size (100x100)
console.log('1. Default size (100x100):');
const svg1 = hexToSvg('#FF5733');
console.log(svg1);
fs.writeFileSync(path.join(outputDir, 'default-100x100.svg'), svg1);
console.log('   Saved: default-100x100.svg\n');

// Example 2: Square using size option (200x200)
console.log('2. Square using size option (200x200):');
const svg2 = hexToSvg('#00BFFF', { size: 200 });
console.log(svg2);
fs.writeFileSync(path.join(outputDir, 'square-200x200.svg'), svg2);
console.log('   Saved: square-200x200.svg\n');

// Example 3: Custom width and height (300x150)
console.log('3. Custom width and height (300x150):');
const svg3 = hexToSvg('#F0F', { width: 300, height: 150 });
console.log(svg3);
fs.writeFileSync(path.join(outputDir, 'rectangle-300x150.svg'), svg3);
console.log('   Saved: rectangle-300x150.svg\n');

// Example 4: Large square (500x500)
console.log('4. Large square (500x500):');
const svg4 = hexToSvg('#2ECC71', { size: 500 });
console.log(svg4);
fs.writeFileSync(path.join(outputDir, 'large-500x500.svg'), svg4);
console.log('   Saved: large-500x500.svg\n');

// Example 5: Small icon size (32x32)
console.log('5. Small icon size (32x32):');
const svg5 = hexToSvg('#9B59B6', { size: 32 });
console.log(svg5);
fs.writeFileSync(path.join(outputDir, 'icon-32x32.svg'), svg5);
console.log('   Saved: icon-32x32.svg\n');

// Example 6: Backwards compatible (10x10)
console.log('6. Backwards compatible (10x10):');
const svg6 = hexToSvg('#E74C3C', { size: 10 });
console.log(svg6);
fs.writeFileSync(path.join(outputDir, 'tiny-10x10.svg'), svg6);
console.log('   Saved: tiny-10x10.svg\n');

// Example 7: Banner dimensions (800x100)
console.log('7. Banner dimensions (800x100):');
const svg7 = hexToSvg('#F1C40F', { width: 800, height: 100 });
console.log(svg7);
fs.writeFileSync(path.join(outputDir, 'banner-800x100.svg'), svg7);
console.log('   Saved: banner-800x100.svg\n');

// Example 8: Size overrides width/height
console.log('8. Size overrides width/height (250x250):');
const svg8 = hexToSvg('#3498DB', { width: 100, height: 100, size: 250 });
console.log(svg8);
fs.writeFileSync(path.join(outputDir, 'override-250x250.svg'), svg8);
console.log('   Saved: override-250x250.svg\n');

console.log(`All SVG files saved to: ${outputDir}`);
