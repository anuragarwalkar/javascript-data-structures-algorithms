class Pair {
  min;
  max;
}

// Tournament Menthod
const findMinAndMax = (array, low, high) => {
  let minMax = new Pair();
  let mml = new Pair();
  let mmr = new Pair();
  let mid;

  //   If there is only one element;
  if (low === high) {
    minMax.max = array[low];
    minMax.min = array[low];
    return minMax;
  }

  //   If there are two elements;
  if (high === low + 1) {
    if (array[low] < array[high]) {
      minMax.min = array[low];
      minMax.max = array[high];
    } else {
      minMax.min = array[high];
      minMax.max = array[low];
    }

    return minMax;
  }

  // If there are more than 2 elements

  mid = Math.floor(low, high);
  mml = findMinAndMax(array, low, mid);
  mmr = findMinAndMax(array, low + 1, high);

  if (mml.min < mmr.min) {
    minMax.min = mml.min;
  } else {
    minMax.min = mmr.min;
  }

  if (mml.max > mmr.max) {
    minMax.max = mml.max;
  } else {
    minMax.max = mmr.max;
  }

  return minMax;
};

const array = [10, 50, 12, 16, 2];
// const array = [10, 50];

console.log(findMinAndMax(array, 0, array.length - 1));
