/**
 * Express.js Server Example
 *
 * This example shows how to integrate hex-to-svg into an Express.js application
 * to serve SVG images dynamically via HTTP endpoints.
 *
 * Usage:
 *   node express-server.js
 *   Then visit: http://localhost:3000/svg/FF5733
 */

const express = require('express');
const hexToSvg = require('../index.js');

const app = express();
const PORT = 3001;

// Middleware to parse JSON
app.use(express.json());

// Route: Generate SVG from URL parameter
app.get('/svg/:color', (req, res) => {
  try {
    const svg = hexToSvg(req.params.color);
    res.type('image/svg+xml');
    res.send(svg);
  } catch (error) {
    res.status(400).json({
      error: error.message,
      example: '/svg/FF5733'
    });
  }
});

// Route: Generate SVG from JSON body
app.post('/api/generate', (req, res) => {
  try {
    const { color } = req.body;

    if (!color) {
      return res.status(400).json({ error: 'Color is required in request body' });
    }

    const svg = hexToSvg(color);
    res.json({
      color,
      svg,
      success: true
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
      success: false
    });
  }
});

// Route: Generate multiple SVGs
app.post('/api/generate-batch', (req, res) => {
  try {
    const { colors } = req.body;

    if (!Array.isArray(colors)) {
      return res.status(400).json({ error: 'Colors must be an array' });
    }

    const results = colors.map(color => {
      try {
        return {
          color,
          svg: hexToSvg(color),
          success: true
        };
      } catch (error) {
        return {
          color,
          error: error.message,
          success: false
        };
      }
    });

    res.json({ results, total: colors.length });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route: Home page with documentation
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>hex-to-svg API</title>
      <style>
        body { font-family: Arial, sans-serif; max-width: 800px; margin: 50px auto; padding: 20px; }
        code { background: #f4f4f4; padding: 2px 6px; border-radius: 3px; }
        pre { background: #f4f4f4; padding: 15px; border-radius: 5px; overflow-x: auto; }
        h1 { color: #333; }
        h2 { color: #666; margin-top: 30px; }
      </style>
    </head>
    <body>
      <h1>hex-to-svg API Server</h1>
      <p>Dynamic SVG generation from hex colors</p>

      <h2>Endpoints</h2>

      <h3>GET /svg/:color</h3>
      <p>Returns SVG image directly</p>
      <pre>curl http://localhost:${PORT}/svg/FF5733</pre>
      <p>Try it: <a href="/svg/FF5733">/svg/FF5733</a></p>

      <h3>POST /api/generate</h3>
      <p>Returns JSON with SVG string</p>
      <pre>curl -X POST http://localhost:${PORT}/api/generate \\
  -H "Content-Type: application/json" \\
  -d '{"color": "#FF5733"}'</pre>

      <h3>POST /api/generate-batch</h3>
      <p>Generate multiple SVGs at once</p>
      <pre>curl -X POST http://localhost:${PORT}/api/generate-batch \\
  -H "Content-Type: application/json" \\
  -d '{"colors": ["#FF5733", "#00BFFF", "#F0F"]}'</pre>
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`
=== hex-to-svg Express Server ===

Server running on http://localhost:${PORT}

Try these endpoints:
  • http://localhost:${PORT}/
  • http://localhost:${PORT}/svg/FF5733
  • http://localhost:${PORT}/svg/00BFFF

Press Ctrl+C to stop
  `);
});
