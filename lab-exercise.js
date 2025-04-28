// Variable Declaration and Reassignment
let price = 100;
const taxRate = 0.1;
let quantity = 3;
let totalCost = price * quantity * (1 + taxRate);
console.log("Total cost with quantity 3: $" + totalCost.toFixed(2));
quantity = 5;
totalCost = price * quantity * (1 + taxRate);
console.log("Total cost with quantity 5: $" + totalCost.toFixed(2));

// Data Type Manipulation
let score = 95;
let message = "Great job!";
let isPassing = true;
let grades = [90, 85, 88];
let student = { name: "Emma", age: 20 };

console.log(typeof score);
console.log(typeof message);
console.log(typeof isPassing);
console.log(typeof grades);
console.log(typeof student);
console.log("Second grade:", grades[1]);
console.log("Student's name:", student.name);

// Operators Practice
let a = 10;
let b = 3;

console.log("Arithmetic:");
console.log(a + b);
console.log(a % b);
console.log(a ** 2);

console.log("Comparison:");
console.log(a > b);
console.log(a === b);

console.log("Logical:");
console.log((a > 5) && (b < 5));

console.log("Assignment:");
a += 5;
console.log(a);

console.log("Type Coercion:");
console.log(5 == "5");
console.log(5 === "5");
