function countFalsyValues(arr) {
    let c = 0;
    for (i = 0; i < arr.length; i++) {
      if (Boolean(arr[i]) == false) {
        c++;
      }
    }
    return c;
  }
  
  console.log(
    "The number of falsy values : " +
      countFalsyValues([0, 1, "", "hello", [], null])
  );
  
  