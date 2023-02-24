var totalPrice = 0;
var selections = [];


onEvent("coffeeBtn", "click", function( ) {
  price(getText("sizeDropdown"),1.55," Coffee");
});

onEvent("latteBtn", "click", function( ) {
	price(getText("sizeDropdown"),3.25," Latte");
});

onEvent("mochaBtn", "click", function( ) {
	price(getText("sizeDropdown"),3.75," Mocha");
});

onEvent("teaBtn", "click", function( ) {
  price(getText("sizeDropdown"),2.50," Tea");
});

function price(size,itemCost,type){
  appendItem(selections, size + type);
  sizeUp(size,itemCost);
  totalPrice = totalPrice + itemCost;
}
function sizeUp(size, itemCost){
  if(size == "16oz"){
    itemCost = itemCost * 1.25;
  } else if(size == "20oz"){
    itemCost = itemCost * 1.5;
  } else {
    itemCost = itemCost;
  }
  itemCost = Math.round(itemCost*100)/100;
  setText("itemCostOutput", itemCost);
}
onEvent("nextBtn", "click", function( ) {
	var order;
	order = selections.join("\n");
	setText("summaryOutput", order);
	totalPrice = Math.round(totalPrice*100)/100;
	setText("totalOutput","$"+totalPrice);
	setScreen("totalScreen");
});
