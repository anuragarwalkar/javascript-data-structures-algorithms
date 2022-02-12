const array = [0, 2, 2, 0, 1, 2];

const sortArray = (givenArray) => {
  let low = 0;
  let medium = 0;
  let high = givenArray.length - 1;

  const swap = (rightIndex, leftIndex) => {
    const temp = givenArray[rightIndex];
    givenArray[rightIndex] = givenArray[leftIndex];
    givenArray[leftIndex] = temp;
  };

  while (medium <= high) {
    if (givenArray[medium] === 0) {
      swap(low, medium);
      low++;
      medium++;
    } else if (givenArray[medium] == 1) {
      medium++;
    } else if (givenArray[medium] == 2) {
      swap(medium, high);
      high--;
    }
  }
  return givenArray;
};

const result = sortArray(array);

console.log(result);
