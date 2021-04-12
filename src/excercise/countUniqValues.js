const countUniqValues = (array) => {
  let i = 0;
  let j = 1;
  let count = 0;

  while (i < array.length) {
    if (array[i] === array[j]) {
      if (j < array.length) {
        j++;
      }
    } else {
      count++;
      i = j;
      if (j < array.length - 1) {
        j++;
      }
    }
  }

  return count;
};

// const result = countUniqValues([1, 1, 1, 1, 1, 2]); //Result: 2
// const result = countUniqValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]); //Result: 7
// const result = countUniqValues([]); //Result: 0
const result = countUniqValues([-2, -1, -1, 0, 1]); //Result: 4

console.log(result);
