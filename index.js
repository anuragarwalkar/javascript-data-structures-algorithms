function twoSum(nums, target) {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]] != undefined) {
      return [map[nums[i]], i];
    } else {
      let ntf = target - nums[i];
      map[ntf] = i;
    }
  }
  return null;
}

const result = twoSum([2, 7, 11, 15], 9);

console.log("result:", result);
