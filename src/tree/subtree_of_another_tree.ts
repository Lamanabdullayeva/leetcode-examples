function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
    if (!root) return false;

    if (isSameTree1(root, subRoot)) return true;

    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};

function isSameTree1(root: TreeNode | null, subRoot: TreeNode | null): boolean {
    if (!root && !subRoot) return true;
    if (!root || !subRoot) return false;

    if (root.val !== subRoot.val) return false;

    return isSameTree1(root.left, subRoot.left) &&
        isSameTree1(root.right, subRoot.right)
}