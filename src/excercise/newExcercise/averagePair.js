const averagePair = (givenArray, expectedAvg) => {
  let start = 0;
  let end = givenArray.length - 1;
  while (start < end) {
    const avg = givenArray[start] + givenArray[end] / 2;

    if (avg === expectedAvg) {
      return true;
    } else if (avg < expectedAvg) {
      start++;
    } else {
      end--;
    }
  }
  return false;
};

const result = averagePair([1, 2, 3], 2.5);

console.log(result);

// let pointerA = 0;
// let pointerB = 1;

//   while (pointerA < givenArray.length) {
//     const result = givenArray[pointerA] + givenArray[pointerB] / 2;

//     if (result === expected) {
//       return true;
//     } else {
//       if (pointerB + 1 === givenArray.length) {
//         pointerA++;
//         if (pointerA + 1 < givenArray.length) {
//           pointerB = pointerA + 1;
//         }
//       } else {
//         pointerB++;
//       }
//     }
//   }
