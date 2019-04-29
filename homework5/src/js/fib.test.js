const fib = require("./fib");

it("fib(5) return [1,1,2,3,5]", () => {
  expect(fib(5)).toEqual([1, 1, 2, 3, 5]);
});

it("summation of two previous values equal next value", () => {
  const fib10 = fib(10);
  for (let i = 2; i < 10; i++)
    expect(fib10[i - 2] + fib10[i - 1]).toBe(fib10[i]);
});

it("fib is increasing function", () => {
  const fib15 = fib(15);
  for (let i = 1; i < 15; i++) {
    expect(fib15[i - 1]).toBeLessThanOrEqual(fib15[i]);
  }
});

it("amount elements in array", () => {
  for (let i = 2; i < 10; i++) {
    let prev = fib(i);
    let next = fib(i + 1);
    expect(prev.length).toBeLessThanOrEqual(next.length);
  }
});
