function isRange(value, min, max) {
  if (value >= min && value <= max) {
    return "The Value is between Min and Max Range";
  } else {
    return "The Value is  not between Min and Max Range";
  }
}

console.log(isRange(6, 1, 9));
