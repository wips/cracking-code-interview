function Shelter() {
    var head = null;
    var tail = null;
    var catHead = null;
    var catTail = null;
    var dogHead = null;
    var dogTail = null;

    this.dequeueDog = function() {
        if (!dogHead) {
            return null;
        }
        if (dogHead === head) {
            return this.dequeue();
        }
        var current = head;
        while (current !== dogHead) {
            current = current.next;
        }
        dogHead = current ? current.nextRelative : null;
        var next = current.next;
        if (next) {
            current.name = next.name;
            current.next = next.next;
        }
        return current;
    };

    this.dequeueCat = function() {
        if (!catHead) {
            return null;
        }
        if (catHead === head) {
            return this.dequeue();
        }
        var current = head;
        while (current !== catHead) {
            current = current.next;
        }
        catHead = current ? current.next : null;
        var next = current.next;
        if (next) {
            current.name = next.name;
            current.next = next.next;
        }
        return current;
    };

    this.dequeue = function() {
        if (head) {
            var animal = head;
            head = head.next;
            if (animal instanceof Dog) {
                dogHead = dogHead.nextRelative;
            }
            if (animal instanceof Cat) {
                catHead = catHead.nextRelative;
            }
            return animal;
        }
        return null;
    };

    this.enqueue = function(animal) {
        if (tail) {
            tail.next = animal;
        } else {
            head = animal;
        }
        tail = animal;
        
        if (animal instanceof Dog) {
            if (dogTail) {
                dogTail.nextRelative = animal;
            } else {
                dogHead = animal;
            }
            dogTail = animal;
        }
        
        if (animal instanceof Cat) {
            if (catTail) {
                catTail.nextRelative = animal;
            } else {
                catHead = animal;
            }
            catTail = animal;
        }
    };

    this.toStr = function() {
        var acc = [];
        var current = head;
        while (current) {
            acc.push(current.name);
            current = current.next;
        }
        return acc.join();
    }
}

function Animal(name) {
    this.name = name;
    this.nextRelative = null;
}

function Cat() {
    Animal.apply(this, arguments);
}

function Dog() {
    Animal.apply(this, arguments);
}

Cat.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;
Dog.prototype.constructor = Dog;

var s = new Shelter();
s.enqueue(new Cat('c1'));
s.enqueue(new Dog('d1'));
s.enqueue(new Cat('c2'));
s.enqueue(new Cat('c3'));
s.enqueue(new Cat('c4'));

console.log(s.toStr());


s.dequeueDog();
s.dequeueCat();

console.log(s.toStr());