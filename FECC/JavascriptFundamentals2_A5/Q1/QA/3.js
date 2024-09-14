function filterFalsyValues(arr) {
    TruthyValuesArr = [];
  
    for (i = 0; i < arr.length; i++) {
      if (Boolean(arr[i]) == true) {
        TruthyValuesArr.push(arr[i]);
      }
    }
  
    return TruthyValuesArr;
  }
  
  console.log(filterFalsyValues([0, 1, "", "hello", [], null]));
  console.log(filterFalsyValues(["akanksha", "", undefined, NaN, "hello world"]));