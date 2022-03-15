let string = 'hey';

const repeatString = function(str, num) {
    if(num<0) return 'ERROR';
    for(i=0;i<=num;i++){
        return str.repeat(num);
    }
};

repeatString(string,-1);

// Do not edit below this line
module.exports = repeatString;
