// solution 1
function missingNumber(nums: number[]): number {
    let n = nums.length;

    let xorTotal = 0;

    for (let i = 0; i <= n; i++) {
        xorTotal ^= i;
    }

    for (let num of nums) {
        xorTotal ^= num;
    }

    return xorTotal;
};

// solution 2
function missingNumber2(nums: number[]): number {
    let n = nums.length;
    let expectedSum = (n * (n + 1)) / 2

    let actualSum = nums.reduce((acc, num) => acc + num, 0)

    return expectedSum - actualSum
};