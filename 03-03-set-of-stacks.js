function SetOfStacks(singleStackSize) {
    var currentStack = -1;
    var STACKS_SIZE = 10;
    var stacks = new Array(STACKS_SIZE);
    var positions = new Array(STACKS_SIZE);

    for (var i = 0; i < stacks.length; i++) {
        stacks[i] = new Array(singleStackSize);
        positions[i] = -1;
    }

    this.push = function(item) {
        if (currentStack === STACKS_SIZE - 1 && positions[currentStack] === singleStackSize - 1) {
            return false;
        }
        if (currentStack === -1 || positions[currentStack] === singleStackSize - 1) {
            currentStack++;
            positions[currentStack] = 0;
        } else {
            positions[currentStack]++;
        }
        stacks[currentStack][positions[currentStack]] = item;
        return true;
    };

    this.pop = function() {
        if (currentStack === -1 || currentStack === 0 && positions[currentStack] === -1) {
            return null;
        }
        if (positions[currentStack] === - 1) {
            positions[currentStack] = singleStackSize - 1;
            currentStack--;
        }
        var item = stacks[currentStack][positions[currentStack]];
        positions[currentStack] -= 1;
        return item;
    };

    this.popAt = function(index) {
        if (positions[index] === -1 || index < 0 || index > STACKS_SIZE - 1) {
            return null;
        }
        var item = stacks[index][positions[index]];
        positions[index] -= 1;
        return item;
    }
}

var ss = new SetOfStacks(3);

console.log(ss.pop());

var data = [1,2,3,4,5,6,7];

data.forEach(function(item) {
    ss.push(item);
});

var popVals = [];
data.forEach(function() {
    popVals.push(ss.pop());
});

console.log(data);
console.log(popVals);

data.forEach(function(item) {
    ss.push(item);
});

var popVals = [];
data.forEach(function() {
    popVals.push(ss.popAt(1));
});

console.log(data);
console.log(popVals);