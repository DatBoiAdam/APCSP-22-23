//Importing Data
var cityList = getColumn("Daily Weather", "City");
var forecastNumberList = getColumn("Daily Weather", "Forecast Number");
var conditionList = getColumn("Daily Weather", "Main Condition");
var highList = getColumn("Daily Weather", "High Temperature");
var lowList = getColumn("Daily Weather", "Low Temperature");
var iconList = getColumn("Daily Weather", "Icon");
//Filtered Data Lists
var filteredCityList=[];
var filteredForecastNumberList =[];
var filteredConditionList=[];
var filteredHighList=[];
var filteredLowList=[];
var filteredIconList=[];
//Additional var for generating city to forecast
var genNum;

filter();

onEvent("forecastButton", "click", function( ) {
  genNum = randomNumber(0, filteredForecastNumberList.length-1);
  setText("cityOutput", filteredCityList[genNum]);
  setText("conditionOutput", filteredConditionList[genNum]);
  setText("highTempOutput", filteredHighList[genNum]);
  setText("lowTempOutput", filteredLowList[genNum]);
  setImageURL("iconOutput", filteredIconList[genNum]);
});

onEvent("deleteButton", "click", function( ) {
  removeItem(filteredCityList, genNum);
  removeItem(filteredForecastNumberList, genNum);
  removeItem(filteredConditionList, genNum);
  removeItem(filteredHighList, genNum);
  removeItem(filteredLowList, genNum);
  removeItem(filteredIconList, genNum);
});

function filter() {
  for (var i = 0; i < forecastNumberList.length; i++) {
    if (forecastNumberList[i] == 2) {
      appendItem(filteredCityList, cityList[i]);
      appendItem(filteredForecastNumberList, forecastNumberList[i]);
      appendItem(filteredConditionList, conditionList[i]);
      appendItem(filteredHighList, highList[i]);
      appendItem(filteredLowList, lowList[i]);
      appendItem(filteredIconList, iconList[i]);
    }
  }
}
