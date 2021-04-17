const maxSubArraySum = (array, subArray) => {
  let maxSum = 0;
  let tempSum = 0;

  for (let i = 0; i < subArray; i++) {
    maxSum += array[i];
  }

  tempSum = maxSum;

  for (let j = subArray; j < array.length; j++) {
    tempSum = tempSum - array[j - subArray] + array[j];
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
};

const result = maxSubArraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3);

console.log(result);
