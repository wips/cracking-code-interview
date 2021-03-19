var tree = require('./utils/binaryTree');
var list = [30, 10, 50, null, null, null, 20, 45, null, null, 35, null, null];
var root = tree.readTree(list);

var path = [];
tree.preOrder(root, path);
console.log(path);

path = [];
tree.inOrder(root, path);
console.log(path);

path = [];
tree.postOrder(root, path);
console.log(path);

path = [];
tree.bfs(root, path);
console.log(path);
