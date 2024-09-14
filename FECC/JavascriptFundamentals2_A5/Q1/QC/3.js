function calculateExpression(a, b, c) {
  let res = ((a + b) * c) / (b - a);

  if (b - a == 0) {
    return console.log("divisor can not be zero");
  } else {
    return console.log(res);
  }
}

calculateExpression(8, 8, 6);
calculateExpression(12, 14, 15);
calculateExpression(45, 27, 0);
calculateExpression(63, 97, 15);
