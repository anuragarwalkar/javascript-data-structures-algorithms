const inputArray = [7, 10, 4, 3, 20, 15];

const findKthSmallestElement = (inputArray, kth) => {
  const sortedArray = inputArray.sort((a, b) => a - b);

  return sortedArray[kth - 1];
};

const result = findKthSmallestElement(inputArray, 3);

console.log(result);
