var paypal = require('../modules/paypal/index');

var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var http = require('http').Server(app);

app.use(bodyParser());

app.use("/src", express.static(__dirname + '/src'));
app.use("/css", express.static(__dirname + '/css'));
app.use("/js", express.static(__dirname + '/js'));
app.use("/images", express.static(__dirname + '/images'));
app.use("/bower_components", express.static(__dirname + '/bower_components'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');

  paypal.init(app, __dirname);
});

http.listen(8001, function() {
  console.log('listening on *:8001');
});