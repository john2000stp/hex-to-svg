/**
 * Error Handling Example
 *
 * This example demonstrates how to handle errors when using hex-to-svg
 * with invalid input.
 */

const hexToSvg = require('../index.js');

console.log('=== Error Handling Examples ===\n');

// Test cases with invalid inputs
const testCases = [
  { input: 'GGGGGG', description: 'Invalid hex characters' },
  { input: '#12345', description: 'Wrong length (5 digits)' },
  { input: '#1234567', description: 'Too many digits' },
  { input: '', description: 'Empty string' },
  { input: 'rgb(255, 87, 51)', description: 'RGB format instead of hex' },
  { input: '#XYZ', description: 'Invalid characters in short hex' },
];

testCases.forEach((testCase, index) => {
  console.log(`Test ${index + 1}: ${testCase.description}`);
  console.log(`Input: "${testCase.input}"`);

  try {
    const svg = hexToSvg(testCase.input);
    console.log(`Unexpected success! SVG generated.`);
  } catch (error) {
    console.log(`✓ Error caught: ${error.message}`);
  }

  console.log();
});

// Example of proper error handling in a function
function safeHexToSvg(hexColor, fallbackColor = '#000000') {
  try {
    return hexToSvg(hexColor);
  } catch (error) {
    console.warn(`Warning: Invalid color "${hexColor}". Using fallback: ${fallbackColor}`);
    return hexToSvg(fallbackColor);
  }
}

console.log('=== Using Fallback Colors ===\n');
console.log('Attempting to generate SVG with invalid color "INVALID", fallback to #000000:');
const safeSvg = safeHexToSvg('INVALID');
console.log(safeSvg);
