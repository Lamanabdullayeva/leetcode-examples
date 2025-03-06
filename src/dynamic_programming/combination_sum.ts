function combinationSum4(nums: number[], target: number): number {
    let dp: number[] = new Array(target + 1).fill(0);
    dp[0] = 1; // Base case: One way to get sum 0 (use no numbers)

    for (let i = 1; i <= target; i++) {
        for (let num of nums) {
            if (i - num >= 0) {
                dp[i] += dp[i - num];
            }
        }
    }

    return dp[target];
}