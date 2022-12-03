function mergeSort(unSortedArray) {
  if (unSortedArray.length === 1) {
    return unSortedArray;
  }

  const middle = Math.floor(unSortedArray.length / 2);
  const left = unSortedArray.slice(0, middle);
  const right = unSortedArray.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let leftIndex = 0;
  let rightIndex = 0;

  const result = [];

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

const result = mergeSort([2, 1, 8, 7]);

console.log("result:", result);
