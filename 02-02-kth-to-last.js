var ul = require('./utils/linkedList');

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

[
    [1,2,3,4,5,6,7,8],
    [1],
    [1,2],
    [],
    [1,2,3,4]
].forEach(function(list) {
    var l = ul.linkedListFromArray(list);
    ul.printList(l);
    var found = find(l, 4);
    console.log(found ? found.data : found);
});