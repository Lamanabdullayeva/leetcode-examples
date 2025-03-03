function productExceptSelf(nums: number[]): number[] {
    let n = nums.length;
    let result = new Array(n).fill(1); // Step 1: Create result array with 1s

    // Step 2: Compute left product (product of elements before `i`)
    let leftProduct = 1;
    for (let i = 0; i < n; i++) {
        result[i] = leftProduct;
        leftProduct *= nums[i]; // Update left product for next index
    }

    // Step 3: Compute right product (product of elements after `i`)
    let rightProduct = 1;
    for (let i = n - 1; i >= 0; i--) {
        result[i] *= rightProduct; // Multiply left and right products
        rightProduct *= nums[i]; // Update right product for next index
    }

    return result;
}
