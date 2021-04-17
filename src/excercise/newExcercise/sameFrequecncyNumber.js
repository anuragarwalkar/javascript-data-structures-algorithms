const sameFrequency = (num, num2) => {
  const convertNumToArray = (input) => input.toString().split("");
  const convertedNumber = convertNumToArray(num);
  const convertedNumberAnother = convertNumToArray(num2);

  if (convertedNumber.length !== convertedNumberAnother.length) {
    return false;
  }

  const conObj = convertedNumber.reduce(
    (a, b) => ({ ...a, [b]: (a[b] || 0) + 1 }),
    {}
  );

  return convertedNumberAnother.every((i) => conObj[i] !== undefined);
};

const result = sameFrequency(222, 222);

console.log(result);
