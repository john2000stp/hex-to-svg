const hexToSvg = require('./index.js');

console.log('Testing hex-to-svg package...\n');

// Test 1: Full hex with #
try {
  const svg1 = hexToSvg('#FF5733');
  console.log('✓ Test 1 passed: Full hex with #');
  console.log(svg1);
  console.log();
} catch (error) {
  console.error('✗ Test 1 failed:', error.message);
}

// Test 2: Full hex without #
try {
  const svg2 = hexToSvg('00BFFF');
  console.log('✓ Test 2 passed: Full hex without #');
  console.log(svg2);
  console.log();
} catch (error) {
  console.error('✗ Test 2 failed:', error.message);
}

// Test 3: Short hex
try {
  const svg3 = hexToSvg('#F0F');
  console.log('✓ Test 3 passed: Short hex');
  console.log(svg3);
  console.log();
} catch (error) {
  console.error('✗ Test 3 failed:', error.message);
}

// Test 4: Invalid hex (should throw error)
try {
  const svg4 = hexToSvg('GGGGGG');
  console.error('✗ Test 4 failed: Should have thrown error for invalid hex');
} catch (error) {
  console.log('✓ Test 4 passed: Correctly rejected invalid hex');
  console.log('Error message:', error.message);
  console.log();
}

// Test 5: Empty string (should throw error)
try {
  const svg5 = hexToSvg('');
  console.error('✗ Test 5 failed: Should have thrown error for empty string');
} catch (error) {
  console.log('✓ Test 5 passed: Correctly rejected empty string');
  console.log('Error message:', error.message);
  console.log();
}

console.log('All tests completed!');
