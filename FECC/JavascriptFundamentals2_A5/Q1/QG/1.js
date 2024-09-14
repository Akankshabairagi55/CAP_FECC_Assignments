function prefixPostfixDemo() {
  let a = 8;

  console.log("Prefix Increment:");
  console.log("Initial value of a:", a);
  let prefixResult = ++a;
  console.log("Value after prefix increment:", prefixResult);
  console.log("Current value of a:", a);

  a = 8;

  console.log("\nPostfix Increment:");
  console.log("Initial value of a:", a);
  let postfixResult = a++;
  console.log("Value after postfix increment:", postfixResult);
  console.log("Current value of a:", a);
}

prefixPostfixDemo();
