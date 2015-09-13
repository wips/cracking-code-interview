var stacks = [];
stacks[0] = [];
stacks[1] = [];
stacks[2] = [];

var iterations = 0;
var SIZE = 7;

for (var i = SIZE; i > 0; i--) {
    stacks[0].unshift(i);
}

console.log(0, stacks[0], stacks[1], stacks[2]);
moveTower(SIZE, 0, 1, 2);

function moveTower(size, from, buffer, to) {
    if (size === 1) {
        moveDisk(from, to);
    }
    if (size === 2) {
        moveDisk(from, buffer);
        moveDisk(from, to);
        moveDisk(buffer, to);
    }
    if (size > 2) {
        moveTower(size - 1, from, to, buffer);
        moveDisk(from, to);
        moveTower(size - 1, buffer, from, to);
    }
}

function moveDisk(from, to) {
    stacks[to].unshift(stacks[from].shift());
    console.log(++iterations, stacks[0], stacks[1], stacks[2]);
}
