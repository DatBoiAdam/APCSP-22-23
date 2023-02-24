var letter = getColumn("American Sign Language Alphabet", "Letter");
var sign = getColumn("American Sign Language Alphabet", "Image");
var index;

index = randomNumber(0, sign.length-1);
setProperty("signImage", "image",sign[index]);

onEvent("letter_input", "input", function( ) {
	checkAnswer(getText("letter_input").toUpperCase());
});


//TO DO: Rewrite this function to use a parameter so that 
//       the selection global variable is no longer necessary
function checkAnswer(selection) {
  if(selection == letter[index]){
    setProperty("smile","hidden",false);
  } else{
    setProperty("frown","hidden",false);
    setProperty("correctionBox","hidden",false);
    setText("correctionBox", "The correct answer was: " + letter[index]);
  }
}


onEvent("anotherBtn", "click", function( ) {
	setProperty("smile","hidden",true);
	setProperty("frown","hidden",true);
	setProperty("correctionBox","hidden",true);
	setText("letter_input", "");
	index = randomNumber(0, sign.length-1);
  setProperty("signImage", "image",sign[index]);
});
