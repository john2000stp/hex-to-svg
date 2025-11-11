/**
 * Generates an SVG with the specified hex color and optional dimensions
 * @param {string} hexColor - Hex color value (e.g., '#FF5733' or 'FF5733')
 * @param {object} options - Optional configuration
 * @param {number} options.width - Width of the SVG (default: 100)
 * @param {number} options.height - Height of the SVG (default: 100)
 * @param {number} options.size - Sets both width and height (overrides width/height if provided)
 * @returns {string} SVG string
 */
function hexToSvg(hexColor, options = {}) {
  // Normalize hex color (add # if missing)
  let color = hexColor.trim();
  if (!color.startsWith('#')) {
    color = '#' + color;
  }

  // Validate hex color format
  const hexRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
  if (!hexRegex.test(color)) {
    throw new Error('Invalid hex color format. Expected format: #RRGGBB or #RGB');
  }

  // Parse dimensions
  let width = 100;
  let height = 100;

  if (options.size !== undefined) {
    // If size is provided, use it for both width and height
    width = options.size;
    height = options.size;
  } else {
    // Otherwise use individual width/height if provided
    if (options.width !== undefined) {
      width = options.width;
    }
    if (options.height !== undefined) {
      height = options.height;
    }
  }

  // Validate dimensions
  if (typeof width !== 'number' || width <= 0 || !isFinite(width)) {
    throw new Error('Width must be a positive number');
  }
  if (typeof height !== 'number' || height <= 0 || !isFinite(height)) {
    throw new Error('Height must be a positive number');
  }

  // Generate SVG
  const svg = `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${width}" height="${height}" fill="${color}" />
</svg>`;

  return svg;
}

module.exports = hexToSvg;
