const add = function (x, y) {
    return x + y;
};

const subtract = function (x, y) {
    return x - y;
};

const sum = function (nums) {
    let total = 0;
    nums.forEach((num) => (total += num));
    return total;
};

const multiply = function (nums) {
    let product = 1;
    nums.forEach((num) => (product *= num));
    return product;
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
