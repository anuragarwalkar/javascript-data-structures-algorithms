function solve(array) {
  let max = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      let height = Math.min(array[i], array[j]);
      let width = j - i;
      let area = height * width;
      max = Math.max(area, max);
    }
  }
  return max;
}

// function solve(array) {}

// const result = solve([1, 7, 2, 8, 1, 6]);
const result = solve([7, 1, 2, 3, 9]);

console.log("result:", result);
