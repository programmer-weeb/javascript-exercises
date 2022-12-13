const removeFromArray = function (...args) {
	let enteredArr = args[0];
	let newArrWithout = [];

	enteredArr.forEach(e => {
        if (!args.includes(e)) {
            newArrWithout.push(e)
        }
    });

	return newArrWithout;
};

// Do not edit below this line
module.exports = removeFromArray;
