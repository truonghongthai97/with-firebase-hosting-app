const routes = require('next-routes');

module.exports = routes()
  .add('home', '/home', 'index')
  .add('about', '/about', 'about');
