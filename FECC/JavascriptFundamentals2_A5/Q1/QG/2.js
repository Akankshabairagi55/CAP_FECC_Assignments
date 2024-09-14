function calculatePrefixPostfix(a, b) {
  let prefixA = ++a; //6
  let prefixB = ++b; //11

  let originalA = a; //5
  let originalB = b; //10

  let postfixA = originalA++; //6
  let postfixB = originalB++; //11

  return {
    prefixA: prefixA,
    prefixB: prefixB,
    postfixA: postfixA,
    postfixB: postfixB,
    finalA: originalA,
    finalB: originalB,
  };
}

const results = calculatePrefixPostfix(5, 10);
console.log("Prefix and Postfix Results:", results);
