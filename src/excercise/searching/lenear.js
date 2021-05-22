const linearSearch = (array, value) => {
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element === value) {
      return index;
    }
  }

  return -1;
};

const result = linearSearch([1, 2, 3, 4], 3);

console.log(result);
