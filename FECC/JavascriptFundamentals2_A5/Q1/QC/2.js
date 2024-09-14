function calculateAverage(array) {
  let sum = 0;
  let avg = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
    avg = sum / array.length;
  }

  return avg;
}

console.log("Average of Array : " + calculateAverage([3, 4, 6, 8, 9]));
