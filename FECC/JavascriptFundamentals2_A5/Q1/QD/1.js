function checkRelational(a, b) {
  if (a > b) {
    return "a is greater than b";
  } else if (a < b) {
    return "a is less than b";
  } else {
    return "a is equal to b";
  }
}

console.log(checkRelational(5, 3)); // a is greater than b
console.log(checkRelational(2, 8)); // a is less than b
console.log(checkRelational(4, 4)); // a is equal to b
