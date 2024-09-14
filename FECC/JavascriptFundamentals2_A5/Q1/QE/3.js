function evaluateConditions(a, b, c) {
  if (a > 0 && b < 0) {
    return "a is positive and b is negative";
  } else if (b === 0 || isNaN(c)) {
    return "b is zero or c is not a number";
  } else if (a !== b || c > 10) {
    return "a is not equal to b or c is greater than 10";
  } else {
    return "None of these  condition met";
  }
}

console.log(evaluateConditions(6, -6, 3)); // a is positive and b is negative
console.log(evaluateConditions(3, 0, "cde")); // b is zero or c is not a number
console.log(evaluateConditions(87, 54, 12)); // a is not equal to b or c is greater than 10
console.log(evaluateConditions(7, 7, 5)); // None of these  condition met
