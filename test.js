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

// Test 6: Default size (100x100)
try {
  const svg6 = hexToSvg('#FF5733');
  if (svg6.includes('width="100"') && svg6.includes('height="100"')) {
    console.log('✓ Test 6 passed: Default size is 100x100');
    console.log(svg6);
    console.log();
  } else {
    console.error('✗ Test 6 failed: Default size should be 100x100');
  }
} catch (error) {
  console.error('✗ Test 6 failed:', error.message);
}

// Test 7: Custom size using size option
try {
  const svg7 = hexToSvg('#00BFFF', { size: 200 });
  if (svg7.includes('width="200"') && svg7.includes('height="200"')) {
    console.log('✓ Test 7 passed: Custom size 200x200');
    console.log(svg7);
    console.log();
  } else {
    console.error('✗ Test 7 failed: Size should be 200x200');
  }
} catch (error) {
  console.error('✗ Test 7 failed:', error.message);
}

// Test 8: Custom width and height
try {
  const svg8 = hexToSvg('#F0F', { width: 150, height: 250 });
  if (svg8.includes('width="150"') && svg8.includes('height="250"')) {
    console.log('✓ Test 8 passed: Custom dimensions 150x250');
    console.log(svg8);
    console.log();
  } else {
    console.error('✗ Test 8 failed: Dimensions should be 150x250');
  }
} catch (error) {
  console.error('✗ Test 8 failed:', error.message);
}

// Test 9: Size option overrides width/height
try {
  const svg9 = hexToSvg('#FF5733', { width: 100, height: 100, size: 300 });
  if (svg9.includes('width="300"') && svg9.includes('height="300"')) {
    console.log('✓ Test 9 passed: Size option overrides width/height');
    console.log(svg9);
    console.log();
  } else {
    console.error('✗ Test 9 failed: Size should override width/height');
  }
} catch (error) {
  console.error('✗ Test 9 failed:', error.message);
}

// Test 10: Invalid width (should throw error)
try {
  const svg10 = hexToSvg('#FF5733', { width: -10 });
  console.error('✗ Test 10 failed: Should have thrown error for negative width');
} catch (error) {
  console.log('✓ Test 10 passed: Correctly rejected negative width');
  console.log('Error message:', error.message);
  console.log();
}

// Test 11: Invalid height (should throw error)
try {
  const svg11 = hexToSvg('#FF5733', { height: 0 });
  console.error('✗ Test 11 failed: Should have thrown error for zero height');
} catch (error) {
  console.log('✓ Test 11 passed: Correctly rejected zero height');
  console.log('Error message:', error.message);
  console.log();
}

// Test 12: Small size (10x10 - backwards compatibility)
try {
  const svg12 = hexToSvg('#FF5733', { size: 10 });
  if (svg12.includes('width="10"') && svg12.includes('height="10"')) {
    console.log('✓ Test 12 passed: Small size 10x10 (backwards compatible)');
    console.log(svg12);
    console.log();
  } else {
    console.error('✗ Test 12 failed: Size should be 10x10');
  }
} catch (error) {
  console.error('✗ Test 12 failed:', error.message);
}

console.log('All tests completed!');
