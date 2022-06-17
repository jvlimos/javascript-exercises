const fibonacci = function(n) {

	n = parseInt(n);

  if (n < 0) return "OOPS";

  if (n == 1 || n == 2) return 1;

	// if (n == 0) {
	// 	return 0;
	// } else {
	// 	return fibonacci(n - 1) + fibonacci(n - 2);
	// }

	// FASTER METHOD:

	let n1 = 1, n2 = 1, nextTerm;
	
	for (let i = 1; i <= n-1; i++) {
			nextTerm = n1 + n2;
			n1 = n2;
			n2 = nextTerm;
	}

	return n1;

};

// Do not edit below this line
module.exports = fibonacci;
