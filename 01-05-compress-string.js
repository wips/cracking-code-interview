function compress(str) {
    if (str === null || str.length === 1) {
        return str;
    }
    var compressed = new Array(str.length);
    var strPosition = 1;
    var count = 1;
    var compressedPosition = 0;
    while (strPosition < str.length) {
        if (str[strPosition] === str[strPosition - 1]) {
            count++;
        }
        if (str[strPosition] !== str[strPosition - 1]) {
            compressed[compressedPosition++] = str[strPosition - 1];
            writeCount();
        }
        if (strPosition === str.length - 1) {
            compressed[compressedPosition++] = str[strPosition];
            writeCount();
        }
        if (compressedPosition >= str.length) {
            return str;
        }
        strPosition++;
    }
    return compressed.join('');

    function writeCount() {
        for (var k = 0; k < count.toString().length; k++) {
            compressed[compressedPosition++] = count.toString()[k];
        }
        count = 1;
    }
}

console.log(compress('aabcccccaaa'));
console.log(compress('aabddddddddddddddddddddcccccaaa'));
console.log(compress('aab'));
console.log(compress('aa'));
console.log(compress('aabbbxxxxxxxxds'));
console.log(compress('head'));
