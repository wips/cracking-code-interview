var tree = require('./utils/binaryTree');

var list = [30, 10, 50, null, null, null, 20, 45, null, null, 35, null, null];

var root = tree.readTree(list);
var presentation = tree.writeTree(root);

console.log(presentation);
