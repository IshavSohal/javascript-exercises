const sumAll = function (start, end) {
    let res = 0;

    if (start <= 0 || end <= 0 || !Number.isInteger(start) || !Number.isInteger(end)) {
        return "ERROR";
    }

    if (start > end) {
        [start, end] = [end, start];
    }

    for (let i = start; i <= end; i++) {
        res += i;
    }
    return res;
};

// Do not edit below this line
module.exports = sumAll;
