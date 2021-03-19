var tree = require('./utils/binaryTree');

var list = [30, 10, 50, null, null, null, 20, 45, null, null, 35, null, null];

var root = tree.readTree(list);

var listList = lists(root);
console.log(listList);

function lists(root) {
    var lists = [];

    if (!root) {
        return lists;
    }

    visit(root, 0);

    return lists;

    function visit(root, depth) {
        if (lists[depth]) {
            lists[depth].tail.next = root;
            lists[depth].tail = root;
        } else {
            lists[depth] = {
                head: root,
                tail: root
            }
        }
        if (root.left) {
            visit(root.left, depth + 1);
        }
        if (root.right) {
            visit(root.right, depth + 1);
        }
    }
}