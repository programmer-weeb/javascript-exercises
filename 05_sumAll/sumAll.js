const sumAll = function(num1, num2) {
    
    let from = num1 < num2 ? num1: num2;
    let to = num1 > num2 ? num1: num2;
    let sum = 0;

    for (let i = from; i <= to; i++) {
        
        sum = sum + i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
