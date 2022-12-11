const repeatString = function (string, times) {
    let newStr = string
	if (times == 0) return "";
	if (times == -1) return "ERROR";
	if (times == 1) return string;
	else {
		for (let i = 1; i < times; i++) {
			newStr = newStr + string
		}
        return newStr;
	}
};

// Do not edit below this line
module.exports = repeatString;
