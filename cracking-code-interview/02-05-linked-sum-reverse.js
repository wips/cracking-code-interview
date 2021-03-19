var ul = require('./utils/linkedList');
var Node = ul.Node;

var a = ul.linkedListFromArray([7, 1, 6]);
var b = ul.linkedListFromArray([5, 9, 2]);

ul.printList(a);
ul.printList(b);
ul.printList(linkedSum(a, b));

function linkedSum(listA, listB) {
    var overhead = 0;
    // 7 -> 1 -> 6
    // 5 -> 9 -> 2
    var a = listA;
    var b = listB;
    var result = new Node(0, null);
    var current = result;               // 2
    var prev = null;
    while (a || b) {
        if (a) {
            current.data += a.data;     // 6
            a = a.next;                 // null
        }
        if (b) {
            current.data += b.data;     // 2
            b = b.next;                 // null
        }
        current.data += overhead;       // 6 + 2 + 1 = 9
        overhead = 0;                   // 0
        if (current.data > 9) {
            overhead = 1;               // 1
            current.data %= 10;         // 1
        }
        current.next = new Node(0, null);  // 0 -> 9 -> 1 -> 2
        prev = current;
        current = current.next;            // 0
    }
    if (overhead) {
        current.data = overhead;
    } else {
        prev.next = null;
    }
    return result;
}
