// Task 1: Memoized Factorial
const createFactorial = () => {
  const cache = {};
  return (n) => {
    if (!Number.isInteger(n) || n < 0) return "Invalid input";
    if (cache[n]) return cache[n];
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    cache[n] = result;
    return result;
  };
};

const factorial = createFactorial();
console.log(`Factorial(3): ${factorial(3)}`);
console.log(`Factorial(5): ${factorial(5)}`);
console.log(`Factorial(3): ${factorial(3)}`);
console.log(`Factorial(-1): ${factorial(-1)}`);

// Task 2: String Formatter
const formatString = (str, options = { uppercase: false, reverse: false, trim: false }) => {
  if (typeof str !== "string") return "Invalid input";
  let result = str;
  if (options.trim) result = result.trim();
  if (options.uppercase) result = result.toUpperCase();
  if (options.reverse) result = result.split("").reverse().join("");
  return `Formatted: "${result}"`;
};

console.log(formatString("hello", { uppercase: true }));
console.log(formatString("World", { reverse: true }));
console.log(formatString(123, { uppercase: true }));

// Task 3: Custom Array Filter
const createFilter = (condition) => {
  let count = 0;
  return (arr) => {
    if (!Array.isArray(arr) || !["even", "odd", "positive"].includes(condition)) {
      return "Invalid input";
    }
    count++;
    let result = [];
    if (condition === "even") result = arr.filter(num => num % 2 === 0);
    if (condition === "odd") result = arr.filter(num => num % 2 !== 0);
    if (condition === "positive") result = arr.filter(num => num > 0);
    console.log(`Call ${count}:`, result);
    return result;
  };
};

const evenFilter = createFilter("even");
evenFilter([1, 2, 3, 4]);
evenFilter([6, 7, 8, 10]);
