//Declare Vars
var index = 0;
var reminders = [];
//Instruct user to add an input
setText("reminderOutput","Add a reminder to get started!");
//List Scrolling Pattern
onEvent("leftButton", "click", function( ) {
  if (index > 0) {
    index--;
  } else {
    index=(reminders.length-1);
  }
  updateScreen();
});
onEvent("rightButton", "click", function( ) {
  if (index < (reminders.length-1)) {
    index++;
  } else {
    index=0;
  }
  updateScreen();
});
//Append inputs to list
onEvent("addButton", "click", function( ) {
  appendItem(reminders, getText("reminderInput"));
  updateScreen;
});
//Shows selected reminder, counter position, and clears reminder inpu
function updateScreen() {
  setText("reminderOutput",reminders[index]);
  setText("countOutput",index+1);
  setText("reminderInput","");
}
