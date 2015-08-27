function stackSort(stack) {
    if (stack === null) {
        return stack;
    }
    var sorted = [];
    while (stack.length > 0) {
        var current = stack.pop();
        while (sorted.length > 0 && sorted[sorted.length - 1] > current) {
            stack.push(sorted.pop());
        }
        sorted.push(current);
    }
    return sorted;
}

console.log(stackSort([5,1,2,4,6,1,4,9,7]));