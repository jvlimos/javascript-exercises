const reverseString = function(string) {

	let strArray = string.split(''); // turns string into an array with each character as an item

	strArray.reverse(); // reverses the order of the array of characters

	let arrayToString = strArray.join('');

	return arrayToString;

};

// OR SIMPLY JUST: return string.split('').reverse().join('');

// Do not edit below this line
module.exports = reverseString;
