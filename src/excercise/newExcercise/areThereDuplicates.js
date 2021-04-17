const sortArray = (array) =>
  array.sort((a, b) => {
    if (typeof a == "string") {
      return a.localeCompare(b);
    } else {
      return a - b;
    }
  });

const areThereDuplicates = (...args) => {
  const sortedArray = sortArray(args);
  let a = 0;
  let b = 1;

  while (b < sortedArray.length) {
    if (sortedArray[a] === sortedArray[b]) {
      return true;
    } else {
      a++;
      b++;
    }
  }

  return false;
};

// const result = areThereDuplicates("a", "b", "c", "a");
const result = areThereDuplicates(1, 2, 3, 5, 4);

console.log(result);

// let a = 0;
//   let b = args.length - 1;
//   while (a < args.length) {
//     if (args[a] != args[b]) {
//       if (b - 1 == a) {
//         a++;
//         b = args.length - 1;
//       } else {
//         b--;
//       }
//     } else if (a === b) {
//       return false;
//     } else if (args[a] === args[b]) {
//       return true;
//     }
//   }
//   return false;
