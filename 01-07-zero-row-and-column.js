function cross(matrix) {
    var height = matrix.length;
    var width = matrix[0].length;
    var horizontal = new Array(width);
    var vertical = new Array(height);
    var hCnt = 0;
    var vCnt = 0;
    for (var i = 0; i < height; i++) {
        for (var j = 0; j < width; j++) {
            if (matrix[i][j] === '0') {
                if (!horizontal[j]) {
                    horizontal[j] = true;
                    hCnt++;
                }
                if (!vertical[i]) {
                    vertical[i] = true;
                    vCnt++;
                }
                if (hCnt === width || vCnt === height) {
                    allZero(matrix);
                    return;
                }
            }
        }
    }
    fillMatrix(matrix, horizontal, vertical);
}

function fillMatrix(matrix, horizontal, vertical) {
    for (var i = 0; i < horizontal.length; i++) {
        if (horizontal[i]) {
            for (var j = 0; j < matrix.length; j++) {
                matrix[j][i] = '0';
            }
        }
    }
    for (i = 0; i < vertical.length; i++) {
        if (vertical[i]) {
            for (j = 0; j < matrix[i].length; j++) {
                matrix[i][j] = '0';
            }
        }
    }
}

function allZero(matrix) {
    console.log('allZero');
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            matrix[i][j] = '0';
        }
    }
}

function print(matrix) {
    for (var v = 0; v < matrix.length; v++) {
        console.log(matrix[v]);
    }
}

var initial = [
    '1011'.split(''),
    '1011'.split(''),
    '1011'.split(''),
    '1111'.split(''),
    '1110'.split(''),
    '1111'.split('')
];

print(initial);
console.log('===');
cross(initial)
print(initial);
console.log('');