module.exports = function reverse(n) {
    return +String(Math.abs(n)).split('').reverse().join('');

    // or Algorithmic solution
    // let result = 0;

    // n = n < 0 ? -n : n;

    // while (n) {
    //     result = result * 10 + (n % 10);
    //     n = Math.trunc(n / 10);
    // }

    // return result;
};
