function MyQueue() {
    var output = [];
    var input = [];
    var isPreviousEnqueue = true;

    this.enqueue = function(item) {
        if (!isPreviousEnqueue) {
            input = [];
            while (output.length > 0) {
                input.push(output.pop());
            }
        }
        input.push(item);
        isPreviousEnqueue = true;
    };

    this.dequeue = function() {
        if (isPreviousEnqueue) {
            output = [];
            while (input.length > 0) {
                output.push(input.pop());
            }
        }
        isPreviousEnqueue = false;
        return output.pop();
    };

    this.isEmpty = function() {
        return input.length + output.length === 0;
    }
}

var q = new MyQueue();
[1,2,3,4,5].forEach(function(item) {
    q.enqueue(item);
});

while (!q.isEmpty()) {
    console.log(q.dequeue());
}
