function twoSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        return [i, i + 1];
      }
    }
  }
}

const result = twoSum([1, 3, 7, 9, 2], 11);

console.log("result:", result);
