function isEligible(age, hasPermission) {
  if (age >= 18 && hasPermission) {
    return "Eligible";
  } else {
    return "Not Eligible";
  }
}

console.log(isEligible(23, true)); // Eligible
console.log(isEligible(7, true)); // Not Eligible
console.log(isEligible(18, false)); // Not Eligible
console.log(isEligible(22, false)); // Not Eligible
