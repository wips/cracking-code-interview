function Node(data, next) {
    this.data = data;
    this.next = next;
}

function linkedListFromArray(list) {
    if (list.length < 1) {
        return null;
    }
    var head = new Node(list[0], null);
    var current = head;
    for (var i = 1; i < list.length; i++) {
        current.next = new Node(list[i], null);
        current = current.next;
    }
    return head;
}

function printList(head) {
    var current = head;
    var data = [];
    while (current !== null) {
        data.push(current.data);
        current = current.next;
    }
    console.log('<' + data.join(',') + '>');
}

module.exports = {
    linkedListFromArray: linkedListFromArray,
    printList: printList
};
