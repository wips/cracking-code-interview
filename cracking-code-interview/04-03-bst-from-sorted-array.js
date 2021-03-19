var tree = require('./utils/binaryTree');
var TreeNode = tree.TreeNode;

var list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var bst = buildBst(list);

console.log(tree.writeTree(bst).join());

function buildBst(list) {
    if (!list.length) {
        return null;
    }
    return subTree(list, 0, list.length - 1);
}

function subTree(list, from, to) {
    var myIdx = middle(from, to);
    var root = new TreeNode(list[myIdx]);
    root.left = from < myIdx ? subTree(list, from, myIdx - 1) : null;
    root.right = to > myIdx ? subTree(list, myIdx + 1, to) : null;
    return root;
}

function middle(from, to) {
    return from + Math.floor((to - from) / 2);
}

/**
                5
        2                8
     1     3         6      9
            4         7      10

    5, 2, 1, #, #, 3, #, 4, #, #, 8, 6, #, 7, #, #, 9, #, 10, #, #

 */