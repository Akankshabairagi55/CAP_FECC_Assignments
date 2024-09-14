function calculateDiscount(price, isMember) {
  let discount;

  if (isMember) {
    discount = 0.1;
  } else {
    discount = 0;
  }

  const discountedPrice = price * (1 - discount);

  return discountedPrice;
}

console.log(calculateDiscount(100, true));
console.log(calculateDiscount(100, false));
console.log(calculateDiscount(50, true));
console.log(calculateDiscount(50, false));
