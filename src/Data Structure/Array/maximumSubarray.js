var maxSubArray = function (nums) {
    if (nums.length === 1) {
        return nums[0];
    }

    let start = 0;
    let end = 1;
    let max = Number.MIN_SAFE_INTEGER;
    let maxIndexs = [];
    let total = nums[start];

    while (end <= nums.length) {
        total = total + nums[end];

        if (nums[start] > max) {
            max = nums[start]
        }

        if (total > max) {
            max = total;
            maxIndexs = [start, end];
        }

        if (end === nums.length - 1) {
            start++;
            total = nums[start];
            end = start + 1;
            continue;
        }

        if (end <= nums.length) {
            end++;
        }
    }

    return max;
};