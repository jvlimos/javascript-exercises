const sumAll = function(start, end) {

	if (start < 0 || end < 0) return 'ERROR'; // checks if args are negative

	if (typeof(start) != 'number' || typeof(end) != 'number') return 'ERROR'; // checks if args are non-numbers

	let total = 0;

	if (start < end) { // if start < end, create loop where start++

		let n = start;
		while (n <= end) {
			total += n;
			n++;
		}

		return total;

	} else { // if start > end, create loop where start--

		let m = end;
		while (start >= m) {
			total += m;
			m++;
		}

		return total;

	}

};

// Do not edit below this line
module.exports = sumAll;

// let total = 0

// while a <= b {
// 	add a to total
// 	a++
// }