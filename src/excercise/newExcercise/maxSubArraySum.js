const maxSubArraySum = (array, length) => {
  let b = length;
  let max = null;
  let tempSum = null;

  for (let i = 0; i < length; i++) {
    max += array[i];
  }

  tempSum = max;

  while (b < array.length) {
    tempSum = tempSum - array[b - length] + array[b];
    max = Math.max(tempSum, max);
    b++;
  }

  return max;
};

// const result = maxSubArraySum([100, 200, 300, 400], 2);
const result = maxSubArraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4);

console.log(result);
