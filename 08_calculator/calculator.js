const add = function (x, y) {
    return x + y;
};

const subtract = function (x, y) {
    return x - y;
};

const sum = function (nums) {
    return nums.reduce((acc, current) => acc + current, 0);
};

const multiply = function (nums) {
    return nums.reduce((acc, current) => acc * current, 1);
};

const power = function (x, y) {
    return x ** y;
};

const factorial = function (x) {
    let product = 1;
    for (let i = x; i > 0; i--) {
        product *= i;
    }
    return product;
};

// Do not edit below this line
module.exports = {
    add,
    subtract,
    sum,
    multiply,
    power,
    factorial,
};
