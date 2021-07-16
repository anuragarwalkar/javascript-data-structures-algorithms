// const reverseTheArray = (array) => {
//   let middle = Math.floor(array.length / 2);
//   let j = array.length - 1;

//   for (let i = 0; i < middle; i++) {
//     let val = array[j];
//     array[j] = array[i];
//     array[i] = val;
//     j--;
//   }

//   console.log(array);
// };

// o n/2
const reverseTheArray = (array) => {
  const newArray = [...array];
  let start = 0;
  let end = array.length - 1;

  while (start < end) {
    let val = newArray[end];
    newArray[end] = newArray[start];
    newArray[start] = val;
    start++;
    end--;
  }

  console.log(newArray);
};

console.log(reverseTheArray([1, 2, 3, 4, 5, 6]));
