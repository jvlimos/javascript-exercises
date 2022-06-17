const findTheOldest = function(arr) {

	let yearsLived = [];

  for (let i = 0; i < arr.length; i++) {
    
    if (!arr[i].yearOfDeath) {
      yearsLived.push(new Date().getFullYear() - arr[i].yearOfBirth);
    } else {
      yearsLived.push(arr[i].yearOfDeath - arr[i].yearOfBirth);
    }
    
  }

  return arr[yearsLived.indexOf(Math.max(...yearsLived))];

};

// Do not edit below this line
module.exports = findTheOldest;
