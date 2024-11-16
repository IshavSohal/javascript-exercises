const removeFromArray = function (array, ...elements) {
    const newArray = JSON.parse(JSON.stringify(array));
    let index;

    for (const element of elements) {
        while (newArray.includes(element)) {
            index = newArray.indexOf(element);
            newArray.splice(index, 1);
        }
    }

    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
