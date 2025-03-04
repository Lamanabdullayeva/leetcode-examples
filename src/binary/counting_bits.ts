function countBits(n: number): number[] {
    let count = 0;
    let ans: number[] = [];

    for (let i = 0; i <= n; i++) {
        let num = i;  
        let count = 0; 
        while (num > 0) {
            if (num & 1) count++;
            num = num >> 1;
        }
        ans.push(count);
    }
    return ans;
};