function majorityElement(nums: number[]): number {
    let hashmap = new Map<number, number>();

    for (let num of nums) {
        hashmap.set(num, (hashmap.get(num) || 0) + 1);
    }

    for (let [key, val] of hashmap) {
        if (val >= nums.length/2) return key;
    }
    return -1;
};