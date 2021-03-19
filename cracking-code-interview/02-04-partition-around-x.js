var ul = require('./utils/linkedList');
var l = ul.linkedListFromArray([1, 6, 3, 2, 5, 7, 9, 4]);
ul.printList(l);
var head = partition(l, 99);
ul.printList(head);

function partition(head, test) {
    var current = head;         // 5
    var lessCurrent = null;     // 2
    var moreCurrent = null;     // 6
    var lessHead = null;        // 1
    var moreHead = null;        // 6
    while (current) {
        if (current.data < test) {
            if (lessCurrent) {
                lessCurrent.next = current;             // 2
                lessCurrent = lessCurrent.next;
            } else {
                lessCurrent = current;
                lessHead = current;
            }
        } else {
            if (moreCurrent) {
                moreCurrent.next = current;
                moreCurrent = moreCurrent.next;
            } else {
                moreCurrent = current;
                moreHead = current;
            }
        }
        current = current.next;
    }
    var resultHead = null;
    if (lessHead) {
        resultHead = lessHead;
    } else {
        resultHead = moreHead;
    }
    if (lessHead && moreHead) {
        lessCurrent.next = moreHead;
    }
    if (moreHead) {
        moreCurrent.next = null;
    } else {
        lessCurrent.next = null;
    }
    return resultHead;
}
