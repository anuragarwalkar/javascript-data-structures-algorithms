const isSubsequence = (string1, string2) => {
  let pointerOne = 0;
  let pointerTwo = 0;

  let matchCount = 0;

  for (let index = 0; index < string2.length; index++) {
    if (string1[pointerOne] === string2[pointerTwo]) {
      matchCount++;
      pointerOne++;
      pointerTwo++;
      if (pointerOne >= string1.length) {
        break;
      }
    } else {
      if (pointerTwo < string2.length) {
        pointerTwo++;
      } else {
        pointerOne++;
      }
    }
  }
  return string1.length === matchCount;
};

const result = isSubsequence("hello", "hello");

console.log(result);
