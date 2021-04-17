const isSubsequence = (string1, string2) => {
  let pointerOne = 0;
  let pointerTwo = 0;

  while (pointerTwo < string2.length) {
    if (string1[pointerOne] === string2[pointerTwo]) {
      pointerOne++;
    }

    if (pointerOne === string1.length) {
      return true;
    }

    pointerTwo++;
  }
  return false;
};

const result = isSubsequence("hello", "hello");

console.log(result);

//   for (let index = 0; index < string2.length; index++) {
//     if (string1[pointerOne] === string2[pointerTwo]) {
//       matchCount++;
//       pointerOne++;
//       pointerTwo++;
//       if (pointerOne >= string1.length) {
//         break;
//       }
//     } else {
//       if (pointerTwo < string2.length) {
//         pointerTwo++;
//       } else {
//         pointerOne++;
//       }
//     }
//   }
