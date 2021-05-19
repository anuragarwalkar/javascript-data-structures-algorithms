const fib = (n) => {
  let a = 1;
  let b = 1;

  for (let index = 0; index < n - 2; index++) {
    const prev = b;
    b = a + b;
    a = prev;
  }

  return b;
};

const fibR = (n) => {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
};

const result = fib(4);

const result = fib(4);

console.log(result);
