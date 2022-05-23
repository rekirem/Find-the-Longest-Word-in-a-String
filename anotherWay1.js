function findLongestWordLength(str) {
    let size = 0, newsize = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == ' ') {
            newsize = 0;
        } else {
            newsize++;
        }
        if (size < newsize) {
            size = newsize;
        }
    }
    return size;
}
