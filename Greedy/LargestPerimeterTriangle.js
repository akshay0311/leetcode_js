/**
 * @param {number[]} nums
 * @return {number}
 */

let nums = [1, 2, 1];

var largestPerimeter = function(nums) {
    nums = nums.sort((a, b) => b - a);
    console.log(nums);
    for (let i = 0; i < nums.length - 2; i++) {
        if ((nums[i+1] + nums[i+2]) > nums[i])
            return nums[i+1] + nums[i+2] + nums[i];
    }
    return 0;
};


console.log(largestPerimeter(nums));