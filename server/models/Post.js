/**
 * Created by Brycen on 2015-07-09.
 */

var mongoose = require('mongoose');

var postSchema = mongoose.Schema({
  title: String,
  category: String,
  body: String,
  publish: Boolean,
  satisfaction: {type: Number, min: 1, max: 10},
  date_created: {type: Date, default: Date.now},
  date_updated: Date
});

module.exports = mongoose.model('Post', postSchema);