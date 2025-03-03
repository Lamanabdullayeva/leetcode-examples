function containsDuplicate(nums: number[]): boolean {

    let duplicates = new Set<number>();

    for (let num of nums) {
        if (duplicates.has(num)) return true;
        duplicates.add(num)
    }
    return false
};