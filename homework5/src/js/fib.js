function fib(num) {

  if (typeof num != "number" || num <=0) return null;
  if (num === 1) return [1];
  const fibArray = [1, 1];
  num -= 2;
  for (let i = 0; i < num; i++) {
    let prev1 = fibArray[fibArray.length - 1];
    let prev2 = fibArray[fibArray.length - 2];
    let next = prev1 + prev2;
    fibArray.push(next);
  }
  return fibArray;
};

module.exports = fib;