var ul = require('./utils/linkedList');

function deleteNode(node) {
    if (node === null) {
        return;
    }
    if (node.next === null) {
        node = null;
        return;
    }
    node.data = node.next.data;
    node.next = node.next.next;
}

var l = ul.linkedListFromArray([1,2,3]);
var node2 = find(l, 2);
var node3 = find(l, 1);
var node1 = find(l, 3);
ul.printList(l);
deleteNode(node3);
ul.printList(l);
console.log(node2, node3);



    function find(head, k) {
        if (head === null) {
            return head;
        }
        var current = head;
        var kth = null;
        var i = 1;
        while (current !== null) {
            if (kth !== null) {
                kth = kth.next;
            }
            if (i++ === k) {
                kth = head;
            }
            if (current !== null) {
                current = current.next;
            }
        }
        return kth;
    }