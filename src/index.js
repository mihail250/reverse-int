module.exports = function reverse (n) {
    var res = "";
    for (let i = n.toString().length; i > 0; i -= 1) {
        res += n.toString[i];
    }
    return res;

};
