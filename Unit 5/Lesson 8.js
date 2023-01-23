// List of icons to randomly choose between
var iconsList = ["icon://fa-heart", 
                 "icon://fa-music", 
                 "icon://fa-smile-o", 
                 "icon://fa-globe", 
                 "icon://fa-tree", 
                 "icon://fa-bolt", 
                 "icon://fa-moon-o",
                 "icon://fa-star"];
var icon;
color();
locations();
shapes();
onEvent("colorsButton", "click", function( ) {
  color();
  playSound("sound://category_retro/retro_game_bit_coin_1.mp3", false);
  });
onEvent("locationsButton", "click", function( ) {
  locations();
   playSound("sound://category_retro/retro_game_bit_coin_1.mp3", false);
});
onEvent("shapesButton", "click", function( ) {
  shapes();
  playSound("sound://category_retro/retro_game_bit_coin_1.mp3", false);
});
function color() {
  for (var i = 0; i < 19; i++) {
    setProperty("icon"+i, "icon-color", rgb(randomNumber(1, 255), randomNumber(1, 255), randomNumber(1, 255), 1));
    setProperty("homeScreen", "background-color", rgb(randomNumber(1, 255), randomNumber(1, 255), randomNumber(1, 255), 0.3));
  }
}
function locations() {
  for (var i = 0; i < 19; i++) {
    setProperty("icon"+i, "y", randomNumber(1, 350));
    setProperty("icon"+i, "x", randomNumber(1, 250));
    setProperty("icon"+i, "height", randomNumber(40,150));
    setProperty("icon"+i, "width", getProperty("icon"+i, "height"));
  }
}
function shapes() {
  icon = randomNumber(0, iconsList.length-1);
  for (var i = 0; i < 19; i++) {
    setProperty("icon"+i, "image", iconsList[icon]);
  }
}
