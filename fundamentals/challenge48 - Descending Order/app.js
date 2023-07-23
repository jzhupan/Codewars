/*
Descending Order

Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321

*/

function descendingOrder(n) {
  // we change 15 to '15'
  let nToString = n.toString();
  // we change '15' to ['1', '5']
  let nToArrayString = nToString.split("");
  // we sort ['1', '5'] in ascending (['1', '5']) and then reverse it to ['5', '1']
  let sortedStringArray = nToArrayString.sort().reverse();
  // then we join ['5', '1'] to '51' and then make it an int 51
  let largestInt = parseInt(sortedStringArray.join(""));

  return largestInt;
}
