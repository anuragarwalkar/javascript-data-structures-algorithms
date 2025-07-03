class Solution {
  _dLogic = {
    split: "$",
  };

  /**
   * @param {string[]} strs
   * @returns {string}
   */
  encode(strs) {
    let result = "";

    for (let i = 0; i < strs.length; i++) {
      result += `${strs[i].length}#${strs[i]}`;
    }

    return result;
  }

  /**
   * @param {string} str
   * @returns {string[]}
   */
  decode(str) {
    const result = [];

    let i = 0;

    while (i < str.length) {
      let j = i;

      while (j < str.length) {
        if (str[j] === "#") {
          break;
        }
        j++;
      }

      const lengthOfPart = parseInt(str.slice(i, j));
      result.push(str.slice(j + 1, j + lengthOfPart + 1));

      i = j + 1 + lengthOfPart;
    }

    return result;
  }
}

const data = new Solution();

const reuslt = data.encode(["neet", "code", "love", "you"]);
const reuslt2 = data.decode(reuslt);

console.log(reuslt, reuslt2);
