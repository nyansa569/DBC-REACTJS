let score = 88;
let grade;

if (score >= 90) {
  grade = "A";
} else if (score >= 80) {
  grade = "B";
} else if (score >= 70) {
  grade = "C";
} else {
  grade = "F";
}

console.log("Your score is:",score,"And your grade is:",grade);


let numbers = [10, 15, 20, 25, 30];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 5 === 0) {
    console.log(numbers[i]);
  }
}

for (let num of numbers) {
  if (num % 5 === 0) {
    console.log(num);
  }
}

numbers.forEach(function(num) {
  if (num % 5 === 0) {
    console.log(num);
  }
});


let count = 10;

while (count > 0) {
  console.log(count);
  if (count === 5) {
    console.log("Stopped early!");
    break;
  }
  count--;
}

for (let i = 10; i > 0; i--) {
  if (i === 5) {
    console.log(i);
    console.log("Stopped early!");
    break;
  }
  console.log(i);
}
