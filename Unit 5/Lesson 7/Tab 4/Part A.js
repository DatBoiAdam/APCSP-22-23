// Create and assign variable
var counter = 0;
var roll1;
var roll2;
//TO DO #1: Create a variable to keep track of the number of doubles that are rolled

var doubles = 0;


//TO DO #2: Update the conditional statement for the while loop so that there are 100 simulated rolls
while((counter < 101)){
  roll1 = randomNumber(1,6);
  roll2 = randomNumber(1,6);
  //TO DO #3: Add code that checks to see if doubles were rolled
  //If doubles were rolled, update the variable that is tracking the number of doubles
  if (roll1 == roll2) {
    doubles++;
  }
  counter++;
}


//TO DO #4: Update this console statement to include the number of doubles rolled
console.log("Number of doubles rolled out of 100 rolls total: ");
console.log(doubles);
