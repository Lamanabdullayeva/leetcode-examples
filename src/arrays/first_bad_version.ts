/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

var solution = function(isBadVersion: any) {

    return function(n: number): number {
    
        let left = 0, right = n;

        while (left < right) {
            let mid = Math.floor((left + right) / 2);

            if (isBadVersion(mid)) {
                right = mid;
            } else {
                left = mid + 1
            }
        }

        return left;

    }
};