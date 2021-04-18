const minSubArrayLen = (numbers, sum) => {
  let start = 0;
  let end = 0;
  let minLength = Infinity;
  let total = 0;

  while (start < numbers.length) {
    if (total < sum && end < numbers.length) {
      total += numbers[end];
      end++;
    } else if (total >= sum) {
      minLength = Math.min(minLength, end - start);
      total -= numbers[start];
      start++;
    } else {
      break;
    }
  }

  return minLength === Infinity ? 0 : minLength;
};

const result = minSubArrayLen([2, 3, 1, 2, 4, 3], 7);

console.log(result);
