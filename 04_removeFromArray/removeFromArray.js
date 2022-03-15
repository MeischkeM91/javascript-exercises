const removeFromArray = function(...args) {
    const array = args[0];
    const newArr = [];
    array.forEach(num => {
        if (!args.includes(num)){
            newArr.push(num);
        }
    });
    return newArr;
};

console.log(removeFromArray([1,2,3,4],3,2));

// Do not edit below this line
module.exports = removeFromArray;
