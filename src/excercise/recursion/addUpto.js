const addUpto = (n) => {
  if (n === 0) {
    return 0;
  }
  const m = addUpto(n - 1);
  return n + m;
};

const result = addUpto(5);

console.log(result);
