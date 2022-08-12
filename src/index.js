module.exports = function reverse (n) {
    var res = "";
    var n = Math.abs(n);
    for (let i = n.toString().length; i > 0; i -= 1) {
        res += n.toString()[i-1];
    }
    return res;

};
