Webcam.set({
	width: 320,
	height: 240,
	dest_width: 640,
	dest_height: 480,
	image_format: 'jpeg'
});
Webcam.on( "live", function () {
	document.getElementById("ready").innerHTML = '<h4>Ready?</h4><a href="testinstructions.html" class="btn btn-safeface" aria-label="Take the SafeFace Test"><span class="glyphicon glyphicon-play-circle" aria-hidden="true"></span> Continue</a><br />';
});
Webcam.on( "error", function (err) {
	document.getElementById("ready").innerHTML = '<div class="alert alert-danger"><span class="glyphicon glyphicon-remove-sign"></span>&emsp;' + err + '</div>';
});
Webcam.attach( "#webcam" );