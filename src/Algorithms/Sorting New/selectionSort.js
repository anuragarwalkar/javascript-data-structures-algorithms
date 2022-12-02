function selectionSort(array) {
  let swapIndex = 0;

  for (let i = 0; i < array.length; i++) {
    let smallest = array[swapIndex];
    let smallestIndex = 0;

    for (let j = swapIndex; j < array.length; j++) {
      if (array[j] <= smallest) {
        smallest = array[j];
        smallestIndex = j;
      }
    }

    const temp = array[smallestIndex];
    array[smallestIndex] = array[swapIndex];
    array[swapIndex] = temp;
    swapIndex++;
  }

  return array;
}

selectionSort([2, 5, 8, 4, 1, 10]);
