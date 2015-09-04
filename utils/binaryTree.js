function TreeNode(val) {
    this.left = undefined;
    this.right = undefined;
    this.val = val;
}

function writeTree(root) {
    var str = '';
    return writeSelf(root, str);
}

function writeSelf(node, str) {
    if (!node) {
        return str;
    }
    var output = str;
    output += node.val;
    if (node.left) {
        output += writeSelf(node.left);
    }
    if (node.right) {
        output += writeSelf(node.right);
    }
    return output;
}

function readTree(list) {
    var root = null;
    if (!list.length) {
        return root;
    }
    root = new TreeNode(list[0]);
    if (list.length === 1) {
        return root;
    }
    for (var i = 1; i < list.length; i++) {
        insertNext(root, list[i]);
    }
    return root;
}

function insertNext(root, value) {
    var insertion = value === null ? null : new TreeNode(value);

    if (root.left === undefined) {
        root.left = insertion;
        return true;
    }
    if (root.left !== null && insertNext(root.left, value)) {
        return true;
    }
    if (root.right === undefined) {
        root.right = insertion;
        return true;
    }
    return root.right !== null && insertNext(root.right, value);
}

module.exports = {
    insertNext: insertNext,
    readTree: readTree,
    TreeNode: TreeNode,
    writeTree: writeTree
};
