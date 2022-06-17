const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(a) {
	let total = 0;
	for (let item of a) {
		total += item;
	}
	return total;
};

const multiply = function(a) {
	let total = 1;
	for (let item of a) {
		total *= item;
	}
	return total;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
if (a == 0) return 1;
else {
	return a * (factorial(a - 1));
}
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
