function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let currentValue = array[i];
    for (var j = i - 1; j >= 0; j--) {
      if (array[j] > currentValue) {
        array[j + 1] = array[j];
      } else {
        break;
      }
    }
    array[j + 1] = currentValue;
  }

  return array;
}

const res = insertionSort([99, 44, 6, 2, 1, 5]);

console.log("res:", res);
