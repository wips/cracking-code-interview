var ul = require('./utils/linkedList');

function removeWithBuffer(head) {
    if (head === null || head.next === null) {
        return head;
    }
    var current = head;
    var buffer = {};
    while (current !== null) {
        buffer[current.data] = true;
        if (current.next.data in buffer) {
            deleteAfter(current);
        }
        current = current.next;

    }
    return head;
}

function removeDuplicates(head) {
    if (head === null || head.next === null) {
        return head;
    }
    var current = head;
    var searchCursor;
    var prevSearch;
    while (current !== null && current.next !== null) {
        searchCursor = current.next;
        prevSearch = current;
        while (searchCursor !== null) {
            if (searchCursor.data === current.data) {
                //deleteNode(head, searchCursor);
                deleteAfter(prevSearch);
            }
            if (searchCursor !== null) {
                prevSearch = searchCursor;
                searchCursor = searchCursor.next;
            }
        }
        current = current.next;
    }
    return head;
}

function deleteAfter(node) {
    if (node === null || node.next === null) {
        return;
    }
    node.next = node.next.next;
}

function deleteNode(head, node) {
    if (head === null || node === null) {
        return head;
    }
    if (head === node) {
        return head.next;
    }
    var current = head;
    while (current.next !== null) {
        if (current.next === node) {
            current.next = current.next.next;
            break;
        }
        current = current.next;
    }
    return head;
}

[
    [1,2,3,1],
    [1],
    [],
    [1,1,1,1]
].forEach(function(list) {
    console.log(list);
    console.log('===>');
    ul.printList(removeDuplicates(ul.linkedListFromArray(list)));
    ul.printList(removeWithBuffer(ul.linkedListFromArray(list)));
    console.log('/>');
});
