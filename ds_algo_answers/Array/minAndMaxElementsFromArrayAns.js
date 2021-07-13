// const findMinAndMax = (array) => {
//   let min = array[0];
//   let max = min;
//   for (let i = 1; i < array.length; i++) {
//     const item = array[i];
//     if (item > max) {
//       max = item;
//     } else if (item < min) {
//       min = item;
//     }
//   }
//   return [min, max];
// };

// const findMinAndMax = (array) => {
//   const res = array.sort((a, b) => a - b);
//   return [res[0], res[res.length - 1]];
// };

// const findMinAndMax = (array) => {
//   return Math.max.apply(null, array);
//   // return Math.min(...array);
// };

// METHOD (Compare in Pairs)

const findMinAndMax = (array) => {
  const n = array.length;
  let min;
  let max;
  let i = 0;
  if (n % 2 === 0) {
    min = Math.min(array[0], array[1]);
    max = Math.max(array[0], array[1]);
    i = 2;
  } else {
    min = array[0];
    max = min;
    i = 1;
  }

  while (i < n - 1) {
    if (array[i] < array[i + 1]) {
      max = Math.max(max, array[i + 1]);
      min = Math.min(min, array[i]);
    } else {
      max = Math.max(max, array[i]);
      min = Math.min(min, array[i + 1]);
    }

    i += 2;
  }

  return [min, max];
};

console.log(findMinAndMax([10, 50, 12, 16, 2]));
