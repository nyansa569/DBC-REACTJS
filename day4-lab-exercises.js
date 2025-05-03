// Array Methods with Map and Filter (30 minutes)
const scores = [85, 92, 78, 95, 88];
const adjustedScores = scores.map(score => score + 5);
const highScores = scores.filter(score => score >= 90);
console.log(`Adjusted scores: [${adjustedScores}]`);
console.log(`High scores: [${highScores}]`);

// Object Destructuring and Shorthand (30 minutes)
const student = { name: "Emma", age: 20, grade: "A", subjects: ["Math", "Science"] };
const { name, grade } = student;
const profile = { name, grade, school: "Tech High" };
console.log(`Name: ${name}, Grade: ${grade}`);
console.log(`Profile: ${JSON.stringify(profile)}`);

// Spread and Reduce (60 minutes)
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
const product = combined.reduce((acc, val) => acc * val, 1);
const stats = { combined, product };
console.log(`Stats: ${JSON.stringify(stats, null, 2)}`);
