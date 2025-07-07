/**
 * Pair class to store key-value pairs
 */
class Pair {
  /**
   * @param {number} key The key to be stored in the pair
   * @param {string} value The value to be stored in the pair
   */
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
}
class Solution {
  /**
   * @param {Pair[]} pairs
   * @returns {Pair[][]}
   */
  insertionSort(pairs) {
    for (let i = 1; i < pairs.length; i++) {
      const temp = pairs[i];
      let j = i - 1;

      while (j >= 0 && pairs[i].key < pairs[j].key) {
        pairs[j + 1] = pairs[j];
        j--;
      }

      pairs[j + 1] = temp;
    }

    return pairs;
  }
}

const sort = new Solution();

// Create a Pair array for [(5, "apple"), (2, "banana"), (9, "cherry")]
const pairs = [
  new Pair(5, "apple"),
  new Pair(2, "banana"),
  new Pair(9, "cherry"),
];

console.log(sort.insertionSort(pairs));
