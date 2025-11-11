/**
 * Generates a 10x10 SVG with the specified hex color
 * @param {string} hexColor - Hex color value (e.g., '#FF5733' or 'FF5733')
 * @returns {string} SVG string
 */
function hexToSvg(hexColor) {
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

  // Generate SVG
  const svg = `<svg width="10" height="10" xmlns="http://www.w3.org/2000/svg">
  <rect width="10" height="10" fill="${color}" />
</svg>`;

  return svg;
}

module.exports = hexToSvg;
