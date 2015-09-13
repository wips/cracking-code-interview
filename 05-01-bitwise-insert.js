console.log(1 << 0);
console.log(insert(0xF8, 0x06, 5, 3));

/*
       5  3
    1111 1000 = 0xF8
    0000 0110

    1110 0100 = 0xE4
*/

function insert(source, dest, from, to) {
    from--;
    to--;
    var maskFrom = (1 << (from + 1)) - 1;      // 0001 1111
    var maskTo = (1 << (to)) - 1;          // 0000 0111
    var mask = maskFrom ^ maskTo;              // 0001 1100
                                               // 1110 0011
    var zeroedSource = source & (~mask);       // 1111 1000 & 1110 0011 = 1110 0000
    var zeroedDest = dest & mask;              // 0000 0110 & 0001 1100 = 0000 0100
    return zeroedSource | zeroedDest;          // 1110 0100
}

// 128 + 64 + 32 + 4 = 228
// 128 + 64 + 8 = 1100 1000