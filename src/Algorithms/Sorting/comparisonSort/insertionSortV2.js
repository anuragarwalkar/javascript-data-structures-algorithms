function insertionSort(inputArray) {
  const arrayCopy = [...inputArray];

  for (let i = 1; i < arrayCopy.length; i++) {
    let temp = arrayCopy[i];
    let j = i - 1;

    while (j >= 0 && arrayCopy[j] > temp) {
      arrayCopy[j + 1] = arrayCopy[j];
      j--;
    }

    arrayCopy[j + 1] = temp;
  }

  return arrayCopy;
}

console.log(insertionSort([9, 2, 6, 3, 5, 6, 4]));
