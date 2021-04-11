const same = (input, output) => {
  if (input.length !== output.length) {
    return false;
  }

  const createFrequency = (array) =>
    array.reduce((a, b) => {
      a[b] = (a[b] || 0) + 1;
      return a;
    }, {});

  const convertedInput = createFrequency(input);

  let isSame = output.every(function (e) {
    const sqrt = Math.sqrt(e);
    const isValid = convertedInput[sqrt] !== undefined;
    if (convertedInput[sqrt]) {
      if (convertedInput[sqrt] > 1) {
        convertedInput[sqrt] = --convertedInput[sqrt];
      } else {
        delete convertedInput[sqrt];
      }
    }
    return isValid;
  });

  return isSame;
};

const result = same([1, 2, 3, 2, 5], [9, 1, 4, 4, 25]);

console.log(result);
