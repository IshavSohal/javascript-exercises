const palindromes = function (text) {
    const punctuation = /[.,\/#!$%?\^&\*;:{}=\-_`~()]/g;
    const filteredText = text.toLowerCase().replaceAll(punctuation, "").replaceAll(" ", "");
    const textReversed = filteredText.split("").reverse().join("");
    return filteredText === textReversed;
};

// Do not edit below this line
module.exports = palindromes;
