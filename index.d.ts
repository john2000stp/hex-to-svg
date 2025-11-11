/**
 * Options for configuring the SVG dimensions
 */
export interface HexToSvgOptions {
  /**
   * Width of the SVG in pixels (default: 100)
   */
  width?: number;

  /**
   * Height of the SVG in pixels (default: 100)
   */
  height?: number;

  /**
   * Sets both width and height to the same value (overrides width/height if provided)
   */
  size?: number;
}

/**
 * Generates an SVG with the specified hex color and optional dimensions
 * @param hexColor - Hex color value (e.g., '#FF5733' or 'FF5733')
 * @param options - Optional configuration for SVG dimensions
 * @returns SVG string
 *
 * @example
 * // Default 100x100
 * hexToSvg('#FF5733')
 *
 * @example
 * // Custom size (square)
 * hexToSvg('#FF5733', { size: 200 })
 *
 * @example
 * // Custom width and height
 * hexToSvg('#FF5733', { width: 150, height: 200 })
 */
declare function hexToSvg(hexColor: string, options?: HexToSvgOptions): string;

export = hexToSvg;
