function compareWithValue(list, value) {
    console.log(`Comparing each element in the list with the value: ${value}`);
    console.log("------------------------------------------");
    console.log("| Number |   >   |   <   |  >=  |  <=  |");
    console.log("------------------------------------------");
  
    for (let i = 0; i < list.length; i++) {
      let num = list[i];
  
      let greaterThan = num > value;
      let lessThan = num < value;
      let greaterThanOrEqual = num >= value;
      let lessThanOrEqual = num <= value;
  
      console.log(
        `|  ${num}   |  ${greaterThan}  |  ${lessThan}  |  ${greaterThanOrEqual}  |  ${lessThanOrEqual}  |`
      );
    }
  
    console.log("------------------------------------------");
  }
  
  const numbersList = [2, 1, 3, 7, 8];
  const valueToCompare = 8;
  
  compareWithValue(numbersList, valueToCompare);