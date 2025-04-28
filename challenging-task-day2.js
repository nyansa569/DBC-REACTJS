// Task 1: Prime Number Finder

let limit = 20;
let primes = [];

for (let num = 2; num <= limit; num++) {
  let isPrime = true;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    primes.push(num);
  }
}

primes.forEach(prime => {
  console.log(`Prime: ${prime}`);
});


// Task 2: Unique Character Counter

let text = "Hello World";
let lowerText = text.toLowerCase();
let charCounts = {};

for (let char of lowerText) {
  if (char >= 'a' && char <= 'z') {
    charCounts[char] = (charCounts[char] || 0) + 1;
  }
}

console.log(`Unique character counts: ${JSON.stringify(charCounts, null, 2)}`);


// Task 3: FizzBuzz with Custom Rules

let rules = { 3: "Fizz", 5: "Buzz", 7: "Bang" };
let limitFizzBuzz = 21;
let numbers = [];

for (let i = 1; i <= limitFizzBuzz; i++) {
  numbers.push(i);
}

numbers.forEach(num => {
  let output = "";
  for (let key in rules) {
    if (num % key == 0) {
      output += rules[key];
    }
  }
  console.log(`${num}: ${output || num}`);
});
