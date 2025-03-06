
//solution 1
function singleNumber(nums: number[]): number {

    let result = 0;

    for (let num of nums) {
        result ^=num;
    }

    return result;
};

// solution 2
function singleNumber2(nums: number[]): number {

    let countMap = new Map<number, number>();

    for (let num of nums) {
        countMap.set(num, (countMap.get(num) || 0) + 1);
    }

    for (let [key, value] of countMap) {
        if (value === 1) return key;
    }

    return -1;
};