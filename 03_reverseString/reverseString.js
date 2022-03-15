const reverseString = function(str) {
    let arrayOfWord = Array.from(str);
    let reverseArray = arrayOfWord.reverse();
    return reverseArray.join('');
};

reverseString('');

// Do not edit below this line
module.exports = reverseString;
