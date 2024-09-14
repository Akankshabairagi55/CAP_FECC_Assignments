function compareThreeNumbers(a, b, c) {
  if (a === b && b === c) {
    return "All three numbers are equal";
  } else if (a > b && a > c) {
    return "a is the largest";
  } else if (b > a && b > c) {
    return "b is the largest";
  } else if (c > a && c > b) {
    return "c is the largest";
  } else if (a === b && a > c) {
    return "a and b are equal and larger than c";
  } else if (a === c && a > b) {
    return "a and c are equal and larger than b";
  } else if (b === c && b > a) {
    return "b and c are equal and larger than a";
  } else if (a === b && b < c) {
    return "a and b are equal and smaller than c";
  } else if (a === c && c < b) {
    return "a and c are equal and smaller than b";
  } else if (b === c && c < a) {
    return "b and c are equal and smaller than a";
  }
}

console.log(compareThreeNumbers(5, 5, 5)); // All three numbers are equal
console.log(compareThreeNumbers(10, 5, 3)); // a is the largest
console.log(compareThreeNumbers(4, 8, 6)); // b is the largest
console.log(compareThreeNumbers(2, 5, 10)); // c is the largest
console.log(compareThreeNumbers(7, 7, 4)); // a and b are equal and larger than c
console.log(compareThreeNumbers(6, 2, 6)); // a and c are equal and larger than b
console.log(compareThreeNumbers(1, 3, 3)); // b and c are equal and larger than a
