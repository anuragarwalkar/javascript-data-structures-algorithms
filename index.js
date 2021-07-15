class Pair {
  min;
  max;
  constructor(low, high) {
    this.min = low;
    this.max = high;
  }
}

// Tournament Menthod
const findMinAndMax = (array, low, high) => {
  let minMax = new Pair();
  let mml = new Pair();
  let mmr = new Pair();

  //   If there is only one element;
  if (low === high) {
    minMax.max = array[low];
    minMax.min = array[low];
  }

  return minMax;
};

// const array = [10, 50, 12, 16, 2];
const array = [10];

console.log(findMinAndMax(array, 0, array.length - 1));
