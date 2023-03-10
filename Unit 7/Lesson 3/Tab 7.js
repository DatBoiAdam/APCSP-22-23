onEvent("complimentButton", "click", function(){
  updateScreen();
});


// Combines a random greeting in various languages with a name
// name {string} - the name of a person
// return {string} - the complete greeting which combines the random greeting with a name
function randomGreeting(name){
  var greetings = ["Good day, ", "Bonne journée, ", "Buenos dias, ", "Magandang araw, ", "美好的一天, "];
  var statement = greetings[randomNumber(0, greetings.length-1)] + name + ".";
  return statement;
}

// Write comments for the randomCompliment function here
// Picks a random complement, combines it with a name, and then returns it
// name {string} - name of the person
// return {string} - the complete complement which is combined with the name parameter
function randomCompliment(name){
  var compliments = [", you have incredible hair!", ", you are astonishingly smart!", 
  ", your fashion sense is unmatched!", ", your smile lights up the room!", 
  ", you are uncommonly talented!", ", you are ridiculously funny!"];
  var statement = name + compliments[randomNumber(0, compliments.length-1)];
  return statement;
}

function updateScreen(){
  // Get the user's name from the display and store in a variable

  var name = getText("nameInput");
  // Create a local variable textOutput to store the return values of both randomGreeting and Random Compliment
  // when both are called with the user's name passed through the parameter
  var textOutput = (randomGreeting(name) + " ")+ randomCompliment(name);



  // Display textOutput on the screen in the output display area
  setText("output", textOutput);
  
}
