const findMinAndMax = (array) => {
  let min = Number.MIN_SAFE_INTEGER;
  let max;
  for (const item of array) {
    if (min < item) {
      min = item;
    }
  }
  return min;
};

console.log(findMinAndMax([10, 50, 12, 16, 2]));
