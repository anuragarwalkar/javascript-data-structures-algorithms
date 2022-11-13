/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {

    if (strs.length === 1) {
        return strs[0]
    }

    let longest = "";
    for (let i = 0; i <= strs[0].length; i++) {
        let compare = strs[0].slice(0, i);
        const cond = strs.every(j => j.includes(compare));

        if (cond) {
            longest = compare;
        }
    }

    return longest.length === 1 ? "" : longest;
};

var longestCommonPrefix = function (strs) {
    let cur = strs[0]
    let temp = ""
    for (let i = 1; i < strs.length; i++) {
        for (let j = 0; j < cur.length; j++) {
            if (cur[j] == strs[i][j]) {
                temp += cur[j]
            } else {
                break
            }
        }
        cur = temp
        temp = ""
    }
    return cur
};



const result = longestCommonPrefix(["flower", "flower", "flower", "flower"])

console.log('result:', result);
