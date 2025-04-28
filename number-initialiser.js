// Number Analyzer

let numbers = [12, -5, 20, 7, -3, 15, 8];

let positiveCount = 0;
let evenSum = 0;
let maxNumber = numbers[0];

for (let num of numbers) {
  if (num > 0) {
    positiveCount++;
  }
  if (num % 2 === 0) {
    evenSum += num;
  }
  if (num > maxNumber) {
    maxNumber = num;
  }
}

let analysis = {
  positiveCount: positiveCount,
  evenSum: evenSum,
  maxNumber: maxNumber
};

console.log(`Analysis Results: Positive Count = ${analysis.positiveCount}, Even Sum = ${analysis.evenSum}, Max Number = ${analysis.maxNumber}`);
