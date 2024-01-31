//Square(n) Sum

function squareSum(numbers) {
  let sum;
  let squaredNums = [];
  for (let i = 0; i < numbers.length; i++) {
    squaredNums.push(Math.pow(numbers[i], 2));
  }
  sum = squaredNums.reduce((a, b) => a + b, 0);

  return sum;
}
