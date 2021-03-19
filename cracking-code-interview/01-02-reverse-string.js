function reverse(input) {
    if (input.length <= 1 || input === null) {
        return input;
    }
    var size = input.length;
    var result = new Array(size);
    for (var i = 0; i < size; i++) {
        result[i] = input[size - 1 - i];
    }
    return result.join('');
}

console.log(reverse('abc'));
console.log(reverse('ac'));
console.log(reverse('asfc'));