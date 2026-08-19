const { app } = require('../server');

module.exports = (req, res) => {
  const route = typeof req.query.route === 'string' ? req.query.route : '';
  req.url = route.startsWith('/') ? route : `/${route}`;
  return app(req, res);
};
