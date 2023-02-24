var worldwideTracks = getColumn("Top 50 Worldwide", "Track Name");
var worldwideArtists = getColumn("Top 50 Worldwide", "Artist");
var worldwidePositions = getColumn("Top 50 Worldwide", "Position");

var usaTracks = getColumn("Top 50 USA", "Track Name");
var usaArtists = getColumn("Top 50 USA", "Artist");
var usaPositions = getColumn("Top 50 USA", "Position");

randomSong("Worldwide", worldwideTracks, worldwideArtists, worldwidePositions);
randomSong("USA", usaTracks, usaArtists, usaPositions);

//Returns a random index for a given list
//list {list} - a list of items
//return (number) - a randomly chosen index from the list

function randomIndex(list){
  //TO DO #1: Write the code for this function so that it returns a random index 
  var index=0;
  index= randomNumber(0,list.length-1);
  return index;
}



function randomSong(chart, trackList, artistList, positionList){
  //TO DO #2: Assign a value to the variable index using a call to randomIndex 
  var index;
  index = randomIndex(chart);
  
  var message = "Here's a random song from the " + chart + " Top 50: \n";
  message = message + trackList[index] + " by " + artistList[index] + " is at position " + positionList[index] + " in the Top 50.";
  console.log(message);
  
}
