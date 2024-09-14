function evaluateGrade(score) {
  if (score >= 90 && score <= 100) {
    return "A";
  } else if (score >= 80 && score < 90) {
    return "B";
  } else if (score >= 70 && score < 80) {
    return "C";
  } else if (score >= 60 && score < 70) {
    return "D";
  } else if (score >= 0 && score < 60) {
    return "F";
  } else {
    return "Invalid score";
  }
}

console.log(evaluateGrade(95)); // A
console.log(evaluateGrade(85)); // B
console.log(evaluateGrade(75)); // C
console.log(evaluateGrade(65)); // D
console.log(evaluateGrade(50)); // F
console.log(evaluateGrade(-5)); // Invalid score
console.log(evaluateGrade(105)); // Invalid score
