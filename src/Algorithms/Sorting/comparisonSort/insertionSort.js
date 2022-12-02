function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let tempValue = array[i];

    for (var j = i - 1; j >= 0 && array[j] > tempValue; j--) {
      array[j + 1] = array[j];
    }

    array[j + 1] = tempValue;
  }

  return array;
}

const result = insertionSort([10, 9, 8, 7, 6, 5, 4]);

console.log("result:", result);
