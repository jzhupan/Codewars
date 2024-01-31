// Count characters in your string

function count(string) {
  let obj = {};
  for (let char of string) {
    if (obj[char]) {
      obj[char] += 1;
    } else {
      obj[char] = 1;
    }
  }

  return obj;
}
