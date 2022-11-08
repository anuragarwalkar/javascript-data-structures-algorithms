/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    const result = [];

    if (k > nums.length) {
        k = k % nums.length
    }

    for (let i = 0; i < nums.length; i++) {
        if (k + i < nums.length) {
            result[k + i] = nums[i];
        } else {
            result[(k + i) % nums.length] = nums[i]
        }
    }

    nums.splice(0, nums.length, ...result);
};

var rotate = function (nums, k) {
    nums.splice(0, 0, ...nums.splice(nums.length < k ? -k % nums.length : -k));
};
