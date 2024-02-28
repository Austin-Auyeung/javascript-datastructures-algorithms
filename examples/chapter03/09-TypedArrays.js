const length = 5;
const int16 = new Int16Array(length);

const array16 = [];
array16.length = length;

for (let i = 0; i < length; i++) {
  int16[i] = i + 1;
}

console.log(int16);

// Int8Array();
// Uint8Array();
// Uint8ClampedArray();
// Int16Array();
// Uint16Array();
// Int32Array();
// Uint32Array();
// Float32Array();
// Float64Array();

// http://www.html5rocks.com/en/tutorials/webgl/typed_arrays/
// http://www.i-programmer.info/programming/javascript/6135-javascript-data-structures-typed-arrays.html

// JavaScript Guessing Game

const fruits = ["apple", "banana", "orange"];
let mysteryFruit = fruits[Math.floor(Math.random() * fruits.length)]

let guessCount = 0;

let guess = prompt("Guess a fruit (and you have 3 tries)")

while (guess.toLowerCase() !== mysteryFruit && guessCount < 3) {
  guess++;
  guess = prompt(`Nope, try again. You have ${3 - guessCount} tries left.`);
}

if (guess.toLowerCase() === mysteryFruit) {
  alert(`Congratulations! You guessed the mystery fruit in ${guessCount + 1} tries`);
}
else {
  alert(`Sorry you ran out of tries. The mystery fruit was ${mysteryFruit}.`);
}