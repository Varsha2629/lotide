let prompt = require("prompt-sync")();
//find random number
// how the Math.random() work
// find number

let number = Math.floor(Math.random() * 100);

let newGuess = [];
let count = 0;
let guess = prompt("Guess a number: ");

const guessNum = (guess, number, count, newGuess) => {
console.log(number);
if (!Number(guess)) {
  console.log(guess, "Not a number! Try again!");
  guess = prompt("Guess a number: ");
  guessNum(guess, number, count, newGuess);

} 
if (+guess === number) {

  console.log(number, `You got it! You took ${count} attempts!`);
} else if (newGuess.includes(guess)) {
  console.log(newGuess, "Already Guessed!");
  guess = prompt("Guess a number: ");
  guessNum(guess, number, count, newGuess);

} else if (number < guess) {
  count++;
  newGuess.push(guess);
  console.log(guess, "Too Low!");
  guess = prompt("Guess a number: ");
  guessNum(guess, number, count, newGuess);
  
} else if (number > guess) {
  count++;
  newGuess.push(guess);
  console.log(guess, "Too High!");
  guess = prompt("Guess a number: ");
  guessNum(guess, number, count, newGuess);

}
}

guessNum(guess, number, count, newGuess);