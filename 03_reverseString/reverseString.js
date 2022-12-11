const reverseString = function (enteredString) {
	let arrOfChars = enteredString.split("");
	let revArrOfChar = [];

	for (let i = 0; i < arrOfChars.length; i++) {
		revArrOfChar[i] = arrOfChars[arrOfChars.length - i - 1];
	}

	return revArrOfChar.join("");
};
// get string from user
// put chars of user string from back to the new arr of chars
// turn the new arr of char to string

// Do not edit below this line
module.exports = reverseString;
