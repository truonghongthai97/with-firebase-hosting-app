const path = require('path');
const functions = require('firebase-functions');
const next = require('next');
const routes = require('./app/routes');

const dev = process.env.NODE_ENV !== 'production';
const app = next({
  dev,
  // conf: { distDir: `${path.relative(process.cwd(), __dirname)}/next` }
  conf: { distDir: 'next' }
});
const handle = routes.getRequestHandler(app);

exports.next = functions.https.onRequest((req, res) => {
  console.log(`File: ${req.originalUrl}`); // log the page.js file that is being requested
  return app.prepare().then(() => handle(req, res));
});
