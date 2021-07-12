//   return array.reverse();
//   const items = [];
//   for (let index = array.length - 1; index >= 0; index--) {
//     const element = array[index];
//     items.push(element);
//   }
//   return items;
//   return array.reduce((a, b) => {
//     a.unshift(b);
//     return a;
//   }, []);

const reverseTheArray = (array) => {
  if (array.length === 1) {
    return array[0];
  }
  const res = reverseTheArray(array.splice(0, array.length - 1));
  return array.concat(res);
};

console.log(reverseTheArray([1, 2, 3]));
