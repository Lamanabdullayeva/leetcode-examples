function getSum(a: number, b: number): number {
    while (b !== 0) {
        let sum = a^b;
        let carry = (a & b) << 1;

        a = sum;
        b = carry;
    }
    return a
};