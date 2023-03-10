// Setting up lists from dataset "Air Quality Index by US County"
var stateList = getColumn("Air Quality Index by US County", "State");
var daysWithAQIList = getColumn("Air Quality Index by US County", "Days with AQI");
var goodDaysList = getColumn("Air Quality Index by US County", "Good Days");
var moderateDaysList = getColumn("Air Quality Index by US County", "Moderate Days");
var unhealthyGroupsList = getColumn("Air Quality Index by US County", "Unhealthy for Sensitive Groups Days");
var unhealthyDaysList = getColumn("Air Quality Index by US County", "Unhealthy Days");
var veryUnhealthyDaysList = getColumn("Air Quality Index by US County", "Very Unhealthy Days");
var hazardousDaysList = getColumn("Air Quality Index by US County", "Hazardous Days");

//Setting up filtered lists
var filteredDaysWithAQIList = [];
var filteredGoodDaysList = [];
var filteredModerateDaysList = [];
var filteredUnhealthyGroupsList = [];
var filteredUnhealthyDaysList = [];
var filteredveryUnhealthyDaysList = [];
var filteredHazardousDaysList = [];

//Filtering lists based on the state chosen by the user
onEvent("stateDropdown", "change", function( ) {
	filteredDaysWithAQIList = [];
	 filteredGoodDaysList = [];
	 filteredModerateDaysList = [];
	 filteredUnhealthyGroupsList = [];
	 filteredUnhealthyDaysList = [];
	 filteredveryUnhealthyDaysList = [];
	 filteredHazardousDaysList = [];
	var selectedState = getText("stateDropdown");
	for (var i = 0; i < stateList.length; i++) {
	  var state = stateList[i];
	  if (state == selectedState) {
	    appendItem(filteredDaysWithAQIList, daysWithAQIList[i]);
	    appendItem(filteredGoodDaysList, goodDaysList[i]);
	    appendItem(filteredModerateDaysList, moderateDaysList[i]);
	    appendItem(filteredUnhealthyGroupsList, unhealthyGroupsList[i]);
	    appendItem(filteredUnhealthyDaysList, unhealthyDaysList[i]);
	    appendItem(filteredveryUnhealthyDaysList, veryUnhealthyDaysList[i]);
	    appendItem(filteredHazardousDaysList, hazardousDaysList[i]);
	  }
	}
	
});


onEvent("displayButton", "click", function( ) {
	//Use these variables to keep track of the total number of each type of day
	var totalDaysWithAQI = 0;
	var totalGoodDays = 0;
	var totalModerateDays = 0;
	var totalUnhealthyGroupsDays = 0;
	var totalUnhealthyDays = 0;
	var totalVeryUnhealthyDays = 0;
	var totalHazardousDays = 0;
	
	var percentGoodDays;
	var percentModerateDays;
	var percentUnhealthyGroupsDays;
	var percentUnhealthyDays;
	var percentVeryUnhealthyDays;
	var percentHazardousDays;
	
	//This for loop totals up the number of each type of day
	for (var i = 0; i < filteredDaysWithAQIList.length; i++) {
	  totalDaysWithAQI = totalDaysWithAQI + filteredDaysWithAQIList[i];
	  totalGoodDays = totalGoodDays + filteredGoodDaysList[i];
	  totalModerateDays = totalModerateDays + filteredModerateDaysList[i];
	  totalUnhealthyGroupsDays = totalUnhealthyGroupsDays + filteredUnhealthyGroupsList[i];
	  totalUnhealthyDays = totalUnhealthyDays + filteredUnhealthyDaysList[i];
	  totalVeryUnhealthyDays = totalVeryUnhealthyDays + filteredveryUnhealthyDaysList[i];
	  totalHazardousDays = totalHazardousDays + filteredHazardousDaysList[i];
	}
	//Add code here to calculate and display the percent of each type of day
	//in the appropriate output label
	percentGoodDays= totalGoodDays/365;
	percentModerateDays= totalModerateDays/365;
	percentUnhealthyGroupsDays= totalUnhealthyGroupsDays/365;
	percentUnhealthyDays= totalUnhealthyDays/365;
	percentVeryUnhealthyDays= totalVeryUnhealthyDays/365;
	percentHazardousDays= totalHazardousDays/365;
	
	setText("goodOutput", percentGoodDays);
	setText("moderateOutput", percentModerateDays);
	setText("unhealthyGroupsOutput", percentUnhealthyGroupsDays);
	setText("unhealthyOutput", percentUnhealthyDays);
	setText("veryUnhealthyOutput", percentVeryUnhealthyDays);
	setText("hazardousOutput", percentHazardousDays);
	
});


//These allow the user to find out more about Air Quality Index on a separate screen
onEvent("info", "click", function( ) {
	setScreen("infoScreen");
});
onEvent("backBtn", "click", function( ) {
	setScreen("homeScreen");
});
