//  O(n) solution
function findMin(nums: number[]): number {
    let min: number = nums[0];
    let rotated: number = 0;

    for (let i = 1; i < nums.length; i++) {
        min = Math.min(min, nums[i]);
        rotated = i;
    }
    return min;
};

// O(log n) time solution
function findMin2(nums: number[]): number {
    let left = 0
    let right = nums.length - 1;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] > nums[right]) {
            left = mid +1;
        } else {
            right = mid;
        }
    }

    return nums[left]
};