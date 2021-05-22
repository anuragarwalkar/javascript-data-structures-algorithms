function flatten(oldArr) {
  return oldArr.reduce((a, b) => a.concat(b), []);
}

const result = flatten([1, 2, 3, [4, 5]]); // [1, 2, 3, 4, 5]
console.log(result);
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3
