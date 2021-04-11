const same = (input, output) => {
  if (input.length !== output.length) {
    return false;
  }

  const createFrequency = (array) =>
    array.reduce((a, b) => {
      a[b] ? ++a[b] : (a[b] = 1);
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

const result = same([1, 2, 3], [4, 1, 9]);

console.log(result);
