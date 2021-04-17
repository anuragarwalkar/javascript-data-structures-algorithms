const averagePair = (givenArray, expected) => {
  let pointerA = 0;
  let pointerB = 1;

  while (pointerA < givenArray.length) {
    const result = givenArray[pointerA] + givenArray[pointerB] / 2;

    if (result === expected) {
      return true;
    } else {
      if (pointerB + 1 === givenArray.length) {
        pointerA++;
        if (pointerA + 1 < givenArray.length) {
          pointerB = pointerA + 1;
        }
      } else {
        pointerB++;
      }
    }
  }

  return false;
};

const result = averagePair([1, 2, 3], 2.5);

console.log(result);
