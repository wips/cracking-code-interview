function isMutation(original, suspect) {
    if (original === '' || suspect === '') {
        return false;
    }
    if (original.length !== suspect.length) {
        return false;
    }
    var originalStats = new Array(1 << 8);
    for (var j = 0; j < original.length; j++) {
        var i = original.charCodeAt(j);
        originalStats[i] = originalStats[i] ? originalStats[i] + 1 : 1;
    }
    for (j = 0; j < suspect.length; j++) {
        i = suspect.charCodeAt(j);
        if (--originalStats[i] < 0) {
            return false;
        }
    }
    return true;
}

console.log(isMutation('ab', 'ba'));
console.log(isMutation('aasadsadab', 'basdasda'));
console.log(isMutation('aa', 'aa'));