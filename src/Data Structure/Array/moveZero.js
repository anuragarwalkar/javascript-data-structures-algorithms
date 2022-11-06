/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let letftPointer = 0;
    let rightPointer = 1;

    while (rightPointer < nums.length) {
        if (nums[letftPointer] === 0 && nums[rightPointer] !== 0) {
            let b = nums[rightPointer];
            nums[rightPointer] = nums[letftPointer];
            nums[letftPointer] = b;
        }

        if (nums[letftPointer] !== 0) {
            letftPointer++;
        }
        rightPointer++;
    }

};