function isBalanced(root, depth) {
    var depths = getMaxDepths(root, depth);
    return dep;
}

function getMaxDepths(root, depth) {
    var data = {
        left: 0,
        right: 0,
        isUnbalanced: false
    };
    var left = getMaxDepths(root.left, depth + 1);
    var right = getMaxDepths(root.right, depth + 1);
    if (left.isUnbalanced || right.isUnbalanced || Math.abs(left.left - left.right) > 1 || Math.abs(right.left - right.right) > 1) {
        data.isUnbalanced = true;
    }
    data.left = left;
    data.right = right;
    return data;
}

