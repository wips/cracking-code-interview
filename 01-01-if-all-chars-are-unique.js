function isAllCharsAreUnique(input) {
    if (input.length <= 1) {
        return true;
    }
    var sorted = input.split('').sort().join('');
    var index = 1;
    while (index < sorted.length) {
        if (sorted[index] === sorted[index - 1]) {
            return false;
        }
        index++;
    }
    return true;
}

console.log(isAllCharsAreUnique('abgfgfg'));
console.log(isAllCharsAreUnique('abf12g'));
console.log(isAllCharsAreUnique(''));
console.log(isAllCharsAreUnique('a'));
