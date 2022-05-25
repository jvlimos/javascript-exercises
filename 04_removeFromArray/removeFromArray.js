// const removeFromArray = function(array, toRemove) {

// 	for (let i = 0; i <= array.length; i++) {
// 		if (array[i] === toRemove) {
// 			array.splice(i, 1);
// 			return array;
// 		}
// 	}
// 	return array;

// };

const removeFromArray = function(array, ...toRemove) {

	let toRemoveLength = toRemove.length;

	for (let i = 0; i < toRemoveLength; i++) {
		let itemToRemove = toRemove[i];
		console.log('itemToRemove: ' + itemToRemove);

		for (let j = 0; j < array.length; j++) {
			console.log('itemBeingChecked: ' + array[j]);
			if (array[j] === itemToRemove) {
				console.log('itemToRemove = itemBeingChecked: ' + (array[j] === itemToRemove));
				console.log('old Array: ' + array);
				// console.log('removed: ' + array.splice(j, 1));
				array.splice(j, 1);
				console.log('new Array: ' + array);
			} 
		}


	}


	return array;
};

// removeFromArray([1,2,3,4], 1, 2, 3);


// Do not edit below this line
module.exports = removeFromArray;


// FUNCTION remove toRemove from array {

// 	for every item in array {
// 		check if item == toRemove {
// 			array.splice(item[i], 1);
// 			return array;
// 		}
// 	}


// }