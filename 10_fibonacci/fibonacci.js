const fibSequence = { 0: 0, 1: 1, 2: 1 };
const fibonacci = function (n) {
    if (+n < 0) {
        return "OOPS";
    }
    if (!(n in fibSequence)) {
        fibSequence[n] = fibonacci(+n - 1) + fibonacci(+n - 2);
    }
    return fibSequence[n];
};

// Do not edit below this line
module.exports = fibonacci;
