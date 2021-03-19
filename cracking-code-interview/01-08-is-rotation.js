function isRotation(original, rotated) {
    if (original.length !== rotated.length) {
        return false;
    }
    for (var i = 0; i < original.length; i++) {

        if (
            isSubstring(original, rotated.substring(0, i + 1)) &&
            isSubstring(original, rotated.substring(i + 1))
        ) {
            return true;
        }
    }
    return false;
}

function isSubstring(original, subString) {
    return original.indexOf(subString) !== -1;
}

console.log(isRotation('abcd', 'bcda'));
console.log(isRotation('abcde', 'bcdae'));
