function findLongestWordLength(str) {
    let words = str.split(' ');
    let size = 0;
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > size) {
            size = words[i].length;
        }
    }
    return size;
}
