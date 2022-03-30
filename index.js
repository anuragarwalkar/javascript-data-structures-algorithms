var sumOddLengthSubarrays = function (arr) {
  let total = 0;

  const addAllTotal = () => (total += arr.reduce((a, b) => a + b, 0));

  for (let i = 0; i < arr.length; i++) {
    if (i % 2 !== 0) {
    }
  }

  addAllTotal();

  return total;
};

const result = sumOddLengthSubarrays([10, 11, 12]);

console.log("result:", result);
