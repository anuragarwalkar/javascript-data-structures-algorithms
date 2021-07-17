const newString = ["a", "n", "u", "r", "a", "g"];

const reverseAString = (givenArray) => {
  let start = 0;
  let end = givenArray.length - 1;

  while (start < end) {
    const temp = givenArray[end];
    givenArray[end] = givenArray[start];
    givenArray[start] = temp;
    start++;
    end--;
  }
  return givenArray;
};

const result = reverseAString(newString);

console.log(result);
