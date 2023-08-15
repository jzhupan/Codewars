/*
Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!

Examples (a, b) --> output (explanation)
(1, 0) --> 1 (1 + 0 = 1)
(1, 2) --> 3 (1 + 2 = 3)
(0, 1) --> 1 (0 + 1 = 1)
(1, 1) --> 1 (1 since both are same)
(-1, 0) --> -1 (-1 + 0 = -1)
(-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
*/

function getSum(a, b) {
  if (a === b) {
    return a;
  }

  let array = [];

  if (a > b) {
    for (let i = b; i <= a; i++) {
      array.push(i);
    }
  } else {
    for (let i = a; i <= b; i++) {
      array.push(i);
    }
  }

  let sum = 0;

  array.forEach((num) => {
    sum += num;
  });

  return sum;
}
