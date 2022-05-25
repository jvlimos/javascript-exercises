const sumAll = function(...args) {

	let total = 0;

	for (let i = 0; i < args.length; i++) {

		let arg = args[i];

		for (arg of args) {
			total += arg;
		}

		return total;

	}


};