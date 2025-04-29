
function calculateArea(width, height = 1) {
  return width * height;
}

console.log(`Area (5, 3): ${calculateArea(5, 3)}`);
console.log(`Area (5): ${calculateArea(5)}`);

const calculateAreaArrow = (width, height = 1) => width * height;

console.log(`Area (4, 2): ${calculateAreaArrow(4, 2)}`);
console.log(`Area (4): ${calculateAreaArrow(4)}`);


let message = "Global greeting";

const sayHello = (name = "User") => {
  let message = "Hello from function";
  return `${message}, ${name}`;
};

console.log(message); 
console.log(sayHello("John")); 
console.log(sayHello());
