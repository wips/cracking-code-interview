function rotateMatrix(matrix) {
    if (matrix === null) {
        return matrix;
    }
    var size = matrix.length - 1;
    for (var i = 0; i <= size; i++) {
        if (matrix[i].length !== size + 1) {
            return matrix;
        }
    }
    var halfSize = Math.floor(matrix.length / 2);
    for (i = 0; i < halfSize; i++) {
        for (var k = i; k < matrix.length - (1 + i); k++) {
            var fromPosition = {
                x: k,
                y: i
            };
            var valueToMove = matrix[fromPosition.y][fromPosition.x];

            for (var j = 0; j < 4; j++) {
                var nextPosition = rotatePoint(fromPosition, size);
                var valueToSave = matrix[nextPosition.y][nextPosition.x];
                matrix[nextPosition.y][nextPosition.x] = valueToMove;
                fromPosition = nextPosition;
                valueToMove = valueToSave;
            }
        }
    }
    return matrix;
    //var rotated = new Array(size);
    //for (i = 0; i <= size; i++) {
    //    rotated[i] = new Array(size);
    //}
    //for (var v = 0; v <= size; v++) {
    //    for (var h = 0; h <= size; h++) {
    //        var position = rotatePoint({x: h, y: v}, size);
    //        rotated[position.y][position.x] = matrix[v][h];
    //    }
    //}
    //return rotated;
}

function print(matrix) {
    for (var v = 0; v < matrix.length; v++) {
        console.log(matrix[v]);
    }
}

function rotatePoint(position, size) {
    return {
        x: size - position.y,
        y: position.x
    };
}

/**
  0 1 2 3  0 1 2 3
-|-------
0|0 1 2 3  C 8 4 0
1|4 5 6 7  D 9 5 1
2|8 9 A B  E A 6 2
3|C D E F  F B 7 3
*/

var initial = [
    '0123'.split(''),
    '4567'.split(''),
    '89AB'.split(''),
    'CDEF'.split('')
];

print(initial);
console.log('==>');
print(rotateMatrix(initial));
console.log('');

initial = [
    '012'.split(''),
    '345'.split(''),
    '678'.split('')
];

print(initial);
console.log('==>');
print(rotateMatrix(initial));
console.log('');