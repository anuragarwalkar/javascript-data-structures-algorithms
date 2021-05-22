function flatten(oldArr) {
  let newArray = [];
  for (const element of oldArr) {
    if (Array.isArray(element)) {
      newArray = newArray.concat(flatten(element));
    } else {
      newArray.push(element);
    }
  }

  return newArray;
}

const result = flatten([1, 2, 3, [4, 5]]); // [1, 2, 3, 4, 5]
console.log(result);
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3
