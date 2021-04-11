const same = (input, output) => {
  const converted = input.reduce((a, b) => {
    a[b] ? null : (a[b] = b);
    return a;
  }, {});

  let isSame = output.every(function (e) {
    const sqrt = Math.sqrt(e);
    return converted[sqrt] !== undefined;
  });

  return isSame;
};

const result = same([1, 2, 3], [4, 1, 9]);

console.log(result);
