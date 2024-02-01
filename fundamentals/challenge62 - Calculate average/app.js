function findAverage(array) {
  if (array.length === 0) {
    return 0;
  }
  let sum = array.reduce((a, b) => a + b, 0);
  let n = array.length;
  let result = sum / n;
  console.log(result);
  return result;
}
