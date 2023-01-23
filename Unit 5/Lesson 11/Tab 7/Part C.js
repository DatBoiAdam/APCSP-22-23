//Setup lists
var dates = getColumn("US Gas Prices", "Date");
var seattle = getColumn("US Gas Prices", "Seattle");
//TO DO #1: Set up another list for the city you'd like to add
var newYork = getColumn("US Gas Prices", "New York City");

//Setup filtered lists
var filteredSeattle = [];

//TO DO #2: Set up a filtered list for the city you are adding
var filteredNewYork = [];


onEvent("yearDropdown", "change", function( ) {
	//Clearing the filtered list so that it starts empty each time
	//the event is tiggered
	filteredSeattle = [];
	
	//TO DO #3: Add code to clear the filtered list you added above
	filteredNewYork = [];
	
	filter();
	
	seattleAverage();
	
	//TO DO #6: Add in a call to the function you declared below
	newYorkAverage();
	
});

function filter(){
  var yearPicked = getText("yearDropdown");
	for (var i = 0; i < dates.length; i++) {
   var date = dates[i];
   var year = date.substring(date.length-4,date.length);
   if(year == yearPicked){
     appendItem(filteredSeattle,seattle[i]);
     //TO DO #4: Add code so that the items from your city list
     //get added to the appropriate filtered list
     appendItem(filteredNewYork,newYork[i]);
   }
	}
}

function seattleAverage(){
  var seattleTotal = 0;
	for (var k = 0; k < filteredSeattle.length; k++) {
   var price = filteredSeattle[k];
   seattleTotal = seattleTotal + price;
	}
 
	var seattleAve = Math.round(seattleTotal/filteredSeattle.length*100)/100;
 
	setText("seattleLabel","Seattle\n" + seattleAve);
  
}

//TO DO #5: Declare a function for the city you chose 
//that calculates the average of the values in the filtered list
//and updates the appropriate label on the screen
function newYorkAverage(){
  var newYorkTotal = 0;
	for (var k = 0; k < filteredNewYork.length; k++) {
   var price = filteredNewYork[k];
   newYorkTotal = newYorkTotal + price;
	}
 
	var newYorkAve = Math.round(newYorkTotal/filteredNewYork.length*100)/100;
 
	setText("newYorkLabel","New York\n" + newYorkAve);
}
