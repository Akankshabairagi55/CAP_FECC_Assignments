function checkEvenOdd(number) {
  if (number % 2 === 0) {
    return "The number is even";
  } else {
    return "The number is odd";
  }
}

console.log(checkEvenOdd(4)); // The number is even
console.log(checkEvenOdd(7)); // The number is odd
console.log(checkEvenOdd(0)); // The number is even
console.log(checkEvenOdd(-3)); // The number is odd
