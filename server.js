var express = require('express');
var bodyParser = require('body-parser');
var http = require('http');
var Promise = require('bluebird');
var mongoose = Promise.promisifyAll(require('mongoose'));


var app = express();

app.use(express.static(__dirname + '/'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

mongoose.connect("mongodb://brycen:Munlanding93@ds041992.mongolab.com:41992/portfolio");

require('./server/routes')(app);

var port = 9000;
http.createServer(app).listen(port, function() {
  console.log("server listening on port " + port);
});