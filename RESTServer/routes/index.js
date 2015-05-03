var express = require('express');
var router = express.Router();
var glob = require("glob");
var imageList = [];

glob("../safeface-app/app/image_data/Asian/*.jpg", function (er, files) {
	imageList = files;
	return imageList;
	console.log(imageList);
});

/* GET home page. */
router.get('/', function(req, res) {

  res.jsonp({ images: imageList });
});


module.exports = router;
