const repeatString = function(string, times) {
    for (let i = 1; i < times; i++) {
        string += string
    }
    return string
};

// Do not edit below this line
module.exports = repeatString;
