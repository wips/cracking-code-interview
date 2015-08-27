function hasRouteTo(root, node) {
    if (root === null || node === null) {
        return false;
    }
    root.visited = true;
    if (root === node) {
        return true;
    }
    var has = false;
    for (var i in root.children) {
        if (root.children[i].visited) {
            continue;
        }
        has = has || hasRouteTo(root.children[i], node);
    }
    return has;
}