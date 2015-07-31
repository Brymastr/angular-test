/**
 * Created by Brycen on 2015-07-09.
 */

var BlogController = require('./controllers/BlogController');

module.exports = function(app) {

  // GET /api/posts    all posts
  app.route('/api/posts')
    .get(BlogController.getPublished);

  // GET /api/posts/published:private    posts by category
  app.route('/api/posts/:cat')
    .get(BlogController.getPostsByCategory);

  // GET /api/posts/sync    synchronize posts, repo biased
  app.route('/api/posts/sync')
    .post(BlogController.syncPosts);

  // Anything else to angular routes
  app.get('*', function(req, res) {
    res.send('Angular route > ' + req.protocol + '://' + req.get('host') + req.originalUrl);
  })
};