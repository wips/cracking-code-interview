var ul = require('./utils/linkedList');
var head = ul.linkedListFromArray([6, 1, 7, 8, 9, 10]);

var i = 0;
var next = head;
var tail;
var some;

while (next) {
    tail = next;
    next = next.next;
    i = i + 1;
    if (i === 3) {
        some = next;
    }
}

console.log(findLoop(ul.linkedListFromArray([6, 1, 7, 8, 9, 10])));

tail.next = some;

console.log(findLoop(head));

function findLoop(head) {
    if (!head) {
        return null;
    }

    var next = head;
    while (next) {
        if (next.isVisited) {
            return next.data;
        }
        next.isVisited = true;
        next = next.next;
    }

    return null;
}