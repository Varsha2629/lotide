let prompt = require("prompt-sync")();
//find random number
// how the Math.random() work
// find number 

let number = Math.floor(Math.random()*100);

let newGuess = [];
let count = 0;
let guess = prompt("Guess a number: ");
let foundCorrectNumber = false;
while(!foundCorrectNumber){
  if(number < guess) {   
    count++;
    newGuess.push(guess);
    console.log(number, 'Too Low!');
  
  } else if(number > guess) { 
    count++;
    newGuess.push(guess);
    console.log(number, 'Too High!');
 
  } else if(newGuess.includes(guess)) {
    console.log(newGuess);  
    console.log(newGuess, 'Already Guessed!'); 
  
  } else if(!Number(guess)) {
    console.log(guess, 'Not a number! Try again!'); 

  } else if(guess === number) {
    foundCorrectNumber = true;
    console.log(number, `You got it! You took ${count} attempts!`);
  }
  break;
}