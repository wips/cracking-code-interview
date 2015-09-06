function TreeNode(val) {
    this.left = undefined;
    this.right = undefined;
    this.val = val;
}

function writeTree(root) {
    return writeSelf(root, []);
}

function writeSelf(node, arr) {
    if (node === undefined) {
        return arr;
    }
    if (node === null) {
        arr.push('#');
        return;
    }
    arr.push(node.val);
    if (node.left !== undefined) {
        writeSelf(node.left, arr);
    }
    if (node.right !== undefined) {
        writeSelf(node.right, arr);
    }
    return arr;
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

function preOrder(root, path) {
    if (root) {
        path.push(root.val);
    } else {
        return;
    }
    preOrder(root.left, path);
    preOrder(root.right, path);
}

function inOrder(root, path) {
    if (!root) {
        return;
    }
    inOrder(root.left, path);
    path.push(root.val);
    inOrder(root.right, path);
}

function postOrder(root, path) {
    if (!root) {
        return;
    }
    postOrder(root.left, path);
    postOrder(root.right, path);
    path.push(root.val);
}

function bfs(root, path) {
    if (root === null) {
        return;
    }
    var q = [];
    q.push(root);
    while (q.length) {
        var node = q.shift();
        path.push(node.val);
        if (node.left) {
            q.push(node.left);
        }
        if (node.right) {
            q.push(node.right);
        }
    }
}

module.exports = {
    insertNext: insertNext,
    readTree: readTree,
    TreeNode: TreeNode,
    writeTree: writeTree,
    preOrder: preOrder,
    inOrder: inOrder,
    postOrder: postOrder,
    bfs: bfs
};
