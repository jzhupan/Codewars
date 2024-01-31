//You're a square!

var isSquare = function (n) {
  let root = Math.sqrt(n);
  if (root % 1 === 0) {
    return true;
  } else {
    return false;
  }
};
