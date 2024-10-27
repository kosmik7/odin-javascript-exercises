const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(array) {
  return array.reduce((sum, number) => sum += number, 0);
};

const multiply = function(array) {
  return array.reduce((sum, number) => sum *= number);
};

const power = function(a, b) {
  return Math.pow(a, b);
};

const factorial = function(a) {
  let sum = 1;
  for (let i = 1; i <= a; i++) {
    sum *= i;
  }
  return sum
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
