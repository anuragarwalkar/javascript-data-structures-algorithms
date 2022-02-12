function twoSum(nums, target) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]]) {
      return [map[nums[i]], i];
    } else {
      let ntf = target - nums[i];
      map[ntf] = i;
    }
  }
  return null;
}

const result = twoSum([1, 3, 7, 9, 2], 11);

console.log("result:", result);
