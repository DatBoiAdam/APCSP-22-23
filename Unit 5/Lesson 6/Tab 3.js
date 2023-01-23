var phrases = ["The quick brown fox jumps over the lazy dog", 
               "To be or not to be, that is the question", 
               "Lorem ipsum dolor sit amet",
               "Try to be a rainbow in someone's cloud"
               "Just do it"];
               
onEvent("textInput", "input", function( ) {
  for (var a = 0; a <=4; a++) {
    setProperty("text"+a, "text", getText("textInput"));
  }
});
onEvent("fontSizeSlider", "change", function( ) {
  for (var a = 0; a <=4; a++) {
    setProperty("text"+a, "font-size", getNumber("fontSizeSlider"));
  }
  playSound("sound://category_tap/puzzle_game_organic_wood_block_tone_tap_3_app_click.mp3");
});
onEvent("colorDropdown", "input", function( ) {
  for (var a = 0; a <=4; a++) {
    setProperty("text"+a, "text-color", getText("colorDropdown"));
  }
});
onEvent("randomPhraseButton", "click", function( ) {
  var randomPhrase = phrases[randomNumber(0,phrases.length-1)];
  for (var a = 0; a <=4; a++) {
    setProperty("text"+a, "text", randomPhrase);
  }
  setProperty("textInput","text", randomPhrase);
  playSound("sound://category_achievements/bubbly_game_achievement_sound.mp3", false);

});
