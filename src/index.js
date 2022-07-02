module.exports = function reverse(n) {
    let result = 0;

    if (n < 0) {
        n = -n;
    }

    while (n) {
        result = result * 10 + (n % 10);
        n = (n / 10) | 0;
    }

    return result;

    /*
    // Solution 2:

    if (n < 0) {
        n = -n;
    }

    return String(n).split("").reverse().join("");
    */
};
