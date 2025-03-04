// O(n2) complexity

function maxSubArray(nums: number[]): number {

    let maxSum = -Infinity;

    for (let i = 0; i < nums.length; i++) {
        let currentSum = 0;
        for (let j = i; j < nums.length; j++) {
            currentSum +=nums[j];

            maxSum = Math.max(maxSum, currentSum)
        }
    }

    return maxSum
};

// O(n) complexity
function maxSubArray2(nums: number[]): number {

    let maxSum = nums[0];
    let currentSum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        currentSum = Math.max(nums[i], currentSum + nums[i])

        maxSum = Math.max(maxSum, currentSum)
    }

    return maxSum;
};