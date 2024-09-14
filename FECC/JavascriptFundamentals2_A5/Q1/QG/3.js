function complexOperation(a, b) {
  console.log(`Initial values -> a: ${a}, b: ${b}`);

  let result1 = ++a + b++;
  console.log(`After ++a + b++ -> a: ${a}, b: ${b}, result1: ${result1}`);

  let result2 = a-- + --b;
  console.log(`After a-- + --b -> a: ${a}, b: ${b}, result2: ${result2}`);

  let result3 = --a + ++b;
  console.log(`After ++a + ++b -> a: ${a}, b: ${b}, result3: ${result3}`);

  let result4 = a++ + b--;
  console.log(`After a++ + b-- -> a: ${a}, b: ${b}, result4: ${result4}`);

  console.log(`Final values -> a: ${a}, b: ${b}`);

  return {
    finalA: a,
    finalB: b,
    result1: result1,
    result2: result2,
    result3: result3,
    result4: result4,
  };
}
let results = complexOperation(5, 8);
console.log(results);
