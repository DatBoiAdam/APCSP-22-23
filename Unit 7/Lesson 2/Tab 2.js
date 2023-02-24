var wordList = getColumn("Words", "Word");
var filteredWordList = [];

filter(getNumber("lengthDropdown"), getText("letterDropdown").toLowerCase());

onEvent("lengthDropdown", "change", function(){
  filter(getNumber("lengthDropdown"), getText("letterDropdown").toLowerCase());
});

onEvent("letterDropdown", "change", function(){
  filter(getNumber("lengthDropdown"), getText("letterDropdown").toLowerCase());
});


function filter(len, letter){
  showElement("waitingImage");
  showElement("unclickable");
  filteredWordList = [];
  setText("output", "");
  
  for(var i=0; i<wordList.length; i++){
    if(wordList[i].length == len && wordList[i].substring(0,getText("letterDropdown").length)==letter){
        appendItem(filteredWordList, wordList[i]);
    } 
  }
  
  if(filteredWordList.length == 0){
    appendItem(filteredWordList, "No Options Available");
  }
  
  hideElement("waitingImage");
  hideElement("unclickable");
  setText("output", filteredWordList.join(", "));
}
