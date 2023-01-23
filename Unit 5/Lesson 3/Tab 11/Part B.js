var photoList = ["https://images.code.org/33b3dc2551fa95a343615c8b4a996047-image-1649881721432.png", "https://images.code.org/45602755a1d329a915172f8fd02e7a71-image-1669945308291.png", "https://images.code.org/0589842feb31f1d293f498407be180c6-image-1669945446206.png"];
var index = 0;
//var for the total photos counter
var totalPhotos = 0 ;
updateScreen();

onEvent("photo_select", "change", function( ) {
	appendItem(photoList, getImageURL("photo_select"));
	updateScreen();
});


//Add code to debug these two scroll buttons
onEvent("rightButton", "click", function( ) {
	if (index <photoList.length-1) {
	  index = index + 1;
	} else {
	  index = 0;
	}
	updateScreen();
});

onEvent("leftButton", "click", function( ) {
	if (index>0) {
	  index = index - 1;
	} else {
	  index = photoList.length-1;
	}
	updateScreen();
});

onEvent("randomButton", "click", function( ) {
	// Add code here to make this button cause a random photo to show up
	index = randomNumber(0, photoList.length-1);
	updateScreen();
});

function updateScreen(){
  setImageURL("pictureOutput", photoList[index]);
  //Add code here to make the total number of photos show in 'totalPhotosOutput' 
  totalPhotos = totalPhotos + 1;
  setText("totalPhotosOutput", totalPhotos);
}
