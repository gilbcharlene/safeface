Webcam.attach( '#my_camera' );
// Paths to Test Images (insert a list of images here)
var testImages = ["images/AF0304_1100_30R.jpg", "images/AF0305_3112_30R.jpg","images/AF0304_1101_NE.jpg","images/AF0308_2201_90L.jpg"];
var observations = [];
var app_key = "appid-here";
var client_id = "clientid-here";
var snap = null;

var success = function(result) {
	observations.push(result.persons[0].expressions);
}

var error = function(error) {
	console.log(error);
}

function startSlideshow() {
	document.getElementById('slideshow').src = testImages[0];
	snap = setTimeout(function(){
	if( testImages.length > 1 ){
	nextImage();
	} else{ displayResults(); }
	},4000);
}

function take_snapshot() {
	Webcam.snap( function( data_uri ){
	var imgBlob = FACE.util.dataURItoBlob( data_uri );
	FACE.sendImage( imgBlob,success,error,app_key,client_id,"expressions");
	} );
}

function nextImage() {	
		
		take_snapshot();
		testImages.shift();
		startSlideshow();
}

function displayResults() {
	document.getElementById("slideshow-container").style.display = "none";
	/*var outputHTML = "<ul>";
	for(i = 0; i < takenImages.length; i++)
	{
		outputHTML += "<li><img src='" + takenImages[i] + "'/></li>";
	}
	outputHTML += "</ul>";
	document.getElementById("result_images").innerHTML = outputHTML;*/
	Webcam.reset();
	drawTable();
}

function drawTable() {
	var data = new google.visualization.DataTable();
	data.addColumn('number', 'Neutral');
	data.addColumn('number', 'Happiness');
	data.addColumn('number', 'Sadness');
	data.addColumn('number', 'Surprise');
	data.addColumn('number', 'Anger');
	data.addColumn('number', 'Disgust');
	data.addColumn('number', 'Fear');
	for(i = 0; i < observations.length; i+=2)
	{
		data.addRows([[observations[i].neutral.value,observations[i].happiness.value,observations[i].sadness.value,observations[i].surprise.value,observations[i].anger.value,observations[i].disgust.value,observations[i].fear.value]]);
	}
	
	var table = new google.visualization.Table(document.getElementById('observations'));
	
	table.draw(data);
}

