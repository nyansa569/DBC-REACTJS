// Task 1: Shopping Cart Total with Discounts
const cart = [
    { name: "Shirt", price: 20, quantity: 2 },
    { name: "Pants", price: 40, quantity: 4 },
    { name: "Hat", price: 15, quantity: 1 }
  ];  
  
  let subtotal = 0;
  let totalQuantity = 0;
  
  for (let item of cart) {
    subtotal += item.price * item.quantity;
    totalQuantity += item.quantity;
  }
  
  let discountRate = 0;
  if (totalQuantity > 10) {
    discountRate = 0.2;
  } else if (totalQuantity > 5) {
    discountRate = 0.1;
  }
  
  const discountAmount = subtotal * discountRate;
  const finalTotal = subtotal - discountAmount;
  
  console.log("Subtotal: $" + subtotal.toFixed(2));
  console.log("Discount: $" + discountAmount.toFixed(2));
  console.log("Final Total: $" + finalTotal.toFixed(2));
  
  // Task 2: Type Validator
  const values = [42, "hello", true, null, { name: "Bob" }, [1, 2]];
  
  const typeCounts = {
    number: 0,
    string: 0,
    boolean: 0,
    object: 0,
    array: 0,
    undefined: 0
  };
  
  for (let value of values) {
    if (Array.isArray(value)) {
      typeCounts.array += 1;
    } else if (value === null) {
      typeCounts.object += 1;
    } else {
      typeCounts[typeof value] += 1;
    }
  }
  
  console.log(typeCounts);
  
  // Task 3: Compound Interest Calculator
  let principal = 1000;
  let rate = 0.05;
  let years = 5;
  
  if (principal > 0 && rate > 0 && years > 0) {
    const finalAmount = principal * Math.pow(1 + rate, years);
    const interestEarned = finalAmount - principal;
    const results = {
      finalAmount: finalAmount.toFixed(2),
      interestEarned: interestEarned.toFixed(2)
    };
    console.log(results);
  } else {
    console.log("Invalid input: principal, rate, and years must be positive numbers.");
  }
  
