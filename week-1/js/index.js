function calculate(operation, a, b) {
  const operations = {
    add: () => a + b,
    subtract: () => a - b,
    multiply: () => a * b,
    divide: () => (b === 0 ? "can not divide with 0" : a / b),
  };
  const result = operations[operation];
  console.log(`Phuong thuc: ${result }`);
  
  return result
    ? result()
    : "Operation not recognized. Please use add, subtract, multiply, or divide.";
}

// Testing the function
console.log(calculate("add", 5, 3));
console.log(calculate("subtract", 5, 3));
console.log(calculate("multiply", 5, 3));
console.log(calculate("divide", 9, 3));
console.log(calculate("divide", 5, 0));
console.log(calculate("modulus", 5, 3));
