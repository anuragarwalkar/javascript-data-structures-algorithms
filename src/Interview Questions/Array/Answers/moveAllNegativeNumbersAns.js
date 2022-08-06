// Move all negative numbers to beginning and positive to end with
// constant extra space

const numbers = [-12, 11, -13, -5, 6, -7, 5, -3, -6];
// const numbers = [-12, -13, -5, 11, 6, -7, 5, -3, -6];

const moveAllNegativeElements = (inputNumbers) => {
  let j = 0;
  for (let i = 0; i < inputNumbers.length; i++) {
    if (inputNumbers[i] < 0) {
      if (i != j) {
        const temp = inputNumbers[i];
        inputNumbers[i] = inputNumbers[j];
        inputNumbers[j] = temp;
      }
      j++;
    }
  }

  return inputNumbers;
};

const result = moveAllNegativeElements(numbers);

console.log(result);
