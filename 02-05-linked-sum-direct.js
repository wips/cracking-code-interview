var ul = require('./utils/linkedList');
var Node = ul.Node;

var a = ul.linkedListFromArray([6, 1, 7]);
var b = ul.linkedListFromArray([2, 9, 5]);

ul.printList(a);
ul.printList(b);
ul.printList(linkedSum(a, b));

function linkedSum(listA, listB) {
    var a = [];
    var b = [];
    var current = listA;
    while (current) {
        a.push(current.data);
        current = current.next;
    }
    current = listB;
    while (current) {
        b.push(current.data);
        current = current.next;
    }
    var sum = (parseInt(a.join('') || 0) + parseInt(b.join('') || 0)).toString();
    var head = new Node(0, null);
    current = head;
    for (var i = 0; i < sum.length; i++) {
        current.data = sum[i];
        if (i < sum.length - 1) {
            current.next = new Node(0, null);
            current = current.next;
        }
    }
    return head;
}
