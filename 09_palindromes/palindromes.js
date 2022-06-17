const palindromes = function (str) {

	let lowerStr = str.toLowerCase();

	function isAlphabet(character) {
		if (character.charCodeAt() > 96 && character.charCodeAt() < 123) {
			return true;
		}
	}
    
	let newStr = [];
	for (let char of lowerStr) {
		if (isAlphabet(char)) {
			newStr.push(char);
		}
	}

	let left = 0;
	let right = newStr.length - 1;
	let compareChars = [newStr[left], newStr[right]];
	for (; left < Math.floor(newStr.length / 2); left++) {
		compareChars = [newStr[left], newStr[right]];
		if (compareChars[0] !== compareChars[1]) return false;
		right--;
	}

	return true;

};

// Do not edit below this line
module.exports = palindromes;
