var express = require('express');
var app = express();
var glob = require("glob");
var imageList;
 
glob("../image_data/**/*.jpg", function (er, files) {
	imageList = files;
	return imageList;
});

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  res.send('hello world');
});

app.listen(3000);