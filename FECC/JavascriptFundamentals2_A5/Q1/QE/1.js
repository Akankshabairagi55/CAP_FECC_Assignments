function logicalOperations(a, b) {
  const andResult = a && b;
  const orResult = a || b;
  const notA = !a;
  const notB = !b;

  return {
    AND: andResult,
    OR: orResult,
    NOT_A: notA,
    NOT_B: notB,
  };
}

console.log(logicalOperations(true, false));
console.log(logicalOperations(true, true));
console.log(logicalOperations(false, false));
