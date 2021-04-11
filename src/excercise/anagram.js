const anagram = (inputOne, inputTwo) => {
  if (inputOne.length !== inputTwo.length) {
    return;
  }
  const generateObj = (array) =>
    array.reduce((a, b) => {
      a[b] = (a[b] || 0) + 1;
      return a;
    }, {});
  const convertedInputOne = generateObj(inputOne.split(""));

  return inputTwo.split("").every((e) => {
    const isValid = convertedInputOne[e] !== undefined;
    if (convertedInputOne[e]) {
      if (convertedInputOne[e] > 1) {
        convertedInputOne[e] = --convertedInputOne[e];
      } else {
        delete convertedInputOne[e];
      }
    }
    return isValid;
  });
};

const result = anagram("texttwisttime", "timetwisttext");

console.log(result);
