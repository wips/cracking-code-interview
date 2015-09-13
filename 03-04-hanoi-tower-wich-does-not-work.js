var stacks = [];
stacks[0] = [];
stacks[1] = [];
stacks[2] = [];

var iterations = 0;

for (var i = 5; i > 0; i--) {
    stacks[0].unshift(i);
}

var next = nextMoveBuilder();

while ((stacks[0].length + stacks[1].length) !== 0 && ++iterations < 100) {
    var move = next(possibleMoves());
    stacks[move[1]].unshift(stacks[move[0]].shift());
    console.log(iterations, stacks[0], stacks[1], stacks[2]);
}

function nextMoveRandom(moves) {
    return possibleMoves()[Math.floor(Math.random() * moves.length)];
}

function nextMoveBuilder() {
    var lastStack = 0;
    return function nextMove(moves) {
        var sorted = moves.sort(function(moveA, moveB) {
            if (lastStack === moveA[0]) {
                return 1;
            }
            if (lastStack === moveB[0]) {
                return -1;
            }
            if (isEmpty(moveA[1]) && isEmpty(moveB[1])) {
                return peek(moveA[0]) > peek(moveB[0]) ? -1 : 1;
            }
            if (!isEmpty(moveA[1]) && peek(moveA[1]) - peek(moveA[0]) === 1) {
                return -1;
            }
            if (!isEmpty(moveB[1]) && peek(moveB[1]) - peek(moveB[0]) === 1) {
                return 1;
            }
            if (!isEmpty(moveA[1]) && !isEmpty(moveB[1])) {
                return peek(moveA[1]) - peek(moveA[0]) > peek(moveB[1]) - peek(moveB[0]) ? -1 : 1;
            }
            if (isEmpty(moveA[1]) && !isEmpty(moveB[1])) {
                return 1;
            }
            if (!isEmpty(moveA[1]) && isEmpty(moveB[1])) {
                return -1;
            }
            if (isEmpty(moveA[1]) || isEmpty(moveB[1])) {
                return peek(moveA[0]) > peek(moveB[0]) ? -1 : 1;
            }
        });
        lastStack = sorted[0][1];
        return sorted[0];
    }
}

function peek(stackNumber) {
    return stacks[stackNumber][0];
}

function isEmpty(stackNumber) {
    return stacks[stackNumber].length === 0;
}

function possibleMoves() {
    return [
        [0, 1],
        [0, 2],
        [1, 0],
        [1, 2],
        [2, 0],
        [2, 1]
    ].filter(function(move) {
        return stacks[move[0]][0] && (!stacks[move[1]][0] || stacks[move[0]][0] <= stacks[move[1]][0]);
    });
}
