// Create and assign starting values for the list
var songList = ["The Twist", "Stop! In the Name of Love", "Dancing in the Streets", "The Locomotion", "Happy Together", "I Wanna Hold Your Hand", "Build Me Up Buttercup", "Crimson and Clover", "Stand By Me", "I'm a Believer"];

updateScreen();

onEvent("updateButton", "click", function( ) {
  // Add code to get the name of the new song and its position in the list
  var newSong = getText("songInput");
  var rank = getNumber("rankDropdown");
  
  
  // Add code to insert the song into the list at the position indicated
  insertItem(songList, rank-1, newSong);
  
  
  // Add code to remove the last item from the list
  removeItem(songList, songList.length-1);
  
  
  playSound("sound://category_slide/whoosh_4.mp3");
  updateScreen();
});

onEvent("rankDropdown", "change", function( ) {
  playSound("sound://category_board_games/card_dealing_single.mp3");
});

onEvent("songInput", "click", function( ) {
  playSound("sound://category_pop/deep_bubble_notification.mp3");
});

function updateScreen(){
  setProperty("songsOutput", "text", songList.join("\n"));
}
