function climbStairs(n: number): number {

    if (n === 1) return 1;
    if (n === 2) return 2;

    let sum: number[] = new Array(n + 1);
    sum[1] = 1;
    sum[2] = 2

    for (let i = 3; i <= n; i++) {
        sum[i] = sum[i - 1] + sum[i - 2];
    }

    return sum[n];
};