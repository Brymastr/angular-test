/**
 * Created by Brycen on 2015-07-09.
 */

var Post = require('../models/Post');
var glob = require('glob');

exports.getPublished = function(req, res) {
  Post.find({}, function(err, posts) {
    if(!err)
      res.json(posts);
    else
      res.send(err.message);
  });
};

exports.getPostsByCategory = function(req, res) {
  Post.find({category: req.params.cat}, function(err, posts) {
    if(!posts)
      res.sendStatus(204);
    else if(!err)
      res.json(posts);
    else
      res.send(err.message);
  });
};

exports.syncPosts = function(req, res) {
  // Find out what posts need to be deleted or added
  // Compile new posts
  Post.find({})
    .then(function(dbPosts) {
      glob('server/posts/*.md', function(err, posts) {
        if(!err)
          return posts;
      });
      // compare localPosts with dbPosts

    });

};

function uploadPosts(posts) {

}

function deletePosts(posts) {

}