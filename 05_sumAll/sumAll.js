const sumAll = function(num1,num2) {
    let firstNum=num1;
    let lastNum=num2;
    let sum=0;

    if (!Number.isInteger(firstNum) || !Number.isInteger(lastNum)){return 'ERROR'};
    if (firstNum<0 || lastNum<0){return 'ERROR'};

    for (firstNum;firstNum<=lastNum;firstNum++){
        sum+=firstNum;
    }
    return sum;
};

console.log(sumAll(1,"90"));

// Do not edit below this line
module.exports = sumAll;
