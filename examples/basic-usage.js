/**
 * Basic Usage Example
 *
 * This example demonstrates the basic usage of hex-to-svg package
 * with different hex color formats.
 */

const hexToSvg = require('../index.js');

console.log('=== Basic Usage Examples ===\n');

// Example 1: Full hex with # prefix
console.log('1. Full hex with # prefix (#FF5733):');
const svg1 = hexToSvg('#FF5733');
console.log(svg1);
console.log();

// Example 2: Full hex without # prefix
console.log('2. Full hex without # prefix (00BFFF):');
const svg2 = hexToSvg('00BFFF');
console.log(svg2);
console.log();

// Example 3: Short hex format
console.log('3. Short hex format (#F0F):');
const svg3 = hexToSvg('#F0F');
console.log(svg3);
console.log();

// Example 4: Lowercase hex
console.log('4. Lowercase hex (#ff5733):');
const svg4 = hexToSvg('#ff5733');
console.log(svg4);
console.log();

console.log('All examples completed successfully!');
