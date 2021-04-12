const sumZero = (array) => {
  let left = 0;
  let right = array.length - 1;

  while (right > left) {
    const sum = array[left] + array[right];
    if (sum === 0) {
      return [array[left], array[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
  return null;
};

const result = sumZero([-4, -3, -2, -1, 0, 5, 10]);

console.log(result);
