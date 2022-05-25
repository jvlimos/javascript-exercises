# Exercise 04 - removeFromArray

Implement a function that takes an array and some other arguments then removes the other arguments from that array:

```javascript
removeFromArray([1, 2, 3, 4], 3); // should remove 3 and return [1,2,4]
```

## Hints

The first test on this one is fairly easy, but there are a few things to think about(or google) here for the later tests:

- how to remove a single element from an array
- how to deal with multiple optional arguments in a javascript function
- [Check this link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments).  Scroll down to the bit about `Array.from` or the spread operator. - [Or this link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters).
  

	const removeFromArray = function(array, ...toRemove) {

	let toRemoveLength = toRemove.length;

	for (let i = 0; i < toRemoveLength; i++) {
		let itemToRemove = toRemove[i];
		console.log('itemToRemove: ' + itemToRemove);

		for (let j = 0; j < array.length; j++) {
			console.log('itemBeingChecked: ' + array[j]);
			if (array[j] === itemToRemove) {
				console.log('itemToRemove === itemBeingChecked: ' + (array[j] === itemToRemove));
				console.log('old Array: ' + array);
				array.splice(j, 1);
				console.log('removed: ' + array.splice(j, 1));
				console.log('new Array: ' + array);
			}
		}


	}


	return array;
};

removeFromArray([1,2,3,4], 1, 2, 3);


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