export function twoSum(nums: number[], target: number): number[] {
    let numToIndex = new Map<number, number>();

    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (numToIndex.has(complement)) {
            return [numToIndex.get(complement)!, i];
        }
        numToIndex.set(nums[i], i);
    }

    return [];
}

// Test Case
if (require.main === module) {
    console.log(twoSum([2,7,11,15], 9)); // Output: [0, 1]
}
