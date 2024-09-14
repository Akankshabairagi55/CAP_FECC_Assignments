function evaluateCondition(a, b, c) {
  if (a > b && a > c) {
    return "a is the largest";
  } else if (b > a && b < c) {
    return "b is between a and c";
  } else if (c < a && c < b) {
    return "c is less than a and b";
  } else {
    return "All three values are equal";
  }
}

console.log(evaluateCondition(10, 5, 2)); // a is the largest
console.log(evaluateCondition(3, 5, 10)); // b is between a and c
console.log(evaluateCondition(8, 7, 5)); // c is less than a and b
console.log(evaluateCondition(4, 4, 4)); // All three values are equal
