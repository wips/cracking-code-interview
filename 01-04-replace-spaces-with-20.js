function replace(str) {
    if (str === null) {
        return str;
    }
    var spacesCount = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            spacesCount++;
        }
    }
    var result = new Array(str.length + spacesCount * ('%20'.length - 1));
    var j = i = 0;
    while (i < result.length) {
        if (str[j] === ' ') {
            result[i++] = '%';
            result[i++] = '2';
            result[i++] = '0';
        } else {
            result[i++] = str[j];
        }
        j++;
    }
    return result.join('');
}

console.log(replace('Mr John Smith   '));