const sumAll = function (num1, num2) {
    if (!Number.isInteger(num1) || !Number.isInteger(num2)) return "ERROR";
	if (num1 < 0 || num2 < 0) return "ERROR";
	let from = num1 < num2 ? num1 : num2;
	let to = num1 > num2 ? num1 : num2;
	let sum = 0;

	for (let i = from; i <= to; i++) {
		sum = sum + i;
	}
	return sum;
};

// Do not edit below this line
module.exports = sumAll;
